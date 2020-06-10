import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
 
Vue.use(Vuex);
Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

export default new Vuex.Store({
  state: {
    todos: [],
    users: [],
    authUsers: {
      admin: {
        email: 'admin@todo.app',
        password: 'nimda'
      },
      guest: {
        email: 'guest@todo.app',
        password: 'guest'
      },
    },
    logedInUser: localStorage.getItem('logedInUser') || '',
    isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated')) || false
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos;
    },
    setUsers(state, users) {
      state.users = users;
    },
    addNewTask(state, todo) {
      state.todos.push(todo);
    },
    auth_request(state, logedInUser) {
      state.isAuthenticated = true
      localStorage.setItem('isAuthenticated', true)
      state.logedInUser = logedInUser
      localStorage.setItem('logedInUser', logedInUser)
      
    },
    logout(state) {
      state.isAuthenticated = false
      localStorage.setItem('isAuthenticated', false)
      localStorage.setItem('logedInUser', '')
    },
  },
  actions: {
    setTodos({commit}) {
      Vue.axios.get('todos').then(result => {
        console.log(result.data);  
        commit('setTodos', result.data);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    },
    setUsers({commit}) {
      Vue.axios.get('users').then(result => {
        console.log(result.data);  
        commit('setUsers', result.data);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    },
    addNewTask({commit}, todo) { 
        commit('addNewTask', todo);
    },
    auth_request({commit, state}, { email, password }) {
      return new Promise((resolve, reject) => {
        if(state.authUsers.admin.email === email && state.authUsers.admin.password === password) {
          commit('auth_request', 'admin')
          resolve()     
        } else if(state.authUsers.guest.email === email && state.authUsers.guest.password === password) {
          commit('auth_request', 'guest')
          resolve()     
        } else {
          reject('Wrong email or password! Try again!')
        }
      })
    },
    logout({commit}) { 
      commit('logout');
  },
  }
});
