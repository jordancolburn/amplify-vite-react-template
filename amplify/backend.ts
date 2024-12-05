import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

const backend = defineBackend({
  auth,
  data,
});

export const httpDataSource = backend.data.addHttpDataSource(
  "HttpDataSource",
  "https://api.thenewsapi.com/v1"
);
