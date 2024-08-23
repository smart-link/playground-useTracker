import React from 'react';
import { OnlyReact } from './OnlyReact.jsx';
import { WithTrackerWithoutDeps } from './WithTrackerWithoutDeps.jsx';
import { WithTrackerWithEmptyDeps } from './WithTrackerWithEmptyDeps.jsx';
import { WithTrackerWithDeps } from './WithTrackerWithDeps.jsx';
import { UserAuthWithState } from './UserAuthWithState.jsx';
import { UserAuthWithoutState } from './UserAuthWithoutState.jsx';

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>

    {/* <UserAuthWithState /> */}
    <UserAuthWithoutState />

    {/* <OnlyReact/> */}
    <WithTrackerWithoutDeps />
    {/* <WithTrackerWithEmptyDeps /> */}
    {/* <WithTrackerWithDeps /> */}

  </div>
);
