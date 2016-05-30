import store from './store';

const cable = ActionCable.createConsumer(
  'ws://' + window.location.host + '/websocket'
);

export default cable.subscriptions.create('ActionChannel', {
  publish: function(action) {this.perform('reduce', action); },
  received: action => {
    store.dispatch(action);
  }
});
