import { Meteor } from 'meteor/meteor';
import { Migrations } from 'meteor/percolate:migrations';
import '../db/migrations';

import './jotters/RemoveJotter';
import './jotters/InsertJotter';
import './jotters/ToggleJotterDone';
import './jotters/JottersPublications';

/**
 * This is the server-side entry point
 */
Meteor.startup(() => {
  Migrations.migrateTo('latest');
});
