import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.feature_selection import SelectFromModel
from imblearn.over_sampling import SMOTE
from sklearn.preprocessing import MinMaxScaler
from transformers import BertTokenizer

FEATURE_PATH = 'data/dataset_full.csv'
feature = pd.read_csv(FEATURE_PATH)

X = feature.drop('phishing', axis=1)
y = feature['phishing']

forest = RandomForestClassifier(n_estimators=100, random_state=42, n_jobs=-1)
forest.fit(X, y)

forest.feature_names_in_ = X.columns.tolist()

selector = SelectFromModel(forest, prefit=True)
X_important = selector.transform(X)

important_features = X.columns[selector.get_support()]

smote = SMOTE(random_state=42)
X_smoted, y_smoted = smote.fit_resample(X_important, y)

scaler = MinMaxScaler()
X_normalized = scaler.fit_transform(X_smoted)

X_string = pd.DataFrame(X_normalized, columns=important_features).astype(str)
feature_strings = X_string.apply(lambda x: '/'.join(x), axis=1)

print(f'feature strings = {feature_strings}')

df_feature_strings = pd.DataFrame(feature_strings, columns=['feature_string'])
tokenizer = BertTokenizer.from_pretrained('bert-base-cased')


def tokenization(feature_string):
    tokens_id_list = []
    tokens = tokenizer.tokenize(feature_string)
    token_ids = tokenizer.convert_tokens_to_ids(tokens)
    tokens_id_list.append(token_ids)
    return tokens_id_list


feature['token_ids'] = df_feature_strings['feature_string'].apply(tokenization)

feature.to_csv('data/feature_data.csv', index=False)
