import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { LoggedInMixin } from 'meteor/tunifight:loggedin-mixin';
// eslint-disable-next-line import/no-unresolved
import { Jotter } from './Jotter';
// eslint-disable-next-line import/named
import { validateJotterId, validateJotterOwner } from './Validator';

const validateInput = ({ jotterId }) => {
  validateJotterId({ jotterId });
  validateJotterOwner({ jotterId });
};

export const removeJotter = new ValidatedMethod({
  name: 'removeJotter',
  mixins: [LoggedInMixin],
  checkLoggedInError: {
    error: 'notLoggedIn',
  },
  validate: validateInput,
  run({ jotterId }) {
    Jotter.remove(jotterId);
  },
});
