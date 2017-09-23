import {
  RECEIVE_DECKS,
  ADD_DECK,
  EDIT_DECK,
  REMOVE_DECK,
} from '../actions/Deck'

function decks(state = {}, action) {
  const { title, oldTitle, newTitle } = action

  switch (action.type) {
    case RECEIVE_DECKS: {
      return {
        ...state,
        ...action.decks,
      }
    }
    case ADD_DECK: {
      return {
        ...state,
        [title]: {
          title,
          questions: [],
        }
      }
    }
    case EDIT_DECK: {
      return {
        ...state,
        [oldTitle]: {
          title: null,
        },
        [newTitle]: {
          title: newTitle,
          questions: state[oldTitle].questions,
        }
      }
    }
    case REMOVE_DECK: {
      return {
        ...state,
        [title]: {
          title: null,
        }
      }
    }
    default:
      return state
  }
}

export default decks
