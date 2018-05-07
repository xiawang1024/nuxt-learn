export default function ({ store, route, redirect }) {   
    store.dispatch('add/add_count', route.path)
}