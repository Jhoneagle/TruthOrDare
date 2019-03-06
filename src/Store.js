import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import questionsReducer from './reducers/QuestionsReducer'

const reducer = combineReducers({
  questions: questionsReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;