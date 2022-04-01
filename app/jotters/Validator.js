import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { Jotter } from './Jotter';

export const validateJotterId = ({ jotterId }) => {
  try {
    check(jotterId, String);
  } catch (exception) {
    throw new Meteor.Error('403', 'The information entered is not valid');
  }
};

export const validateJotterOwner = ({ jotterId }) => {
  const jotter = Jotter.findOne({
    _id: jotterId,
    userId: Meteor.userId(),
  });
  if (!jotter) {
    throw new Meteor.Error('Error', 'Access denied.');
  }
};
