import React, { useState, useEffect } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { LinksCollection } from '../api/links/collection';

export const OnlyReact = () => {
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
  }, [counter])

  useEffect(() => {
    console.log('useEffect [text]: ', text);    
  }, [text])

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
    </div>

    </div>
  );
};
