import { SET_IMAGE } from '../actions';

export const image = (state = '', action) => {
  switch (action.type) {
    case SET_IMAGE:
      return {
        ...state,
        imageData: action.image,
      };
    default:
      return state;
  }
};
