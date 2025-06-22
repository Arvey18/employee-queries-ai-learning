import fs from 'fs';
import natural from 'natural';

class NLPService {
  constructor() {
    this.classifier = new natural.BayesClassifier();
    this.trainClassifier();
  }

  // Train the classifier with example phrases for different intents
  trainClassifier() {
    const intents = JSON.parse(fs.readFileSync('intents/intents.json', 'utf8'));
    for (const [intent, phrases] of Object.entries(intents)) {
      phrases.forEach((phrase) => {
        this.classifier.addDocument(phrase, intent);
      });
    }
    this.classifier.train();
  }

  // Classify the user query and return the intent
  classify(userQuery) {
    return this.classifier.classify(userQuery);
  }
}

const nlpService = new NLPService();

export default nlpService;
