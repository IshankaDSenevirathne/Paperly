import React, { useState, useEffect } from "react";
import { ResponsiveLine } from "@nivo/line";
import { Container } from "@material-ui/core";
import "./graph.css";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = [
  {
    id: "Physics marks",
    color: "hsl(205°, 100%, 56%)",
    data: [
      {
        x: "plane",
        y: 121,
      },
      {
        x: "helicopter",
        y: 153,
      },
      {
        x: "boat",
        y: 183,
      },
      {
        x: "train",
        y: 19,
      },
      {
        x: "subway",
        y: 104,
      },
      {
        x: "bus",
        y: 134,
      },
      {
        x: "car",
        y: 247,
      },
      {
        x: "moto",
        y: 15,
      },
      {
        x: "bicycle",
        y: 181,
      },
      {
        x: "horse",
        y: 41,
      },
      {
        x: "skateboard",
        y: 153,
      },
      {
        x: "others",
        y: 243,
      },
    ],
  },
];

export const MarksPercentile = (props) => (
  <Container className="graphwrapper">
    {console.log(props)}
    <ResponsiveLine
      data={props.data}
      markers={[
        {
          axis: "x",
          value: props.mark,
          lineStyle: { stroke: "#b0413e", strokeWidth: 2 },
          legend: "You are here",
          textStyle: {
            fill: "red",
            fontSize: "0.8rem",
          },
        },
      ]}
      curve="basis"
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "transportation",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      colors={{ scheme: "category10" }}
      // theme={{
      //   axis: {
      //     ticks: {
      //       line: {
      //         stroke: "white",
      //       },
      //       text: {
      //         fill: "white",
      //       },
      //     },
      //   },
      //   grid: {
      //     line: {
      //       stroke: "white",
      //       // strokeWidth: 2,
      //       // strokeDasharray: "4 4",
      //     },
      //   },
      // }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabel="y"
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "top-left",
          direction: "column",
          justify: false,
          // translateX: 100,
          translateY: 20,
          translateX: 20,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 140,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  </Container>
);

// export default MarksPercentile;

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
