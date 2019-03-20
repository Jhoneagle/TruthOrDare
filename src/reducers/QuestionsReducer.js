import questions from '../services/QuestionService';

const initialState = [];

const questionsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CREATE_QUESTION':
      return state.concat(action.newOne);
    case 'REMOVE_QUESTION':
      return state.filter(b => b.id !== action.key);
    case 'GET_QUESTIONS':
      return action.questions;
    default:
      return state;
  }
};

export const initializeQuestions = () => {
  return async (dispatch) => {
    const questions = await questions.getAll();
    
    dispatch({
      type: 'GET_QUESTIONS',
      questions
    })
  }
};

export const createQuestion = (data, ckeck) => {
  return async (dispatch) => {
    let newOne;
    
    if (check === true) {
      newOne = await questions.create(data);
    } else {
      newOne = data;
    }
    
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