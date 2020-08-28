import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import conversations from './conversations';

const models = {
  conversations,
};

export const store = init({
  models,
});

export const { dispatch } = store;
export type Dispatch = RematchDispatch<typeof models>;
export type RootState = RematchRootState<typeof models>;
