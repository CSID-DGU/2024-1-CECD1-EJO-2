import bentoml
from bentoml.io import JSON, Text
import torch


class BertClassifier:
    def __init__(self, model_ref):
        self.model = model_ref.to_runner()
        self.tokenizer = model_ref.custom_objects['tokenizer']

    def preprocess(self, url):
        tokens = self.tokenizer.tokenize(url)
        token_ids = self.tokenizer.convert_tokens_to_ids(tokens)
        input_ids = torch.tensor(token_ids, dtype=torch.long).unsqueeze(0)
        attention_mask = torch.ones_like(input_ids)
        token_type_ids = torch.zeros_like(input_ids)
        return input_ids, attention_mask, token_type_ids

    def predict(self, url):
        input_ids, attention_mask, token_type_ids = self.preprocess(url)
        outputs = self.model(input_ids, attention_mask, token_type_ids)
        logits = outputs[0]
        predictions = torch.argmax(logits, dim=1)
        print(predictions.item())
        return predictions.item()


model_ref = bentoml.transformers.get("malicious-url-classifier:latest")
model_runner = model_ref.to_runner()

bert_classifier = BertClassifier(model_ref)

svc = bentoml.Service("bert_classifier_service")


@svc.api(input=Text(), output=JSON())
def classify(input_text):
    prediction = bert_classifier.predict(input_text)
    return {"prediction": prediction}


if __name__ == "__main__":
    from bentoml.server import serve

    model_runner.init_local()
    serve(svc)
