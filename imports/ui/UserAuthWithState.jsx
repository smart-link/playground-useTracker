import React, { useState, useEffect } from 'react';
import { useTracker } from 'meteor/react-meteor-data';

export const UserAuthWithState = () => {
  const currentUser = useTracker(() => {
    const user = Meteor.user();
    console.log('--------------- useTracker Meteor.loggingIn: ', Meteor.loggingIn());
    console.log('--------------- useTracker user: ', user);
    return user;
  // }, []);
  });

  [loggedIn, setLoggedIn] = useState(false);

  onClick = () => {
    if(loggedIn) {
      Meteor.logout((error) => {
        if (error) {
          console.error(error);
          return;
        }
        setLoggedIn(false);
        console.log('LOGOUT SUCCESS!');
      });
    } else {
      Meteor.loginWithPassword('tester', '1234!!!!', (error) => {
        if(error) {
          console.error(error);
          return;
        }
        setLoggedIn(true);
        console.log('LOGIN SUCCESS!');
      });

    }
  }

  return (
    <div>
      <button onClick={onClick}>{loggedIn ? 'Logout' : 'Login'}</button>
      <p>{ currentUser?.username }</p>
    </div>
  );
};
