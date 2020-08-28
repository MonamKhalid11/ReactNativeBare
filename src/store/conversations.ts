import { Dispatch } from '.';
import { Conversation } from 'src/common/types';

type State = ReadonlyArray<Conversation>;

const mockConversations = [
  { name: 'The Rock', message: 'Wrestle with me!', time: '8:18PM', id: 1 },
  {
    name: 'Yoga Class (8)',
    message: '[104 new messages]',
    time: '8:02PM',
    id: 2,
  },
] as ReadonlyArray<Conversation>;

const conversations = {
  state: [] as State,
  reducers: {
    loaded: (state: State, conversations: ReadonlyArray<Conversation>) => conversations,
  },
  effects: (dispatch: any) => {
    const { conversations } = dispatch as Dispatch;
    return {
      async load() {
        conversations.loaded(mockConversations);
      },
    };
  },
};

export default conversations;
