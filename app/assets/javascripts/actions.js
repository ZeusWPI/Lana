export const ADD_MESSAGE = 'ADD_MESSAGE';

export function addMessage(message) {
  return {
    type: ADD_MESSAGE,
    payload: message
  };
}
