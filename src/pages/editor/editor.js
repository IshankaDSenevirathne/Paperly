import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { lightBlue } from "@material-ui/core/colors";
import "./editor.css";
import marked from "marked";
import Cardcontainer from "./dndcomponent/cardcontainer";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

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
  const [cardData, setcardData] = useState([]);

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

  const getDataFromDnD = (data) => {
    console.log(data);

    let str = data
      .map((ele) => {
        return ele.text;
      })
      .join(" ");

    console.log(str);
    setcompiledMarkdown(marked(str));

    setcardData([...data]);
  };

  return (
    <>
      <div className="container editor">
        <Container maxWidth="lg" className="editor">
          {" "}
          <h1>editor</h1>{" "}
          <DndProvider backend={HTML5Backend}>
            <Cardcontainer getDataFromDnD={getDataFromDnD} />
          </DndProvider>
        </Container>
        {/* {cardData} */}
        {/* {cardData.map((ele) => {
          return <span>{ele.text}</span>;
        })} */}
        {/* <p>{cardData && JSON.stringify(cardData)} </p> */}
        <div className={classes.feedbacknamedivider}></div>
        <Container>
          <div className={classes.feedbacknamedivider}></div>
          <div style={{ color: "white" }}>
            <div
              dangerouslySetInnerHTML={{
                __html: compiledMarkdown,
              }}
            />
          </div>
        </Container>
        <Container maxWidth="lg" className="editor">
          <TextField
            required
            placeholder="Enter equation ex : \\frac{(AX) (CZ)}{BY}"
            variant="filled"
            fullWidth={true}
            inputProps={{ className: classes.feedback }}
            onChange={(e) => compileEquation(e.target.value)}
            data-cy="name-feild"
          />
        </Container>
      </div>
    </>
  );
};
export default Editor;
