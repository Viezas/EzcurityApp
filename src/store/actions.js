export const addUser = ( {commit}, user ) => {
  commit('addUser', user)
}

export const clearState = ( {commit}) => {
  let user = {
    email : '',
    username : '',
    token : ''
  }
  commit('clearState', user)
}