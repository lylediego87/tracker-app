const INITIAL_STATE = {
  drivers: []
}

const driversReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case '':
      return {
        ...state
      }
    default:
      return {
        ...state
      }
  }
}

export default driversReducer;