import questions from '../services/QuestionService';

const initialState = [];

const questionsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CREATE_QUESTION':
      return state.concat(action.newOne);
    case 'REMOVE_QUESTION':
      return state.filter(b => b.id !== action.key);
    case 'GET_QUESTIONS':
      return action.data;
    default:
      return state;
  }
};

export const initializeQuestions = () => {
  return async (dispatch) => {
    const data = await questions.getAll();
    
    dispatch({
      type: 'GET_QUESTIONS',
      data
    })
  }
};

export const createQuestion = (data, check) => {
  return async (dispatch) => {
    let newOne;
    
    if (check === false) {
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