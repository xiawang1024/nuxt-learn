export const state = () => ({
    count:0
})

export const mutations = {
    ADD_COUNT(state,res) {
        state.count++
    }
}

export const actions = {
    add_count({commit},res) {
        commit('ADD_COUNT',res)
    }
}