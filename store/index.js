export const state = () => ({
    visits:[]
})

export const mutations = {
    ADD_VISIT(state,res) {
        state.visits.push({
            res,
            date:new Date().toJSON()
        })
    }
}

export const actions = {
    add_visit({commit},res) {
        commit('ADD_VISIT',res)
    }
}