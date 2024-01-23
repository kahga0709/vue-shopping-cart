import { createStore } from 'vuex'

function updateLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
}

const store = createStore(
    {
        state: {
            cart: []
        },
        getters: {
            cartItems: state => {
                return state.cart
            }
        },
        mutations: {
            addToCart(state, product) {
                let item = state.cart.find(i => i.id === product.id)
                if (item) {
                    item.quantity += product.quantity;
                } else {
                    state.cart.push({ ...product })
                }
                updateLocalStorage(state.cart)
            },

            removeFromCart(state, product, index) {
                let item = state.cart.find(i => i.id === product.id)
                if (item.quantity > 1) {
                    item.quantity--
                }
                updateLocalStorage(state.cart)
            },

            remove(state, index) {
                state.cart.splice(index, 1)
                updateLocalStorage(state.cart)
            }
        },

        actions: {},

        modules: {},
    },
);

export default store
