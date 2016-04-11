import { createAction } from 'tahoe';
import { Schema } from 'normalizr';

const greetings = new Schema('greetings');

export const greet = createAction({
  endpoint: () => `http://localhost:8080/api/hello`,
  method: 'GET',
  model: greetings
});
