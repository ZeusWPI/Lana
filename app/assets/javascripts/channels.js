import store from './store';

const cable = Cable.createConsumer('ws://127.0.0.1:28080');

export const eventsChannel = cable.subscriptions.create("EventsChannel", {
  publish: function(action) {this.perform('action', action) },
  received: action => {
    console.log(action);
    store.dispatch(action);
  }
});
