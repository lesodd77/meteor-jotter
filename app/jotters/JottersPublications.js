import { Meteor } from 'meteor/meteor';
import { Jotter } from './Jotter';

Meteor.publish('jottersByLoggedUser', function publishJotters() {
  return Jotter.find({ userId: this.userId });
});
