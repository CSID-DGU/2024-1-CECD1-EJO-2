import pandas as pd

from transformers import BertTokenizer, BertModel

URL_PATH = 'data/malicious_phish.csv'

url = pd.read_csv(URL_PATH)
tokenizer = BertTokenizer.from_pretrained('bert-base-cased')

def tokenization(url):
    tokens_id_list = []
    tokens = tokenizer.tokenize(url)
    token_ids = tokenizer.convert_tokens_to_ids(tokens)
    tokens_id_list.append(token_ids)
    return tokens_id_list

url['token_ids'] = url['url'].apply(tokenization)

url.to_csv('data/url_data.csv', index=False)