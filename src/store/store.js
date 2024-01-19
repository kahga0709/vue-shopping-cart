import { createStore } from 'vuex'

function updateLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))

}

const store = createStore(
    {
        state: {
            // cart: []
            data: 'Hello, Vuex!',
        },
        mutations: {
            // productQuantity: state => product => {
            //     const item = state.cart.find(i => i.id === product.id)
            // }

            updateData(state, newData) {
                state.data = newData;
            },
        },
        actions: {
            fetchData(context) {
                // Perform async operation
                // Commit mutation with the received data
                context.commit('updateData', newData);
            },
        },
        modules: {
            uppercasedData(state) {
                return state.data.toUpperCase();
            },
        },
    },
);

export default store
