import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { LoggedInMixin } from 'meteor/tunifight:loggedin-mixin';
import { check } from 'meteor/check';
// eslint-disable-next-line import/no-unresolved
import { Jotter } from './Jotter';
import { Meteor } from 'meteor/meteor';

const validateInput = ({ description }) => {
  try {
    check(description, String);
  } catch (exception) {
    throw new Meteor.Error('403', 'The information entered is not valid');
  }
};

export const insertJotter = new ValidatedMethod({
  name: 'insertJotter',
  mixins: [LoggedInMixin],
  checkLoggedInError: {
    error: 'notLoggedIn',
  },
  validate: validateInput,
  run({ description }) {
    const jotter = new Jotter({
      description,
      userId: this.userId,
      createdAt: new Date(),
    });
    jotter.save();
  },
});
