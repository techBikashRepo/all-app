import React from "react";
import { Grid, Box } from "@mui/material";
import TodoApp from "./features/todos/TodoApp";
import CounterApp from "./features/counter/CounterApp";

const App = () => {
  return (
    <Grid container spacing={2} p={2}>
      <Grid item xs={12} sm={6}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "500px",
            height: "250px",
            border: "1px solid #ccc",
            boxShadow: "5px 5px 10px #aaa",
            padding: "10px",
          }}
        >
          <TodoApp />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "500px",
            height: "250px",
            border: "1px solid #ccc",
            boxShadow: "5px 5px 10px #aaa",
            padding: "10px",
          }}
        >
          <CounterApp />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "500px",
            height: "210px",
            border: "1px solid #ccc",
            boxShadow: "5px 5px 10px #aaa",
            padding: "10px",
          }}
        >
          <div>App Comming Soon....</div>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "500px",
            height: "210px",
            border: "1px solid #ccc",
            boxShadow: "5px 5px 10px #aaa",
            padding: "10px",
          }}
        >
          <div>App Comming Soon....</div>
        </Box>
      </Grid>
    </Grid>
  );
};

export default App;
