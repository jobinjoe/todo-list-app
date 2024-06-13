import React from 'react';
import { FlatList } from 'react-native';
import TodoItem from './ToDoItem';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  markComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, markComplete, deleteTodo }) => {
  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => (
        <TodoItem
          todo={item}
          markComplete={markComplete}
          deleteTodo={deleteTodo}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default TodoList;