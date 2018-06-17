import { TEST_ACTION } from '../actions/types';

const initialState = {
  test: false
};

export default function testReducer(state = initialState, action) {
  switch (action.type) {
    case TEST_ACTION:
      return {
        ...state,
        test: true,
      };
    default:
      return state;
  }
}