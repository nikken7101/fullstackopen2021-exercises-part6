
const notificationReducer = (state = '', action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return action.data.notification
    case 'REMOVE_NOTIFICATION':
      return ''
    default: return state
  }
}

export const addNotification = (notification, ms) => {
  return async dispatch => {
    dispatch({
      type: 'ADD_NOTIFICATION',
      data: { notification },
    })
    setTimeout(() => dispatch({
      type: 'REMOVE_NOTIFICATION',
      data: { notification: '' }
    }), ms)
  }
}

export default notificationReducer