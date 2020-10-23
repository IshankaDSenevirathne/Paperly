import React, { useState, useEffect } from "react";
import { ResponsiveLine } from "@nivo/line";
import { Container } from "@material-ui/core";
import "./graph.css";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.


export const MarksPercentile = (props) => (
  <Container className="graphwrapper">
    <ResponsiveLine
      data={props.data}
      markers={[
        {
          axis: "x",
          value: props.mark,
          lineStyle: { stroke: "#0BF7D3", strokeWidth: 2 },
          legend: "You are here",
          textStyle: {  
            fill: "white",
            fontSize: "0.5rem",
          },
        },
      ]}
      curve="basis"
      margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
      xScale={{ type: "point"}}
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
        legend: "MARKS",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "ABUNDANCE",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      colors={{ scheme: "category10" }}
      theme={{
        
        axis: {
          ticks: {
            line: {
              stroke: "white",
            },
            text: {
              fill: "white",
            },
          },
          legend:{
            text:{
              fill:"#1fa2ff"
            }
          },
        },
        grid: {
          line: {
            stroke: "gray",
            opacity:0.5
          },
        },
      }}
      pointSize={5}
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
          translateY: 5,
          translateX: 5,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemTextColor: "#1fa2ff",
          itemWidth: 140,
          itemHeight: 20,
          itemOpacity: 1,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "#ffffff",
        },
      ]}
    />
  </Container>
);

