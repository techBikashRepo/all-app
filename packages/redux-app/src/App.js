import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "./features/todos/todoSlice";
import {
  Container,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Paper,
} from "@mui/material";
import { Check, Delete, Undo } from "@mui/icons-material";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "16px", marginTop: "16px" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Todo App
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          label="Add a new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleAddTodo()}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddTodo}
          style={{ marginTop: "16px" }}
        >
          Add Todo
        </Button>
        <List>
          {todos.map((todo) => (
            <ListItem
              key={todo.id}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              secondaryAction={
                <>
                  <IconButton
                    edge="end"
                    onClick={() => dispatch(toggleTodo(todo.id))}
                  >
                    {todo.completed ? <Undo /> : <Check />}
                  </IconButton>
                  <IconButton
                    edge="end"
                    onClick={() => dispatch(deleteTodo(todo.id))}
                  >
                    <Delete />
                  </IconButton>
                </>
              }
            >
              <ListItemText primary={todo.text} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

export default App;
