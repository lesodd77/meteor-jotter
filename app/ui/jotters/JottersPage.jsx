import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { Jotter } from '../../jotters/Jotter';
// eslint-disable-next-line import/no-unresolved
import { JotterForm } from './JotterForm';
import { useTracker, useFind, useSubscribe } from 'meteor/react-meteor-data';
// eslint-disable-next-line import/no-unresolved
import { JottersHeader } from './JottersHeader';
// eslint-disable-next-line import/no-unresolved
import { JotterItems } from './JotterItems';


// eslint-disable-next-line import/no-default-export
export default function JottersPage() {
  const [hideDone, setHideDone] = useState(false);
  const isLoading = useSubscribe('jottersByLoggedUser');
  const userId = useTracker(() => Meteor.userId());
  const filter = hideDone ? { done: { $ne: true }, userId } : { userId };
  const jotters = useFind(() => Jotter.find(filter, { sort: { createdAt: -1 } }), [
    hideDone,
  ]);
  const pendingCount = Jotter.find({
    done: { $ne: true },
    userId,
  }).count();

  return (
    <>
      <JottersHeader />
      <JotterForm />
      <JotterItems
        isLoading={isLoading}
        jotters={jotters}
        pendingCount={pendingCount}
        hideDone={hideDone}
        setHideDone={setHideDone}
      />
    </>
  );
}
