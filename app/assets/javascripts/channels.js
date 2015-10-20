import store from './store';

const cable = Cable.createConsumer('ws://127.0.0.1:28080');

function subscribe(channel) {
  return cable.subscriptions.create(channel, {
    publish: function(action) {this.perform('action', action) },
    received: action => {
      console.log(action);
      store.dispatch(action);
    }
  });
}

export const eventsChannel = subscribe("EventsChannel");
export const authenticationChannel = subscribe("AuthenticationChannel");
export const groupsChannel = subscribe("GroupsChannel");
