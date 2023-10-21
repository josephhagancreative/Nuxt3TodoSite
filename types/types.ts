export type Todo = {
  id: string
  task: string
  done: boolean
  createdAt: Date
}

export type Sorted = "oldest" | "newest" | "a-z" | "z-a"
