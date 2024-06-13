import TodoInput from '@/components/ToDoInput';
import TodoList from '@/components/ToDoList';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const Index: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const initialTodos: Todo[] = [
      { id: 1, text: 'Learn React Native', completed: false },
      { id: 2, text: 'Build a to-do list app', completed: false },
    ];
    setTodos(initialTodos);
  }, []);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const markComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} markComplete={markComplete} deleteTodo={deleteTodo} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default Index;