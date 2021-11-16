import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from './redux/greetings_duck';

const Greeting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting());
  }, []);

  const greetings = useSelector((state) => state.greetings);

  return (
    <div>
      Greeting:
      {greetings}
    </div>
  );
};

export default Greeting;
