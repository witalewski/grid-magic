import { ADD_IMAGE } from '../actions';

export const image = (state = {}, action) => {
  switch (action.type) {
    case ADD_IMAGE:
      return {
        ...state,
        image: action.image,
      };
    default:
      return state;
  }
};
