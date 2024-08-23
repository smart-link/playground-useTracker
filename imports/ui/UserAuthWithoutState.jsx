import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';

export const UserAuthWithoutState = () => {
  const currentUser = useTracker(() => {
    const user = Meteor.user();
    console.log('--------------- useTracker Meteor.loggingIn: ', Meteor.loggingIn());
    console.log('--------------- useTracker user: ', user);
    return user;
  }, []);
  // });

  onClick = () => {
    if(currentUser) {
      Meteor.logout((error) => {
        if (error) {
          console.error(error);
          return;
        }
        console.log('LOGOUT SUCCESS!');
      });
    } else {
      Meteor.loginWithPassword('tester', '1234!!!!', (error) => {
        if(error) {
          console.error(error);
          return;
        }
        console.log('LOGIN SUCCESS!');
      });

    }
  }

  return (
    <div>
      <button onClick={onClick}>{currentUser ? 'Logout' : 'Login'}</button>
      <p>{ currentUser?.username }</p>
    </div>
  );
};
