import { Migrations } from 'meteor/percolate:migrations';
import { Accounts } from 'meteor/accounts-base';
import { Jotter } from '../app/jotters/Jotter';

Migrations.add({
  version: 1,
  name: 'Add a seed username and password.',
  up() {
    Accounts.createUser({
      username: 'simon',
      password: 'abc123',
    });
  },
});

Migrations.add({
  version: 2,
  name: 'Add a few sample jotters.',
  up() {
    const createdAt = new Date();
    const { _id: userId } = Accounts.findUserByUsername('simon');
    new Jotter({
      description: 'Church Meeting',
      userId,
      createdAt,
    }).save();
    new Jotter({
      description: 'School Meeting',
      userId,
      createdAt,
    }).save();
    new Jotter({
      description: 'Field Meeting',
      userId,
      createdAt,
    }).save();
  },
});
