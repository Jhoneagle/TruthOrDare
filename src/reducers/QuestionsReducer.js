import questions from '../services/QuestionService';

const initialState = [];

const questionsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CREATE_QUESTION':
      return state.concat(action.newOne);
    case 'REMOVE_QUESTION':
      return state.filter(b => b.id !== action.key);
    case 'GET_QUESTIONS':
      return action.observations;
    default:
      return state;
  }
};

export const initializeQuestions = () => {
  return async (dispatch) => {
    const observations = await questions.getAll();
    
    dispatch({
      type: 'GET_QUESTIONS',
      observations
    })
  }
};

export const createQuestion = (data) => {
  return async (dispatch) => {
    const newOne = await questions.create(data);
    
    dispatch({
      type: 'CREATE_QUESTION',
      newOne
    })
  }
};

export const deleteQuestion = (key) => {
  return async (dispatch) => {
    dispatch({
      type: 'REMOVE_QUESTION',
      key
    })
  }
};

export default questionsReducer