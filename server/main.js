import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links/collection';
import '/imports/api/links/server/publications';

async function insertLink({ title, url }) {
  await LinksCollection.insertAsync({ title, url, createdAt: new Date() });
}

Meteor.startup(async () => {
  // If the Links collection is empty, add some data.
  if (await LinksCollection.find().countAsync() === 0) {

    const array = Array.from(Array(10000).keys());
    
    for await (const item of array) {
      console.log(item);
      await insertLink({
        title: `${item} item`,
        url: `https://www.meteor.com/tutorials/react/creating-an-app${item}`,
      });

    }
  }

  if (await Meteor.users.find().countAsync() === 0) {
    Accounts.createUser({
      username: 'tester',
      email: 'test@test.com',
      password: '1234!!!!'
    });
  }

});
