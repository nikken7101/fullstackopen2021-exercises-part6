import anecdotesService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'VOTE':
      const id = action.data.id
      const votes = action.data.votes
      const anecdoteToChange = state.find(n => n.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: votes
      }
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : changedAnecdote
      )
    case 'ADD':
      return [...state, action.data]
    case 'INIT':
      return action.data
    default: return state
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdotesService.createNew(content)
    dispatch({
      type: 'ADD',
      data: newAnecdote,
    })
  }
}

export const voteAnecdote = id => {
  return async dispatch => {
    const newAnecdote = await anecdotesService.vote(id)
    const votes = newAnecdote.votes
    dispatch({
      type: 'VOTE',
      data: { id, votes }
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll()
    dispatch({
      type: 'INIT',
      data: anecdotes,
    })
  }
}

export default anecdoteReducer