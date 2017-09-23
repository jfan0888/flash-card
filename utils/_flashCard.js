import { AsyncStorage } from 'react-native'

export const FLASHCARD_STORAGE_KEY = 'flashCard'

export function setDummyData() {
  const dummyData = {
    TestE: {
      title: 'TestE',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    TestD: {
      title: 'TestD',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    },
    TestC: {
      title: 'TestC',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    TestB: {
      title: 'TestB',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    },
    TestA: {
      title: 'TestA',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    },
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        },
        {
          question: 'TestA',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'TestB',
          answer: 'The componentDidMount lifecycle event'
        },
        {
          question: 'TestC',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'TestD',
          answer: 'The componentDidMount lifecycle event'
        },
        {
          question: 'TestE',
          answer: 'A library for managing user interfaces'
        }
      ]
    }
  }

  AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(dummyData))

  return dummyData
}
