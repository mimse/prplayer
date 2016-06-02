import { types } from '../actions/playerActions'; 

export default function play(state = {}, action) {
  if(action.type === types.PLAY) {
    return {
      ...state,
      play: true
    }
  } else {
    return state;
  }
}