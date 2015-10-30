import store from './store';

const cable = Cable.createConsumer(
  'ws://' + window.location.host + '/websocket'
);

export default cable.subscriptions.create('ActionChannel', {
  publish: function(action) {this.perform('reduce', action) },
  received: action => {
    console.log(action);
    store.dispatch(action);
  }
});
