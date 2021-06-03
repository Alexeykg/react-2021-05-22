import { DECREMENT, INCREMENT, REMOVE } from '../constants';

// { [productId]: amount }
export default (state = 0, action) => {
  const { type, id } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };
    case DECREMENT:
      return { ...state, [id]: (state[id] || 0) - 1 };
    case REMOVE:
      return Object.keys(state).reduce((acc, productId) => {
        if (productId !== id) {
          return { ...acc, [productId]: state[productId] };
        }
        return acc;
      }, {});
    default:
      return state;
  }
};
