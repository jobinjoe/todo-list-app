import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  markComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, markComplete, deleteTodo }) => {
  return (
    <View style={styles.itemContainer}>
      <Text
        style={{
          ...styles.itemText,
          textDecorationLine: todo.completed ? 'line-through' : 'none',
        }}
        onPress={() => markComplete(todo.id)}
      >
        {todo.text}
      </Text>
      <Button title="Delete" onPress={() => deleteTodo(todo.id)} />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  itemText: {
    fontSize: 18,
    flex: 1,
  },
});

export default TodoItem;