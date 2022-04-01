import { Class } from 'meteor/jagi:astronomy';
import { Mongo } from 'meteor/mongo';

const JottersCollection = new Mongo.Collection('jotters');

export const Jotter = Class.create({
  name: 'Jotter',
  collection: JottersCollection,
  fields: {
    description: String,
    userId: String,
    done: {
      type: Boolean,
      default: false,
    },
    createdAt: Date,
  },
});
