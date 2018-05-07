export const state = () => ({
    users:[]
})

export const mutations = {
    ADD_USERS(state,res) {
        state.users.push({
            user:res,
            date:new Date().toJSON()
        })
    }
}

export const actions = {
    add_users({commit},res) {
        commit('ADD_USERS',res)
    }
}