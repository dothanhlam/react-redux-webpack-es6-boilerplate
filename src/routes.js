import React from 'react';
import { Route } from 'react-router';

import AppContainer from 'containers/app-container';
import BasePageLayout from 'containers/base-page-layout';

import HomePage from 'pages/home-page/home-page';

export default(
  // Route components without path will render their children...
  <Route component={AppContainer}>
    <Route component={BasePageLayout}>
      <Route path="/" component={HomePage} />
    </Route>Route>
  </Route>
);
