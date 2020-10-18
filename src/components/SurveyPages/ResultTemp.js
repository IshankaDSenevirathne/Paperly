import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";

import CheckCircleOutlineOutlined from "@material-ui/icons/CheckCircleOutlineOutlined";
import CancelOutlined from "@material-ui/icons/CancelOutlined";

import { teal } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";

const GreenRadio = withStyles({
  root: {
    "&$checked": {
      color: teal["A400"],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const WhiteRadio = withStyles({
  root: {
    "&$disabled": {
      color: "#D0D3D4",
    },
    "&$checked": {
      color: "#1fa2ff",
    },
  },
  disabled: {},
  checked: {},
})((props) => <Radio color="default" {...props} />);

export default function ResultTemp(props) {
  const { result, question, userAnswer, correctAnswer, questionNumber } = props;

  const value = userAnswer; // question.choices.indexOf(userAnswer);
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
                  {question.img && (
                    <img
                      style={{ width: question.imgwidth }}
                      src={question.img}
                    />
                  )}
                </h3>
              </div>
            </Grid>
            <Grid item>
              <div style={{ textAlign: "left" }}>
                <CheckCircleOutlineOutlined style={{ color: teal["A400"] }} />
              </div>
            </Grid>
          </Grid>
          <RadioGroup aria-label="question" value={parseInt(value)}>
            {question.choices.map((ele, index) => {
              return (
                <FormControlLabel
                  key={index}
                  value={ele.id}
                  disabled
                  control={
                    <Radio
                      color="primary"
                      //  className={classes.radio}
                    />
                  }
                  // label={questions[activeQuestion].choices[4].text}
                  label={
                    <>
                      {ele.img && (
                        <>
                          <img
                            src={ele.img}
                            key={ele.id}
                            className="profile-img"
                            width={ele.imgwidth}
                            height="auto"
                            style={{ marginRight: "5px" }}
                          />
                          <br />
                        </>
                      )}
                      <span style={{ color: "#D0D3D4" }}> {ele.text}</span>
                    </>
                  }
                />
              );
            })}
            {/* <FormControlLabel
              value={0}
              disabled
              control={<WhiteRadio />}
              label={
                <span style={{ color: "#D0D3D4" }}>{question.choices[0]}</span>
              }
            />
            <FormControlLabel
              value={1}
              disabled
              control={<WhiteRadio />}
              label={
                <span style={{ color: "#D0D3D4" }}>{question.choices[1]}</span>
              }
            />
            <FormControlLabel
              value={2}
              disabled
              control={<WhiteRadio />}
              label={
                <span style={{ color: "#D0D3D4" }}>{question.choices[2]}</span>
              }
            />
            <FormControlLabel
              value={3}
              disabled
              control={<WhiteRadio />}
              label={
                <span style={{ color: "#D0D3D4" }}>{question.choices[3]}</span>
              }
            />
            <FormControlLabel
              value={4}
              disabled
              control={<WhiteRadio />}
              label={
                <span style={{ color: "#D0D3D4" }}>{question.choices[4]}</span>
              }
            /> */}
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
                <CancelOutlined style={{ color: "#F86E6E" }} />
              </div>
            </Grid>
          </Grid>
          <RadioGroup aria-label="question">
            {question.choices.map((ele, index) => {
              return (
                //   <FormControlLabel

                //   checked={
                //     correctAnswer == question.choices[0] ||
                //     userAnswer == question.choices[0]
                //   }
                //   disabled={correctAnswer != question.choices[0]}
                //   control={
                //     correctAnswer == question.choices[0] ? (
                //       <GreenRadio disableRipple />
                //     ) : (
                //       <WhiteRadio />
                //     )
                //   }
                //   label={
                //     <span style={{ color: "#D0D3D4" }}>{question.choices[0]}</span>
                //   }
                // />
                <FormControlLabel
                  key={index}
                  value={ele.id}
                  checked={
                    parseInt(correctAnswer) === parseInt(ele.id) ||
                    parseInt(userAnswer) === parseInt(ele.id)
                  }
                  disabled={parseInt(correctAnswer) !== parseInt(ele.id)}
                  control={
                    parseInt(correctAnswer) === parseInt(ele.id) ? (
                      <GreenRadio disableRipple />
                    ) : (
                      <WhiteRadio />
                    )
                  }
                  // label={questions[activeQuestion].choices[4].text}
                  label={
                    <>
                      {ele.img && (
                        <>
                          <img
                            src={ele.img}
                            key={ele.id}
                            className="profile-img"
                            width={ele.imgwidth}
                            height="auto"
                            style={{ marginRight: "5px" }}
                          />
                          <br />
                        </>
                      )}{" "}
                      <span style={{ color: "#D0D3D4" }}> {ele.text}</span>
                    </>
                  }
                />
              );
            })}

            {/* <FormControlLabel
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
                  <WhiteRadio />
                )
              }
              label={
                <span style={{ color: "#D0D3D4" }}>{question.choices[0]}</span>
              }
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
                  <WhiteRadio />
                )
              }
              label={
                <span style={{ color: "#D0D3D4" }}>{question.choices[1]}</span>
              }
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
                  <WhiteRadio />
                )
              }
              label={
                <span style={{ color: "#D0D3D4" }}>{question.choices[2]}</span>
              }
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
                  <WhiteRadio />
                )
              }
              label={
                <span style={{ color: "#D0D3D4" }}>{question.choices[3]}</span>
              }
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
                  <WhiteRadio />
                )
              }
              label={
                <span style={{ color: "#D0D3D4" }}>{question.choices[4]}</span>
              }
            /> */}
          </RadioGroup>
        </FormControl>
      </div>
    </Grid>
  );
  const renderComponent = result ? successResult() : errResult();
  return renderComponent;
}
