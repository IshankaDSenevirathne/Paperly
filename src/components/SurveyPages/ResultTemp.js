import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";

import Correct from "../../img/correct.png";
import Wrong from "../../img/wrong.png";
import { green, red } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";

const GreenRadio = withStyles({
  root: {
    "&$checked": {
      color: green[500],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export default function ResultTemp(props) {
  const { result, question, userAnswer, correctAnswer, questionNumber } = props;
  const value = question.choices.indexOf(userAnswer);
  const successResult = () => (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      <div>
        <FormControl component="fieldset">
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item>
              <div style={{ textAlign: "left" }}>
                <h3>
                  {questionNumber}
                  {")"}
                  {question.title}
                </h3>
              </div>
            </Grid>
            <Grid item>
              <div style={{ textAlign: "left" }}>
                <img src={Correct}></img>
              </div>
            </Grid>
          </Grid>
          <RadioGroup aria-label="question" value={value}>
            <FormControlLabel
              value={0}
              disabled
              control={<Radio />}
              label={question.choices[0]}
            />
            <FormControlLabel
              value={1}
              disabled
              control={<Radio />}
              label={question.choices[1]}
            />
            <FormControlLabel
              value={2}
              disabled
              control={<Radio />}
              label={question.choices[2]}
            />
            <FormControlLabel
              value={3}
              disabled
              control={<Radio />}
              label={question.choices[3]}
            />
            <FormControlLabel
              value={4}
              disabled
              control={<Radio />}
              label={question.choices[4]}
            />
          </RadioGroup>
        </FormControl>
      </div>
    </Grid>
  );
  const errResult = () => (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      <div>
        <FormControl component="fieldset">
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item>
              <div style={{ textAlign: "left" }}>
                <h3>
                  {questionNumber}
                  {")"}
                  {question.title}
                </h3>
              </div>
            </Grid>
            <Grid item>
              <div style={{ textAlign: "left" }}>
                <img src={Wrong}></img>
              </div>
            </Grid>
          </Grid>
          <RadioGroup aria-label="question">
            <FormControlLabel
              value={0}
              checked={
                correctAnswer == question.choices[0] ||
                userAnswer == question.choices[0]
              }
              disabled={correctAnswer != question.choices[0]}
              control={
                correctAnswer == question.choices[0] ? (
                  <GreenRadio disableRipple />
                ) : (
                  <Radio />
                )
              }
              label={question.choices[0]}
            />
            <FormControlLabel
              value={1}
              checked={
                correctAnswer == question.choices[1] ||
                userAnswer == question.choices[1]
              }
              disabled={correctAnswer != question.choices[1]}
              control={
                correctAnswer == question.choices[1] ? (
                  <GreenRadio disableRipple />
                ) : (
                  <Radio />
                )
              }
              label={question.choices[1]}
            />
            <FormControlLabel
              value={2}
              checked={
                correctAnswer == question.choices[2] ||
                userAnswer == question.choices[2]
              }
              disabled={correctAnswer != question.choices[2]}
              control={
                correctAnswer == question.choices[2] ? (
                  <GreenRadio disableRipple />
                ) : (
                  <Radio />
                )
              }
              label={question.choices[2]}
            />
            <FormControlLabel
              value={3}
              checked={
                correctAnswer == question.choices[3] ||
                userAnswer == question.choices[3]
              }
              disabled={correctAnswer != question.choices[3]}
              control={
                correctAnswer == question.choices[3] ? (
                  <GreenRadio disableRipple />
                ) : (
                  <Radio />
                )
              }
              label={question.choices[3]}
            />
            <FormControlLabel
              value={4}
              checked={
                correctAnswer == question.choices[4] ||
                userAnswer == question.choices[4]
              }
              disabled={correctAnswer != question.choices[4]}
              control={
                correctAnswer == question.choices[4] ? (
                  <GreenRadio disableRipple />
                ) : (
                  <Radio />
                )
              }
              label={question.choices[4]}
            />
          </RadioGroup>
        </FormControl>
      </div>
    </Grid>
  );
  const renderComponent = result ? successResult() : errResult();
  return renderComponent;
}
