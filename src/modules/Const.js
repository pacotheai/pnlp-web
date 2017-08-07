export const EMPTY = "";

export const sentencesURI = 'http://172.17.0.3:5050/api/v1/sentences/me';
export const tokenizerURI = 'http://172.17.0.3:5050/api/v1/tokenizer/me';
export const sentimentURI = 'http://172.17.0.3:5050/api/v1/sentiment/me';

export const HEADERS = new Headers({
  "Accept": "application/json",
	"Content-Type": "application/json",
});
