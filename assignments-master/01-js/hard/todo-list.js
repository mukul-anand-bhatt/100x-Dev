class Todo {
  constructor() {
      this.todos = [];
  }

  add(todo) {
      this.todos.push(todo);
  }

  remove(index) {
      if (index >= 0 && index < this.todos.length) {
          this.todos.splice(index, 1);
      } else {
          throw new Error('Index out of bounds');
      }
  }

  update(index, updatedTodo) {
      if (index >= 0 && index < this.todos.length) {
          this.todos[index] = updatedTodo;
      } else {
          throw new Error('Index out of bounds');
      }
  }

  getAll() {
      return this.todos;
  }

  get(index) {
      if (index >= 0 && index < this.todos.length) {
          return this.todos[index];
      } else {
          throw new Error('Index out of bounds');
      }
  }

  clear() {
      this.todos = [];
  }
}

module.exports = Todo;
