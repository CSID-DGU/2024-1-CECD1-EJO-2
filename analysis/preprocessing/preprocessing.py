import pandas as pd

from transformers import BertTokenizer
from util import malicious_translation
from sklearn.ensemble import RandomForestClassifier
from sklearn.feature_selection import SelectFromModel
from sklearn.preprocessing import MinMaxScaler
from imblearn.over_sampling import SMOTE

class Preprocessing:
    def __init__(self, url_path, feature_path):
        self.url = pd.read_csv(url_path)
        self.feature = pd.read_csv(feature_path)
        self.tokenizer = BertTokenizer.from_pretrained('bert-base-cased')

    def tokenization(self, string):
        tokens_ids_list = []
        tokens = self.tokenizer.tokenize(string)
        token_ids = self.tokenizer.convert_tokens_to_ids(tokens)
        tokens_ids_list.append(token_ids)
        return tokens_ids_list

    def feature_selection(self):
        X = self.feature.drop(columns=['phishing'], axis=1)
        y = self.feature['phishing']

        forest = RandomForestClassifier(n_estimators=100, random_state=42, n_jobs=-1)
        forest.fit(X, y)

        forest.feature_names_in_ = X.columns.tolist()

        selector = SelectFromModel(forest, prefit=True)
        X_important = selector.transform(X)

        important_features = X.columns[selector.get_support()]
        return X_important, y, important_features

    def feature_argumentation(self, X_important, y):
        smote = SMOTE(random_state=42)
        X_smoted, y_smoted = smote.fit_resample(X_important, y)
        return X_smoted

    def feature_normalization(self, X_smoted):
        scaler = MinMaxScaler()
        X_normalized = scaler.fit_transform(X_smoted)
        return X_normalized

    def feature_string(self, X_normalized, important_features):
        X_string = pd.DataFrame(X_normalized, columns=important_features).astype(str)
        feature_strings = X_string.apply(lambda x: '/'.join(x), axis=1)
        df_feature_strings = pd.DataFrame(feature_strings, columns=['feature_string'])
        return df_feature_strings

    def url_preprocessing(self):
        self.url['label'] = self.url['type'].map(malicious_translation)
        self.url['token_ids'] = self.url['url'].apply(self.tokenization)
        self.url['url_string'] = self.url['token_ids'].apply(lambda x: '/'.join(map(str, x[0])))
        self.url.drop(columns=['url', 'type', 'token_ids'], inplace=True)
        self.url.to_csv('data/url_data.csv', index=False)

    def feature_preprocessing(self):
        X_importnat, y, important_features = self.feature_selection()
        X_smoted = self.feature_argumentation(X_importnat, y)
        X_normalized = self.feature_normalization(X_smoted)
        feature_strings = self.feature_string(X_normalized, important_features)
        self.feature['token_ids'] = feature_strings['feature_string'].apply(self.tokenization)
        self.feature['feature_string'] = self.feature['token_ids'].apply(lambda x: '/'.join(map(str, x[0])))
        self.feature = self.feature[['phishing', 'feature_string']]
        self.feature.rename(columns={'phishing': 'label'}, inplace=True)
        self.feature.to_csv('data/feature_data.csv', index=False)

    def preprocessing(self):
        self.url_preprocessing()
        self.feature_preprocessing()

if __name__ == '__main__':
    url_path = 'data/malicious_phish.csv'
    feature_path = 'data/dataset_full.csv'
    preprocessing = Preprocessing(url_path, feature_path)
    preprocessing.preprocessing()