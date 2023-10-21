import { defineStore } from "pinia"
import { v4 as uuidv4 } from "uuid"
import type { Sorted, Todo } from "../types/types"

export const useTodoStore = defineStore("todos", {
  state: () => {
    return {
      todos: [] as Todo[],
      sorted: "oldest" as Sorted,
    }
  },

  actions: {
    toggleDone(id: string) {
      const todo = this.todos.find((todo) => todo.id === id)
      if (todo) {
        todo.done = !todo.done
      }
    },
    addTodo(taskText: string) {
      const newId = uuidv4()
      const newTodo: Todo = {
        id: newId,
        task: taskText,
        done: false,
        createdAt: new Date(),
      }
      this.todos.unshift(newTodo)
    },
    deleteTodo(id: string) {
      this.todos = this.todos.filter((t) => {
        return t.id !== id
      })
    },
    chronologicalSort() {
      if (this.sorted === "newest") {
        this.sorted = "oldest"
        return (this.todos = [...this.todos].sort(
          (a, b) => Number(b.createdAt) - Number(a.createdAt)
        ))
      } else {
        this.sorted = "newest"
        return (this.todos = [...this.todos].sort(
          (a, b) => Number(a.createdAt) - Number(b.createdAt)
        ))
      }
    },
    alphabeticalSort() {
      if (this.sorted === "a-z") {
        this.sorted = "z-a"
        this.todos = [...this.todos].reverse()
      } else {
        this.sorted = "a-z"
        this.todos = [...this.todos].sort((a, b) =>
          a.task.localeCompare(b.task)
        )
      }
    },
  },
})
