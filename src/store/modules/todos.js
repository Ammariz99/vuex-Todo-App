 import axios from "axios";



const state = {
    todos: [
       
    ]
};
const getters ={
    allTodos(state){
        return state.todos
    }
};

const mutations ={
    setTodos(state,todos){
        state.todos = todos
    },
    newTodo(state, todo){
        state.todos.unshift(todo)
    },
    removeTodo(state, id){
        state.todos = state.todos.filter(todo => todo.id !== id)
    },
    updateTodo(state, updatedTodo){
        const index = state.todos.findIndex(todo => todo.id === updatedTodo.id);
        if(index !== -1){
            state.todos.splice(index, 1, updatedTodo)
        }
    }
};

/**create actions in which fetchTodos function created
 * get json api response in response variable
 * console the response to check todos are get or not on console
 * this fetchTodos function is dispatch in TodosApp component in mapActions
 * and fetchTodos is called in created() life cycle hook
 */
const actions = {
    async fetchTodos(context){
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        context.commit('setTodos', response.data)
    },
    async addTodo(context, title){
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', 
            {title, completed: false});
            context.commit('newTodo', response.data)
    },
    async deleteTodo(context, id){
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        context.commit('removeTodo', id);
    },
    async filterTodos(context, e){
         const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
         console.log(limit)
         const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
         context.commit('setTodos', response.data)
    },
    async updateTodo(context, updatedTodo){
        const response =  await axios.put(`https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`, updatedTodo)
        console.log(response.data)
        context.commit('updateTodo', response.data)
    
    },
        
};


export default {
    state,
    getters,
    mutations,
    actions
}