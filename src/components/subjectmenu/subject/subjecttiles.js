import React from "react";

import Grid from "@material-ui/core/Grid";

import CardTile from "./CardTile";
import Physics from "../../../img/physics.png";
import Biology from "../../../img/biology.png";
import Chemistry from "../../../img/chemistry.png";
import iT from "../../../img/IT.png";
import Mathematics from "../../../img/maths.png";
import Marketing from "../../../img/marketing.png";

const subjects = {
  subject1: {
    image: `${Physics}`,
    title: "Physics",
    imageTitle: "Physics",
    description: `
      Lizards are a widespread group of squamate reptiles, with over
      6,000 species, ranging across all continents except Antarctica`,
    delay: "0",
    link: "physics",
  },
  subject2: {
    image: `${Chemistry}`,
    title: "Chemistry",
    imageTitle: "Chemistry",
    description: `
        Lizards are a widespread group of squamate reptiles, with over
        6,000 species, ranging across all continents except Antarctica`,
    delay: "200",
    link: "chemistry",
  },
  subject3: {
    image: `${Biology}`,
    title: "Biology",
    imageTitle: "Biology",
    description: `
        Lizards are a widespread group of squamate reptiles, with over
        6,000 species, ranging across all continents except Antarctica`,
    delay: "400",
    link: "biology",
  },
  subject4: {
    image: `${Mathematics}`,
    title: "Mathematics",
    imageTitle: "Mathematics",
    description: `
        Lizards are a widespread group of squamate reptiles, with over
        6,000 species, ranging across all continents except Antarctica`,
    delay: "600",
    link: "mathematics",
  },
  subject5: {
    image: `${iT}`,
    title: "IT",
    imageTitle: "Information Technology",
    description: `
        Lizards are a widespread group of squamate reptiles, with over
        6,000 species, ranging across all continents except Antarctica`,
    delay: "800",
    link: "it",
  },
  subject6: {
    image: `${Marketing}`,
    title: "Marketing",
    imageTitle: "Marketing",
    description: `
        Lizards are a widespread group of squamate reptiles, with over
        6,000 species, ranging across all continents except Antarctica`,
    delay: "1000",
    link: "Marketing",
  },
};
export default function Categories() {
  return (
    <div
      style={{
        textAlign: "center",
        marginBottom: "100px",
        marginLeft: "50px",
        marginRight: "50px",
        color: "#383838",
      }}
      id="pastpapers"
    >
      <div>
        <h1
          style={{
            paddingBottom: "20px",
            color: "#ffffff",
          }}
        >
          SUBJECTS
        </h1>
      </div>
      <Grid container justify="center" alignContent="center">
        <CardTile
          image={subjects.subject1.image}
          title={subjects.subject1.title}
          link={subjects.subject1.link}
          delay={subjects.subject1.delay}
        />
        <CardTile
          image={subjects.subject2.image}
          title={subjects.subject2.title}
          link={subjects.subject2.link}
          delay={subjects.subject2.delay}
        />
        <CardTile
          image={subjects.subject3.image}
          title={subjects.subject3.title}
          link={subjects.subject3.link}
          delay={subjects.subject3.delay}
        />
      </Grid>
      <Grid container justify="center" alignContent="center">
        <CardTile
          image={subjects.subject4.image}
          title={subjects.subject4.title}
          link={subjects.subject4.link}
          delay={subjects.subject4.delay}
        />
        <CardTile
          image={subjects.subject5.image}
          title={subjects.subject5.title}
          link={subjects.subject5.link}
          delay={subjects.subject5.delay}
        />
        <CardTile
          image={subjects.subject6.image}
          title={subjects.subject6.title}
          link={subjects.subject6.link}
          delay={subjects.subject6.delay}
        />
      </Grid>
    </div>
  );
}
