import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";

const CounterApp = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={2}>
      <Typography variant="h4" gutterBottom>
        Counter: {count}
      </Typography>
      <Box display="flex" gap={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(increment())}
          disabled={count === 10}
        >
          Increment
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch(decrement())}
          disabled={count === 0}
        >
          Decrement
        </Button>
      </Box>
      <Typography
        variant=""
        gutterBottom
        style={{ marginTop: "30px", color: grey[500] }}
      >
        *Counter should be between 0 and 10
      </Typography>
    </Box>
  );
};

export default CounterApp;
