// import {data} from '../src/paperdata/physics/2018/paper'
require("ignore-styles").default([".png", ".PNG"]);

let data = require("../src/paperdata/physics/2018/paper");
let should = require("chai").should();

// console.log(data);

describe("paper", function () {
  describe(`${data.content.title} paper.js testing`, function () {

    it("should have paperId", function () {
      data.should.have.property("paperId");
    });

    data.content.pages.forEach((ele) => {

      it("should have title", function () {
        ele.should.have.property("title");
        ele["title"].should.not.be.empty;
      });

      it("should have choices", function () {
        ele.should.have.property("choices");
        ele["choices"].should.not.be.empty;
      });

      ele["choices"].forEach((choice) => {
        it("choices should have id with number type and non empty text", function () {
          choice.should.have.property("id");
          choice.should.have.property("text");
          choice['id'].should.be.an('number')
          choice['text'].should.not.be.empty;
          choice['id'].should.above(0).below(6);

        });
      });

      it("should have correctAnswer with number type", function () {
        ele.should.have.property("correctAnswer");
        ele['correctAnswer'].should.be.an('number')
      });

      it("correctAnswer should be between 0 and 5  ", function () {
        ele["correctAnswer"].should.above(0).below(6);
      });

    });
  });
});
