import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { lightBlue } from "@material-ui/core/colors";
import "./editor.css";
import marked from "marked";

const API = `https://paperly-114b9e.us1.kinto.io`;

const useStyles = makeStyles(() => ({
  root: {
    color: "white",
    textAlign: "center",
    width: "100%",
  },
  feedback: {
    color: "white",
  },
  forminner: {
    textAlign: "left",
  },
  feedbacknamedivider: {
    color: "white",
    paddingBottom: "1%",
  },
  submit: {
    color: "whitesmoke",
    "&:hover": {
      backgroundColor: lightBlue[400],
      color: "white",
    },
  },
  equationimage: { padding: "1rem" },
}));

const Editor = () => {
  const [euqtion, seteuqtion] = useState("");
  const [imgArray, setimgArray] = useState([]);
  const [width, setwidth] = useState("");
  const [style, setstyle] = useState(`style=""`);

  const [compiledMarkdown, setcompiledMarkdown] = useState("");
  const classes = useStyles();
  // console.log(mathjax);
  const compileEquation = (text) => {
    let url = `${API}/mathjax/getmathimage?env=${
      process.env.NODE_ENV
    }&equation=${encodeURIComponent(text)}`;
    let componentText = `<img ${style} src='${url}'/>`;
    seteuqtion(componentText);
  };

  const compileMarkdown = (text) => {
    let compliedMd = marked(text);
    setcompiledMarkdown(compliedMd);
    // let regex = RegExp(`style`, "g");
    // let images = text.match(regex);
    // let match;
    // while ((match = regex.exec(text))) {
    //   console.log(match.index + " " + regex.lastIndex);
    //   // console.log(reSrc)

    //   // let temp = {
    //   //   url: fileStr.slice(match.index + 5, reSrc.lastIndex - 1),
    //   //   startIndex: match.index,
    //   //   endIndex: reSrc.lastIndex,
    //   // }
    //   // console.log(temp)
    //   // urlArr.push(temp)
    // }

    // console.log(images);
  };

  return (
    <>
      <div className="container editor">
        <Container maxWidth="lg" className="editor">
          <h1>editor</h1>
          <form
            className={classes.forminner}
            autoComplete="off"
            // onSubmit={(e) => formSubmit(e)}
          >
            {" "}
            <TextField
              required
              placeholder="Enter equation ex : \\frac{(AX) (CZ)}{BY}"
              variant="filled"
              fullWidth={true}
              inputProps={{ className: classes.feedback }}
              onChange={(e) => compileEquation(e.target.value)}
              data-cy="name-feild"
            />
            <div className={classes.feedbacknamedivider}></div>
            <TextField
              required
              placeholder="Tell us what you think... "
              variant="filled"
              fullWidth={true}
              inputProps={{ className: classes.feedback }}
              multiline
              rows={6}
              rowsMax={6}
              id="feedback"
              onChange={(e) => compileMarkdown(e.target.value)}
              data-cy="feedback-feild"
            />
            <input
              type="number"
              onChange={(e) => {
                let newstyle = `style='width:${e.target.value}%'`;
                console.log(style, e.target.value);
                let lol = compiledMarkdown.replace(style, newstyle);
                setstyle(newstyle);
                setcompiledMarkdown(lol);
                console.log(lol);
                console.log(style, e.target.value);

                // setwidth(e.target.value);
              }}
            />
            <Container>
              <div className={classes.feedbacknamedivider}></div>
              <div>
                <span> equation code </span> {euqtion}
              </div>
              <div
                className={classes.equationimage}
                dangerouslySetInnerHTML={{
                  __html: euqtion,
                }}
              />
              <div style={{ color: "white" }}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: compiledMarkdown,
                  }}
                />
              </div>
            </Container>
            {/* <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
              data-cy="submit-feedback"
            >
              Submit
            </Button> */}
          </form>
        </Container>
      </div>
    </>
  );
};
export default Editor;
