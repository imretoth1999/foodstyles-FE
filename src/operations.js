import { gql } from '@apollo/client';

export const GET_TODOS = gql`
  query {
    todos {
      id
      title
      completed
    }
  }
`;

export const CREATE_TODO = gql`
  mutation createTodo($title: String!) {
    createTodo(title: $title) {
      id
      title
      completed
    }
  }
`;

export const UPDATE_TODO_COMPLETED = gql`
  mutation updateTodoCompleted($id: Int!, $completed: Boolean!) {
    updateTodoCompleted(id: $id, completed: $completed) {
      id
      title
      completed
    }
  }
`;

export const DELETE_TODO = gql`
  mutation deleteTodo($id: Int!) {
    deleteTodo(id: $id) {
      id
    }
  }
`;
