export interface Todo {
  id: number;
  tod: string;
  isDone: boolean;
}

export interface Todos {
  todos: Todo[];
}