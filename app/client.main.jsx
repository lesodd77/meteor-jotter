import React, { Suspense } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
// eslint-disable-next-line import/no-unresolved
import { MainRoutes } from './ui/common/MainRoutes';
import { Spinner } from '@chakra-ui/react';

/**
 * This is the client-side entry point
 */
Meteor.startup(() => {
  document.documentElement.setAttribute('lang', 'en');
  const rootElement = document.getElementById('react-target');
  render(
    <Suspense fallback={<Spinner />}>
      <MainRoutes />
    </Suspense>,
    rootElement
  );
});
