<template>
  <div class="mt-5 shadow-md rounded-md border-2 border-solid border-teal-700">
    <form
      @submit.prevent="addNewTodo"
      class="flex justify-between p-2 rounded shadow-sm w-full gap-1"
    >
      <input
        type="text"
        class="w-full focus:outline-none indent-1"
        v-model="taskInput"
        placeholder="Write a todo..."
      />
      <button @click="addNewTodo">
        <span
          class="material-symbols-outlined bg-teal-700 hover:bg-teal-600 p-1 rounded-md"
          style="color: white"
        >
          add
        </span>
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from "../store/todoStore"

const todoStore = useTodoStore()
const taskInput = ref("")

const addNewTodo = () => {
  if (taskInput.value.length === 0) {
    return
  } else {
    todoStore.addTodo(taskInput.value)
    taskInput.value = "" // Reset the input after adding
  }
}
</script>
