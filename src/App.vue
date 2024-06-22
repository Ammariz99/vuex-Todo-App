<template>
  <div id="app">
    <div class="container">
      <AddTodos/>
      <FilterTodos/>
      <TodosApp/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import TodosApp from '@/components/TodosApp.vue'
import AddTodos from '@/components/AddTodos.vue'
import FilterTodos from './components/FilterTodos.vue'
export default {
  components:{
    TodosApp,
    AddTodos,
    FilterTodos,
  },
  
}
</script>

<style>
body{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container{
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
