import axios from 'axios';

const RANDOM_GREETING = 'RANDOM GREETING';

const getGreeting = () => async (dispatch) => {
  axios.get('http://localhost:3000/').then((response) => {
    const { data } = response;

    dispatch(
      {
        type: RANDOM_GREETING,
        content: data.data.attributes.content,
      },
    );
  });
};

const greetings = (state = [], action) => {
  switch (action.type) {
    case RANDOM_GREETING:
      return action.content;
    default:
      return state;
  }
};

export default greetings;
export { getGreeting };
