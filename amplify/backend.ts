import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

const backend = defineBackend({
  auth,
  data,
});

export const httpDataSource = backend.data.addHttpDataSource(
  "HttpDataSource",
  "https://api.thenewsapi.com/v1/news/top?api_token=FWLMxOz0vFti9cTYIbyUuI0xhIy4XOKOEynpdWxl&locale=us&limit=3"
);
