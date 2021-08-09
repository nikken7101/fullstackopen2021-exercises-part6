import React, { useEffect } from 'react'
import Notification from './components/Notification'
import NewAnecdoteList from './components/AnecdoteList'
import NewAnecdoteForm from './components/AnecdoteForm'
import { useDispatch } from 'react-redux'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])

  return (
    <div>
      <Notification />
      <NewAnecdoteList />
      <NewAnecdoteForm />
    </div>
  )
}

export default App