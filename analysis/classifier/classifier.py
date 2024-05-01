import pandas as pd
import torch
from transformers import BertModel
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report
from sklearn.model_selection import train_test_split

class URLClassifier:
    def __init__(self, feature_file, url_file):
        self.feature_file = feature_file
        self.url_file = url_file

        self.device = torch.device("mps")  
        print("Initializing BERT model")
        self.bert_model = BertModel.from_pretrained('bert-base-cased').to(self.device)
        print("BERT model initialized.")

    def map_url_labels_to_binary(self, label):
        if label in [1, 2, 3]:
            return 1  
        return 0  

    def load_data(self):
        print("Loading datasets...")
        self.feature_df = pd.read_csv(self.feature_file)
        self.url_df = pd.read_csv(self.url_file)
        print("Datasets loaded.")

        self.url_df['label'] = self.url_df['label'].apply(self.map_url_labels_to_binary)

        self.feature_df['feature_string'] = self.feature_df['feature_string'].astype(str).fillna('')
        self.url_df['url_string'] = self.url_df['url_string'].astype(str).fillna('')

        self.feature_df['features'] = self.feature_df['feature_string'].apply(self.extract_features)
        self.url_df['features'] = self.url_df['url_string'].apply(self.extract_features)

        self.combined_df = pd.concat([self.feature_df, self.url_df])
        print("Features extracted and datasets combined.")

        self.train_df, self.test_df = train_test_split(self.combined_df, test_size=0.2, stratify=self.combined_df['label'], random_state=42)
        print("Data split into training and testing sets.")

        self.X_train = torch.stack(self.train_df['features'].tolist()).numpy()
        self.y_train = self.train_df['label'].values

        self.X_test = torch.stack(self.test_df['features'].tolist()).numpy()
        self.y_test = self.test_df['label'].values
        print("Data prepared for training and testing.")

    def extract_features(self, string):
        if string == '' or pd.isna(string) or string == 'nan':
            return torch.zeros(768)  

        tokens = list(map(int, string.split('/')))

        token_chunks = [tokens[i:i+512] for i in range(0, len(tokens), 512)]

        chunk_vectors = []

        for chunk in token_chunks:
            tokens_tensor = torch.tensor([chunk]).to(self.device)

            with torch.no_grad():
                outputs = self.bert_model(tokens_tensor)

            last_hidden_state = outputs.last_hidden_state
            chunk_vector = last_hidden_state.mean(dim=1).squeeze().cpu()

            chunk_vectors.append(chunk_vector)

        final_vector = torch.stack(chunk_vectors).mean(dim=0)

        return final_vector

    def train_model(self):
        print("Training model...")
        self.clf = RandomForestClassifier(class_weight='balanced') 
        self.clf.fit(self.X_train, self.y_train)
        print("Model training completed.")

    def evaluate_model(self):
        print("Evaluating model...")
        preds = self.clf.predict(self.X_test)
        print(classification_report(self.y_test, preds))
        print("Model evaluation completed.")

if __name__ == "__main__":
    classifier = URLClassifier('data/feature_data.csv', 'data/url_data.csv')
    classifier.load_data() 
    classifier.train_model()  
    classifier.evaluate_model()
