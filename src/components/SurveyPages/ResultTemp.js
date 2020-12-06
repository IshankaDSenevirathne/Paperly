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

import marked from "marked";
import DOMPurify from "dompurify";

marked.setOptions({ gfm: true });

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

  const value = userAnswer;
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
                {/* <h3>
                  {questionNumber}
                  {")"}
                  {question.title}
                  <br></br>
                  {question.img && (
                    <div style={{textAlign:"center"}}>
                      <img
                        style={{ width: question.imgwidth }}
                        src={question.img}
                        alt={question.title}
                      />
                    </div>
                  )}
                </h3> */}
                <div style={{ color: "white" }}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(marked(question.title)),
                    }}
                  />
                </div>
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
                  control={<WhiteRadio />}
                  // label={questions[activeQuestion].choices[4].text}
                  label={
                    <>
                      {/* {ele.img && (
                        <>
                          <img
                            src={ele.img}
                            key={ele.id}
                            className="profile-img"
                            width={ele.imgwidth}
                            height="auto"
                            style={{ marginRight: "5px" }}
                            alt={ele.id}
                          />
                          <br />
                        </>
                      )}
                      <span style={{ color: "#D0D3D4" }}> {ele.text}</span> */}
                      <div style={{ color: "#D0D3D4" }}>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(marked(ele.text)),
                          }}
                        />
                      </div>
                    </>
                  }
                />
              );
            })}
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
                <div style={{ color: "white" }}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(marked(question.title)),
                    }}
                  />
                </div>
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
                  label={
                    <>
                      <div style={{ color: "#D0D3D4" }}>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(marked(ele.text)),
                          }}
                        />
                      </div>
                    </>
                  }
                />
              );
            })}
          </RadioGroup>
        </FormControl>
      </div>
    </Grid>
  );
  const renderComponent = result ? successResult() : errResult();
  return renderComponent;
}
