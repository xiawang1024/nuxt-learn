export default function ({ store, route, redirect }) {
    store.dispatch('add_visit', route.path)
}