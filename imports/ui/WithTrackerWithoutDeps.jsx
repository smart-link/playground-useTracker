import React, { useState, useEffect } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { LinksCollection } from '../api/links/collection';

export const WithTrackerWithoutDeps = () => {
  const [counter, setCounter] = useState(1);
  const [text, setText] = useState(100);

  const onClick = () => {
    setCounter(counter + 1);
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    console.log('useEffect > after every render ****************')
  })

  useEffect(() => {
    console.log('useEffect > dom mount ############################')
  }, [])

  useEffect(() => {
    console.log('useEffect [counter]: ', counter);    
  })

  useEffect(() => {
    console.log('useEffect [text]: ', text);    
  })

  const isLinksReady = useTracker(() => {
    const currentUser = Meteor.user();
    const subHandler = Meteor.subscribe('links');
    console.log('--------------- useTracker subscribe ready:', subHandler.ready());      
    return subHandler.ready();
  });

  const links = useTracker(() => {
    const currentUser = Meteor.user();
    const links = LinksCollection.find({}).fetch();
    console.log('--------------- useTracker find count: ', links.length);      
    return links;
  });

  console.log('function before return =====================================')
  console.log('function before return: state [counter]: ', counter)
  console.log('function before return: state [text]: ', text)

  return (
    <div>
      <button onClick={onClick}>Click Me</button>
      <p>You've pressed the button {counter} times.</p>
      <input type='text' value={text} onChange={onChange} />
      <p>{text}</p>

      <div>
      <h2>Learn Meteor!</h2>
      <ul>{links.map(
        link => <li key={link._id}>
          <a href={link.url} target="_blank">{link.title}</a>
        </li>
      )}</ul>
    </div>

    </div>
  );
};
