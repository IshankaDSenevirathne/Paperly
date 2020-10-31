const API =
  process.env.NODE_ENV === "production"
    ? `https://paperly-114b9e.us1.kinto.io`
    : "http://localhost:5000";

// const API = `https://paperly-114b9e.us1.kinto.io`;

const img10q = require("./q10/10q.PNG");
const img10a1 = require("./q10/1.PNG");
const img10a2 = require("./q10/2.PNG");
const img10a3 = require("./q10/3.PNG");
const img10a4 = require("./q10/4.PNG");
const img10a5 = require("./q10/5.PNG");

const img12q = require("./q12/q12.PNG");
const img12a1 = require("./q12/1.PNG");
const img12a2 = require("./q12/2.PNG");
const img12a3 = require("./q12/3.PNG");
const img12a4 = require("./q12/4.PNG");
const img12a5 = require("./q12/5.PNG");

const img13q = require("./q13/q13.PNG");

let data = {
  paperId: "1",
  content: {
    title: "Advanced Level 2018 Physics",
    pages: [
      {
        title: `## 1. Unit of pressure is `,
        choices: [
          {
            id: 1,
            text: `kg ms<sup>-2</sup>`,
          },
          {
            id: 2,
            text: `kg m<sup>2</sup> s<sup>-2</sup>`,
          },
          {
            id: 3,
            text: `kg m<sup>-1</sup> s<sup>-2</sup>`,
          },
          {
            id: 4,
            text: "kg m<sup>2</sup> s</sup>-3</sup>",
          },
          {
            id: 5,
            text: "kg m<sup>-2</sup> s<sup>-2</sup> A<sup>-1</sup>",
          },
        ],
        correctAnswer: 3,
      },
      {
        title: `## 2.	X, Y and Z represent three physical quantities with different dimensions. They can be combined to form another physical quantity P of the form, \n ## P = AX + BY + CZ \n ## Which of the following expressions has different dimensions from the rest?
         `,
        choices: [
          {
            id: 1,
            text: `<img src='${API}/mathjax/getmathimage?equation=${encodeURIComponent(
              "AX"
            )}'/>`,
          },
          {
            id: 2,
            text: `<img src='${API}/mathjax/getmathimage?equation=${encodeURIComponent(
              "AX - CZ"
            )}'/>`,
          },
          {
            id: 3,
            text: `<img src='${API}/mathjax/getmathimage?equation=${encodeURIComponent(
              "\\frac{(AX) (CZ)}{BY}"
            )}'/>`,
          },
          {
            id: 4,
            text: `<img src='${API}/mathjax/getmathimage?equation=${encodeURIComponent(
              "\\frac{(BY)^2}{P}"
            )}'/>`,
          },
          {
            id: 5,

            text: `<img src='${API}/mathjax/getmathimage?equation=${encodeURIComponent(
              "(BY)(CZ)"
            )}'/>`,
          },
        ],
        correctAnswer: 3,
      },
      {
        title: `## 3.	Which of the following statements is *not* true?`,
        choices: [
          {
            id: 1,
            text: `LASER light consists of transverse waves.`,
          },
          {
            id: 2,
            text: `Gamma rays are transverse waves.`,
          },
          {
            id: 3,
            text: `Primary waves (P-waves) travelling through the crust of the Earth are longitudinal waves.`,
          },
          {
            id: 4,
            text: "Ultrasound waves are longitudinal waves.",
          },
          {
            id: 5,

            text: "FM waves are longitudinal waves.",
          },
        ],
        correctAnswer: 3,
      },
      {
        title: `## 4.	Consider the following statements made regarding the speed of sound v in an ideal gas. \n ##  (A)	v is directly proportional to the absolute temperature of the gas.
     \n ##   (B)	v is inversely proportional to the molar mass of the gas.
     \n ##    (C)	v depends on the ratio of the molar heat capacities y for the gas.
     \n ##    Of the above statements,
        `,
        choices: [
          {
            id: 1,
            text: `only A is true.`,
          },
          {
            id: 2,
            text: `only C is true.`,
          },
          {
            id: 3,
            text: `only A and B are true.`,
          },
          {
            id: 4,
            text: "only B and C are true.",
          },
          {
            id: 5,

            text: "all A, B and C are true.",
          },
        ],
        correctAnswer: 3,
      },
      {
        title: `## 5.	Which of the following statements made regarding optical instruments under normal adjustment is not true?`,
        choices: [
          {
            id: 1,
            text: `In a simple microscope, the image of the object is virtual.`,
          },
          {
            id: 2,
            text: `When reading small letters using a simple microscope, a short-sighted person has an advantage over a long-sighted person.`,
          },
          {
            id: 3,
            text: `In a compound microscope, the eyepiece acts as a simple microscope.`,
          },
          {
            id: 4,
            text: `In a compound microscope, the final image is inverted.`,
          },
          {
            id: 5,
            text: `In an astronomical telescope, the object distance and the image distance are both considered to be very large.`,
          },
        ],
        correctAnswer: 3,
      },
      {
        title:
          "## 6. In a certain thermodynamic process in which an ideal gas is used, the increase of the internal energy of the gas is equal to the heat supplied to the gas. This process is ",
        choices: [
          {
            id: 1,
            text: "a cyclic process.",
          },
          {
            id: 2,
            text: "an adiabatic process.",
          },
          {
            id: 3,
            text: "a constant pressure process.",
          },
          {
            id: 4,
            text: "a constant volume process.",
          },
          {
            id: 5,
            text: "an isothermal process.",
          },
        ],
        correctAnswer: 1,
      },

      {
        title: `## 7. When the temperature of a metal rod is increased by 100 °C, its fractional change in length is 2.4 x 10 <sup>-5</sup> . The linear expansivity of the material of the rod is,`,
        choices: [
          {
            id: 1,
            text: `2.4 x 10 <sup>-3</sup> °C <sup>-1</sup>`,
          },
          {
            id: 2,
            text: `2.4 x 10 <sup>-4</sup> °C <sup>-1</sup>`,
          },
          {
            id: 3,
            text: `2.4 x 10 <sup>-5</sup> °C <sup>-1</sup>`,
          },
          {
            id: 4,
            text: "2.4 x 10 <sup>-6</sup> °C <sup>-1</sup>",
          },
          {
            id: 5,

            text: "2.4 x 10 <sup>-7</sup> °C <sup>-1</sup>",
          },
        ],
        correctAnswer: 3,
      },
      {
        title:
          "## 8. A certain transformer has 900 turns in the primary coil and 30 turns in the secondary coil. When 240 V alternating voltage is applied across the primary coil, the voltage across the secondary coil is",
        choices: [
          {
            id: 1,
            text: "0 V",
          },
          {
            id: 2,
            text: "8 V",
          },
          {
            id: 3,
            text: "12 V",
          },
          {
            id: 4,
            text: "72 V",
          },
          {
            id: 5,
            text: "7.2 KV",
          },
        ],
        correctAnswer: 1,
      },
      {
        title: `## 9. which of the following is not a source of e.mf.?`,
        choices: [
          {
            id: 1,
            text: "Electrochemical cell",
          },
          {
            id: 2,
            text: "Photodiode",
          },
          {
            id: 3,
            text: "Piezoelectric crystal",
          },
          {
            id: 4,
            text: "Thermocouple",
          },
          {
            id: 5,
            text: "Charged capacitor",
          },
        ],
        correctAnswer: 1,
      },
      {
        title: `## 10. The logic circuit shown in figure (a) is equivalent to \n <img style='width:60%;' src="${img10q}"></img> `,
        choices: [
          {
            id: 1,
            text: `<img style='width:100%;' src='${img10a1}'></img>`,
          },
          {
            id: 2,
            text: `<img style='width:100%;' src="${img10a2}"></img>`,
          },
          {
            id: 3,
            text: `<img style='width:100%;' src="${img10a3}"></img>`,
          },
          {
            id: 4,
            text: `<img style='width:100%;' src="${img10a4}"></img>`,
          },
          {
            id: 5,
            text: `<img style='width:100%;' src="${img10a5}"></img>`,
          },
        ],
        correctAnswer: 1,
      },

      {
        title:
          "## 11. The accelerations due to gravity on the surfaces of a uniform spherical planet A of radius R<sub>A</sub> and a uniform spherical planet B of radius R<sub>B</sub> are equal. If the mass of A is twice the mass of B, ",
        choices: [
          {
            id: 1,
            text: `<img src='${API}/mathjax/getmathimage?equation=${encodeURIComponent(
              "R_A = \\sqrt{2}R_B"
            )}'/>`,
          },
          {
            id: 2,
            text: `<img src='${API}/mathjax/getmathimage?equation=${encodeURIComponent(
              "R_A = 2R_B"
            )}'/>`,
          },
          {
            id: 3,
            text: `<img src='${API}/mathjax/getmathimage?equation=${encodeURIComponent(
              "R_A = \\frac{R_B}{\\sqrt{2}}"
            )}'/>`,
          },
          {
            id: 4,
            text: `<img src='${API}/mathjax/getmathimage?equation=${encodeURIComponent(
              "R_A = \\frac{R_B}{2}"
            )}'/>`,
          },
          {
            id: 5,
            text: `<img src='${API}/mathjax/getmathimage?equation=${encodeURIComponent(
              "R_A = R_B"
            )}'/>`,
          },
        ],
        correctAnswer: 1,
      },
      {
        title: `## 12. A, B, C, D and E are five coplanar forces of equal magnitudes acting on a y body as shown in figure (a). Which of the following diagrams best represents the direction of the resultant of these forces \n <img style='width:26%;' src='${img12q}' /> \n`,
        choices: [
          {
            id: 1,
            text: `<img style='width:100%;' src='${img12a1}' />`,
          },
          {
            id: 2,
            text: `<img style='width:100%;' src="${img12a2}"></img>`,
          },
          {
            id: 3,
            text: `<img style='width:100%;' src="${img12a3}"></img>`,
          },
          {
            id: 4,
            text: `<img style='width:100%;' src="${img12a4}"></img>`,
          },
          {
            id: 5,
            text: `<img style='width:100%;' src="${img12a5}"></img>`,
          },
        ],
        correctAnswer: 1,
      },
      {
        title: `## 13. An ant of mass 2 x 10<sup>-6</sup> kg (2 milligrams), which is stationary at the edge of a horizontal smooth strip is removed in 0.2s by blowing with mouth. The direction of blowing is horizontal as shown by the arrows in the figure. If the ant is thrown out in the direction of the blowing with a horizontal velocity of 0.5 ms<sup>-1</sup>, the average force exerted on the ant by the blow is \n <img style='width:25%;' src="${img13q}"></img>`,
        choices: [
          {
            id: 1,
            text: `5 x 10 <sup>-6</sup> N `,
          },
          {
            id: 2,
            text: `1 x 10 <sup>-6</sup> N `,
          },
          {
            id: 3,
            text: `2 x 10 <sup>-6</sup> N `,
          },
          {
            id: 4,
            text: `1 x 10 <sup>-3</sup> N `,
          },
          {
            id: 5,
            text: `5 x 10 <sup>-3</sup> N `,
          },
        ],
        correctAnswer: 1,
      },
      {
        title: `## 14.	A small object of mass m placed on the horizontal surface of a frozen pond is given a kick imparting an initial speed \n <img style='width:100%;' src="<img src='${API}/mathjax/getmathimage?equation=${encodeURIComponent(
          "\\nu_0 "
        )}'/>"></img> along the horizontal direction. The object moves on the surface in a horizontal straight line without rotation. The coefficient of kinetic friction between the object and the surface is ju. if the air resistance can be neglected, the distance that file object moves before coming to rest is`,
        choices: [
          {
            id: 1,
            text: `<img src='${API}/mathjax/getmathimage?equation=${encodeURIComponent(
              "R_A = \\sqrt{2}R_B"
            )}'/>`,
          },
          {
            id: 2,
            text: `<img src='${API}/mathjax/getmathimage?equation=${encodeURIComponent(
              "R_A = 2R_B"
            )}'/>`,
          },
          {
            id: 3,
            text: `<img src='${API}/mathjax/getmathimage?equation=${encodeURIComponent(
              "R_A = \\frac{R_B}{\\sqrt{2}}"
            )}'/>`,
          },
          {
            id: 4,
            text: `<img src='${API}/mathjax/getmathimage?equation=${encodeURIComponent(
              "R_A = \\frac{R_B}{2}"
            )}'/>`,
          },
          {
            id: 5,
            text: `<img src='${API}/mathjax/getmathimage?equation=${encodeURIComponent(
              "R_A = R_B"
            )}'/>`,
          },
        ],
        correctAnswer: 1,
      },
      {
        title:
          "## 11. The accelerations due to gravity on the surfaces of a uniform spherical planet A of radius R<sub>A</sub> and a uniform spherical planet B of radius R<sub>B</sub> are equal. If the mass of A is twice the mass of B, ",
        choices: [
          {
            id: 1,
            text: `<img src='${API}/mathjax/getmathimage?equation=${encodeURIComponent(
              "R_A = \\sqrt{2}R_B"
            )}'/>`,
          },
          {
            id: 2,
            text: `<img src='${API}/mathjax/getmathimage?equation=${encodeURIComponent(
              "R_A = 2R_B"
            )}'/>`,
          },
          {
            id: 3,
            text: `<img src='${API}/mathjax/getmathimage?equation=${encodeURIComponent(
              "R_A = \\frac{R_B}{\\sqrt{2}}"
            )}'/>`,
          },
          {
            id: 4,
            text: `<img src='${API}/mathjax/getmathimage?equation=${encodeURIComponent(
              "R_A = \\frac{R_B}{2}"
            )}'/>`,
          },
          {
            id: 5,
            text: `<img src='${API}/mathjax/getmathimage?equation=${encodeURIComponent(
              "R_A = R_B"
            )}'/>`,
          },
        ],
        correctAnswer: 1,
      },
      {
        title:
          "## 11. The accelerations due to gravity on the surfaces of a uniform spherical planet A of radius R<sub>A</sub> and a uniform spherical planet B of radius R<sub>B</sub> are equal. If the mass of A is twice the mass of B, ",
        choices: [
          {
            id: 1,
            text: `<img src='${API}/mathjax/getmathimage?equation=${encodeURIComponent(
              "R_A = \\sqrt{2}R_B"
            )}'/>`,
          },
          {
            id: 2,
            text: `<img src='${API}/mathjax/getmathimage?equation=${encodeURIComponent(
              "R_A = 2R_B"
            )}'/>`,
          },
          {
            id: 3,
            text: `<img src='${API}/mathjax/getmathimage?equation=${encodeURIComponent(
              "R_A = \\frac{R_B}{\\sqrt{2}}"
            )}'/>`,
          },
          {
            id: 4,
            text: `<img src='${API}/mathjax/getmathimage?equation=${encodeURIComponent(
              "R_A = \\frac{R_B}{2}"
            )}'/>`,
          },
          {
            id: 5,
            text: `<img src='${API}/mathjax/getmathimage?equation=${encodeURIComponent(
              "R_A = R_B"
            )}'/>`,
          },
        ],
        correctAnswer: 1,
      },
    ],
  },
};

export default data;
