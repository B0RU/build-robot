import axios from 'axios';

export default {
  namespaced: true,
  state: {
    cart: [],
    parts: null,
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
    updateParts(state, parts) {
      state.parts = parts;
    },
  },
  getters: {
    itemsOnSale(state) {
      return state.cart.filter((item) => item.head.onSale || item.torso.onSale);
    },
  },
  actions: {
    getParts({ commit }) {
      axios.get('/api/parts')
        .then((result) => commit('updateParts', result.data))
        .catch((err) => console.log(err));
    },
    async addRobotToCart({ commit, state }, robot) {
      const cart = [...state.cart, robot];
      await axios.post('/api/cart', cart);
      return commit('addRobotToCart', robot);
    },
  },
};
