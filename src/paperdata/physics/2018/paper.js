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

const img15q = require("./q15/q15.PNG");

const img16q = require("./q16/q16.PNG");

const img17q = require("./q17/q17.PNG");

const img21q = require("./q21/q21.PNG");

const img22a1 = require("./q22/1.PNG");
const img22a2 = require("./q22/2.PNG");
const img22a3 = require("./q22/3.PNG");
const img22a4 = require("./q22/4.PNG");
const img22a5 = require("./q22/5.PNG");

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
            text: `<img src='${API}/mathjax/getmathimage?env=${
              process.env.NODE_ENV
            }&equation=${encodeURIComponent("AX")}'/>`,
          },
          {
            id: 2,
            text: `<img src='${API}/mathjax/getmathimage?env=${
              process.env.NODE_ENV
            }&equation=${encodeURIComponent("AX - CZ")}'/>`,
          },
          {
            id: 3,
            text: `<img src='${API}/mathjax/getmathimage?env=${
              process.env.NODE_ENV
            }&equation=${encodeURIComponent("\\frac{(AX) (CZ)}{BY}")}'/>`,
          },
          {
            id: 4,
            text: `<img src='${API}/mathjax/getmathimage?env=${
              process.env.NODE_ENV
            }&equation=${encodeURIComponent("\\frac{(BY)^2}{P}")}'/>`,
          },
          {
            id: 5,

            text: `<img src='${API}/mathjax/getmathimage?env=${
              process.env.NODE_ENV
            }&equation=${encodeURIComponent("(BY)(CZ)")}'/>`,
          },
        ],
        correctAnswer: 3,
      },
      {
        title: `## 3.	Which of the following statements is **not** true?`,
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
            text: `<img src='${API}/mathjax/getmathimage?env=${
              process.env.NODE_ENV
            }&equation=${encodeURIComponent("R_A = \\sqrt{2}R_B")}'/>`,
          },
          {
            id: 2,
            text: `<img src='${API}/mathjax/getmathimage?env=${
              process.env.NODE_ENV
            }&equation=${encodeURIComponent("R_A = 2R_B")}'/>`,
          },
          {
            id: 3,
            text: `<img src='${API}/mathjax/getmathimage?env=${
              process.env.NODE_ENV
            }&equation=${encodeURIComponent(
              "R_A = \\frac{R_B}{\\sqrt{2}}"
            )}'/>`,
          },
          {
            id: 4,
            text: `<img src='${API}/mathjax/getmathimage?env=${
              process.env.NODE_ENV
            }&equation=${encodeURIComponent("R_A = \\frac{R_B}{2}")}'/>`,
          },
          {
            id: 5,
            text: `<img src='${API}/mathjax/getmathimage?env=${
              process.env.NODE_ENV
            }&equation=${encodeURIComponent("R_A = R_B")}'/>`,
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
        title: `## 14.	A small object of mass m placed on the horizontal surface of a frozen pond is given a kick imparting an initial speed <img style='width:2%;margin-bottom: -6px;' src='${API}/mathjax/getmathimage?env=${
          process.env.NODE_ENV
        }&equation=${encodeURIComponent(
          "\\nu_0 "
        )}'/> along the horizontal direction. The object moves on the surface in a horizontal straight line without rotation. The coefficient of kinetic friction between the object and the surface is <img style='width:2%;margin-bottom: -6px;' src='${API}/mathjax/getmathimage?env=${
          process.env.NODE_ENV
        }&equation=${encodeURIComponent(
          "\\mu_0 "
        )}'/>. if the air resistance can be neglected, the distance that file object moves before coming to rest is`,
        choices: [
          {
            id: 1,
            text: `<img src='${API}/mathjax/getmathimage?env=${
              process.env.NODE_ENV
            }&equation=${encodeURIComponent("\\frac{\\nu_0^2}{2\\mu g}")}'/>`,
          },
          {
            id: 2,
            text: `<img src='${API}/mathjax/getmathimage?env=${
              process.env.NODE_ENV
            }&equation=${encodeURIComponent("\\frac{\\nu_0^2}{mu g}")}'/>`,
          },
          {
            id: 3,
            text: `<img src='${API}/mathjax/getmathimage?env=${
              process.env.NODE_ENV
            }&equation=${encodeURIComponent("\\frac{2\\nu_0^2}{mu g}")}'/>`,
          },
          {
            id: 4,
            text: `<img src='${API}/mathjax/getmathimage?env=${
              process.env.NODE_ENV
            }&equation=${encodeURIComponent("\\frac{\\nu_0^2}{2g}")}'/>`,
          },
          {
            id: 5,
            text: `<img src='${API}/mathjax/getmathimage?env=${
              process.env.NODE_ENV
            }&equation=${encodeURIComponent("\\frac{2\\nu_0^2}{g}")}'/>`,
          },
        ],
        correctAnswer: 1,
      },
      {
        title: `## 15. A coplanar structure is made by connecting eleven identical spheres each of mass m using ten identical light rods as shown in the figure. The centre of gravity of the structure is most likely to be at the point \n <img style='width:40%;' src='${img15q}' />`,
        choices: [
          {
            id: 1,
            text: `O`,
          },
          {
            id: 2,
            text: `A`,
          },
          {
            id: 3,
            text: `B`,
          },
          {
            id: 4,
            text: `C`,
          },
          {
            id: 5,
            text: `D`,
          },
        ],
        correctAnswer: 1,
      },
      {
        title: `## 16. A block of mass 2 kg is pushed along a horizontal surface. The variation of the displacement x, of the block with time t, is shown in the figure. The values of the resultant force F acting on the block along the direction of motion during each of the time intervals 0 < t < 2 , 2 < t < 4 and 4 < t < 5 do not change. Which of the following correctly represents the magnitude of F in each of the time intervals? \n <img style='width:40%;margin-bottom: 25px;' src='${img16q}' /> `,
        choices: [
          {
            id: 1,
            text: `
| F(N) 0 < t < 2 &nbsp; | &nbsp; F(N)    2 < t < 4     &nbsp;   | &nbsp; F(N)  4 < t < 5   &nbsp;  |
|:-------------:|:-------------:|:-----:|
| 0      | 0 | 0 |
`,
          },
          {
            id: 2,
            text: `
| F(N) 0 < t < 2 &nbsp; | &nbsp; F(N)    2 < t < 4     &nbsp;   | &nbsp; F(N)  4 < t < 5   &nbsp;  |
|:-------------:|:-------------:|:-----:|
| 0      | 1.5 | 0 |
            `,
          },
          {
            id: 3,
            text: `
| F(N) 0 < t < 2 &nbsp; | &nbsp; F(N)    2 < t < 4     &nbsp;   | &nbsp; F(N)  4 < t < 5   &nbsp;  |
|:-------------:|:-------------:|:-----:|
| 0      | 2 | 0 |
            `,
          },
          {
            id: 4,
            text: `
| F(N) 0 < t < 2 &nbsp; | &nbsp; F(N)    2 < t < 4     &nbsp;   | &nbsp; F(N)  4 < t < 5   &nbsp;  |
|:-------------:|:-------------:|:-----:|
| 1      | 0 | 0 |
            `,
          },
          {
            id: 5,
            text: `
| F(N) 0 < t < 2 &nbsp; | &nbsp; F(N)    2 < t < 4     &nbsp;   | &nbsp; F(N)  4 < t < 5   &nbsp;  |
|:-------------:|:-------------:|:-----:|
| 2      | 1.5 | 1 |
            `,
          },
        ],
        correctAnswer: 1,
      },
      {
        title: `## 17. Figure shows a displacement (x) - time (t) curve for an object executing simple harmonic motion. For this motion, magnitudes of the period T, the frequency f, the angular speed <img style='width:2%;margin-bottom: -6px;' src='${API}/mathjax/getmathimage?env=${
          process.env.NODE_ENV
        }&equation=${encodeURIComponent(
          "\\omega "
        )}'/>, the maximum speed and	<img style='width:5%;margin-bottom: -7px;' src='${API}/mathjax/getmathimage?env=${
          process.env.NODE_ENV
        }&equation=${encodeURIComponent(
          "\\nu_{max} "
        )}'/>  maximum acceleration are given by <img style='width:5%;margin-bottom: -7px;' src='${API}/mathjax/getmathimage?env=${
          process.env.NODE_ENV
        }&equation=${encodeURIComponent(
          "a_{max} "
        )}'/> \n  <img style='width:50%;' src="${img17q}"></img> `,
        choices: [
          {
            id: 1,
            text: `
| T (s) &nbsp; | &nbsp; f(Hz)     &nbsp;   | &nbsp; <img style='width:2%;margin-bottom: -6px;' src='${API}/mathjax/getmathimage?env=${
              process.env.NODE_ENV
            }&equation=${encodeURIComponent(
              "\\omega "
            )}'/> (s<sup>-1</sup>)   &nbsp;  |
|:-------------:|:-------------:|:-----:|
| 0      | 0 | 0 |
`,
          },
          {
            id: 2,
            text: `
| F(N) 0 < t < 2 &nbsp; | &nbsp; F(N)    2 < t < 4     &nbsp;   | &nbsp; F(N)  4 < t < 5   &nbsp;  |
|:-------------:|:-------------:|:-----:|
| 0      | 1.5 | 0 |
            `,
          },
          {
            id: 3,
            text: `
| F(N) 0 < t < 2 &nbsp; | &nbsp; F(N)    2 < t < 4     &nbsp;   | &nbsp; F(N)  4 < t < 5   &nbsp;  |
|:-------------:|:-------------:|:-----:|
| 0      | 2 | 0 |
            `,
          },
          {
            id: 4,
            text: `
| F(N) 0 < t < 2 &nbsp; | &nbsp; F(N)    2 < t < 4     &nbsp;   | &nbsp; F(N)  4 < t < 5   &nbsp;  |
|:-------------:|:-------------:|:-----:|
| 1      | 0 | 0 |
            `,
          },
          {
            id: 5,
            text: `
| F(N) 0 < t < 2 &nbsp; | &nbsp; F(N)    2 < t < 4     &nbsp;   | &nbsp; F(N)  4 < t < 5   &nbsp;  |
|:-------------:|:-------------:|:-----:|
| 2      | 1.5 | 1 |
            `,
          },
        ],
        correctAnswer: 1,
      },
      {
        title: `## 18. An elephant at rest is observed by a person 1 km away from his location. The sound intensity if trumpet of the elephant heard by the person is 10<sup>-10</sup> Wm<sup>-2</sup> . Assume that the sound comes from a point source.If the threshold of hearing of the person is 10<sup>-12</sup> Wm<sup>-2</sup> , what is the maximum distance from which he can hear this trumpet`,
        choices: [
          {
            id: 1,
            text: `1 km`,
          },
          {
            id: 2,
            text: `2 km`,
          },
          {
            id: 3,
            text: `4.5 km`,
          },
          {
            id: 4,
            text: `10 km`,
          },
          {
            id: 5,
            text: `20 km`,
          },
        ],
        correctAnswer: 1,
      },
      {
        title: `## 19. Two mercury-in-glass thermometers *P* and *Q* are to be constructed this *P* having a lager bulb of mercvury that that of *Q* , and both calibrated in the range 0°C - 100°C . Assume that walls of both bulbs have same thickness. Consider the folowing statements. \n ## Using capillary tubes with appropriate unifor, bore radii, the two thermometers can be constructed to have \n ### (A) the same capillary length between 0°C - 100°C  markings. \n ### (B) the smae response time for rapid changes in the measuring temparature. \n ### (C) a higher sensitivity in thermometer *P* that the sensitivity of *Q* thermometer. \n ## Of the above statements ,  `,
        choices: [
          {
            id: 1,
            text: ` only A is true.`,
          },
          {
            id: 2,
            text: ` only B is true.`,
          },
          {
            id: 3,
            text: `only B and C are true.`,
          },
          {
            id: 4,
            text: `only A and C are true.`,
          },
          {
            id: 5,
            text: `all A, B and C are true.`,
          },
        ],
        correctAnswer: 1,
      },
      {
        title: `## 20 . Water at 0 °C is continuously fed into a fully insulated boiler fixed with an immersion heater at a constant rate of 1 x 10<sup>-2</sup> kg s<sup>-1</sup> . The specific heat capacity and the specific latent heat of vaporization of water are 4.2 x 10<sup>3</sup> Jkg<sup>-1</sup> °C<sup>-1</sup> and 2.25 x 10<sup>6</sup> Jkg<sup>-1</sup> respectively. If the steam at 100 °C is to be produced at the same rate as that of supply of water, the power cf the immersion heater should be`,
        choices: [
          {
            id: 1,
            text: ` 4.2 kW.`,
          },
          {
            id: 2,
            text: ` 22,5 kW.`,
          },
          {
            id: 3,
            text: `  26.7 kW.`,
          },
          {
            id: 4,
            text: ` 42.0 kW.`,
          },
          {
            id: 5,
            text: ` 267.0 kW.`,
          },
        ],
        correctAnswer: 1,
      },
      {
        title: `## 21 . In the circuit shown, value of each capacitor is 1<img style='width:1.3%;margin-bottom: -6px;' src='${API}/mathjax/getmathimage?env=${
          process.env.NODE_ENV
        }&equation=${encodeURIComponent(
          "\\mu "
        )}'/>F . When the capacitors are fully charged, the total charge stored in capacitors is \n <img style='width:40%;' src='${img21q}' />`,
        choices: [
          {
            id: 1,
            text: `2<img style='width:1.3%;margin-bottom: -6px;' src='${API}/mathjax/getmathimage?env=${
              process.env.NODE_ENV
            }&equation=${encodeURIComponent("\\mu ")}'/>C`,
          },
          {
            id: 2,
            text: `4<img style='width:1.3%;margin-bottom: -6px;' src='${API}/mathjax/getmathimage?env=${
              process.env.NODE_ENV
            }&equation=${encodeURIComponent("\\mu ")}'/>C`,
          },
          {
            id: 3,
            text: `5<img style='width:1.3%;margin-bottom: -6px;' src='${API}/mathjax/getmathimage?env=${
              process.env.NODE_ENV
            }&equation=${encodeURIComponent("\\mu ")}'/>C`,
          },
          {
            id: 4,
            text: `8<img style='width:1.3%;margin-bottom: -6px;' src='${API}/mathjax/getmathimage?env=${
              process.env.NODE_ENV
            }&equation=${encodeURIComponent("\\mu ")}'/>C`,
          },
          {
            id: 5,
            text: `10<img style='width:1.3%;margin-bottom: -6px;' src='${API}/mathjax/getmathimage?env=${
              process.env.NODE_ENV
            }&equation=${encodeURIComponent("\\mu ")}'/>C`,
          },
        ],
        correctAnswer: 1,
      },
      {
        title: `## 22. Figures show five clusters of soap bubbles in air, as drawn by a student. If centres of the bubbles in each cluster are coplanar, which of the following shows the cluster with physically possible`,
        choices: [
          {
            id: 1,
            text: `<img style='width:106%;' src='${img22a1}' />`,
          },
          {
            id: 2,
            text: `<img style='width:100%;' src='${img22a2}' />`,
          },
          {
            id: 3,
            text: `<img style='width:118%;' src='${img22a3}' />`,
          },
          {
            id: 4,
            text: `<img style='width:122%;' src='${img22a4}' />`,
          },
          {
            id: 5,
            text: `<img style='width:100%;' src='${img22a5}' />`,
          },
        ],
        correctAnswer: 1,
      },{
        title: `## 22. Figures show five clusters of soap bubbles in air, as drawn by a student. If centres of the bubbles in each cluster are coplanar, which of the following shows the cluster with physically possible`,
        choices: [
          {
            id: 1,
            text: `<img style='width:106%;' src='${img22a1}' />`,
          },
          {
            id: 2,
            text: `<img style='width:100%;' src='${img22a2}' />`,
          },
          {
            id: 3,
            text: `<img style='width:118%;' src='${img22a3}' />`,
          },
          {
            id: 4,
            text: `<img style='width:122%;' src='${img22a4}' />`,
          },
          {
            id: 5,
            text: `<img style='width:100%;' src='${img22a5}' />`,
          },
        ],
        correctAnswer: 1,
      },
    ],
  },
};

export default data;
