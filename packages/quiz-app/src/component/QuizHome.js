import React, { useState } from "react";
import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

import quizQuestions from "../data/questions/AWSCertifiedCloudPractitioner.json";

const QuizHome = () => {
  const [course, setCourse] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };

  const handleStartQuiz = () => {
    if (course) {
      setQuizStarted(true);
    } else {
      alert("Please select a course to start the quiz.");
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === quizQuestions[currentQuestionIndex].answer) {
      console.log("Correct answer!");
    } else {
      console.log("Wrong answer!");
    }
    setSelectedOption("");
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "16px", marginTop: "32px" }}>
        {!quizStarted ? (
          <>
            <Typography variant="h4" component="h1" gutterBottom>
              Quiz App
            </Typography>
            <FormControl
              fullWidth
              variant="outlined"
              style={{ marginTop: "16px" }}
            >
              <InputLabel id="course-select-label">Select Course</InputLabel>
              <Select
                labelId="course-select-label"
                value={course}
                onChange={handleCourseChange}
                label="Select Course"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="course1">
                  AWS Certified Cloud Practitioner
                </MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "16px" }}
              onClick={handleStartQuiz}
            >
              Start Quiz
            </Button>
          </>
        ) : (
          <div>
            {currentQuestionIndex < quizQuestions.length ? (
              <>
                <Typography variant="h5" component="h2" gutterBottom>
                  {quizQuestions[currentQuestionIndex].question}
                </Typography>
                <FormControl component="fieldset">
                  <RadioGroup
                    value={selectedOption}
                    onChange={handleOptionChange}
                  >
                    {quizQuestions[currentQuestionIndex].options.map(
                      (option, index) => (
                        <FormControlLabel
                          key={index}
                          value={option}
                          control={<Radio />}
                          label={option}
                        />
                      )
                    )}
                  </RadioGroup>
                </FormControl>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{ marginTop: "16px" }}
                  onClick={handleNextQuestion}
                >
                  Next Question
                </Button>
              </>
            ) : (
              <Typography variant="h5" component="h2" gutterBottom>
                Quiz Completed!
              </Typography>
            )}
          </div>
        )}
      </Paper>
    </Container>
  );
};

export default QuizHome;
