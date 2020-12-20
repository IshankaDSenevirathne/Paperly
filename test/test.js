// import {data} from '../src/paperdata/physics/2018/paper'
require('ignore-styles').default(['.png', '.PNG']);

let data  =  require('../src/paperdata/physics/2018/paper')
let should = require('chai').should()

console.log(data)



describe('Array', function() {
  describe('#indexOf()', function() {
    // it('should return -1 when the value is not present', function() {
    //   assert.equal([1, 2, 3].indexOf(4), -1);
    // });
    it('should have paperId', function() {
        data.should.have.property('paperId')
      });


      data.content.pages.forEach(ele=>{
        it('should have title', function() {
          ele.should.have.property('title')
          ele['title'].should.not.be.empty
        });
        it('should have choices', function() {
          ele.should.have.property('choices')
          ele['choices'].should.not.be.empty

        });

        it('should have correctAnswer', function() {
          ele.should.have.property('correctAnswer')
          ele['correctAnswer'].should.be.an('number')
        });
      })

  });
});