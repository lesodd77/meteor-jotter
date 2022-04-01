import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { LoggedInMixin } from 'meteor/tunifight:loggedin-mixin';
import { Jotter } from './Jotter';
// eslint-disable-next-line import/named
import { validateJotterId, validateJotterOwner } from './Validator';

const validateInput = ({ jotterId }) => {
  validateJotterId({ jotterId });
  validateJotterOwner({ jotterId });
};

export const toggleJotterDone = new ValidatedMethod({
  name: 'toggleJotterDone',
  mixins: [LoggedInMixin],
  checkLoggedInError: {
    error: 'notLoggedIn',
  },
  validate: validateInput,
  run({ jotterId }) {
    const jotter = Jotter.findOne(jotterId);
    jotter.done = !jotter.done;
    jotter.save();
  },
});
