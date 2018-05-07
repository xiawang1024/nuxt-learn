export default function ({ store, route, redirect }) {
    store.dispatch('users/add_users', route.path)
}