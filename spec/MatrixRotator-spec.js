var MatrixRotator = require("../MatrixRotator").MatrixRotator;
var Matrix = require("../Matrix").Matrix;
var Direction = require("../Direction").Direction;

describe("The Matrix Rotator", function () {
  
  var matrixRotator = new MatrixRotator(Matrix.matrix1);
  var matrixRotator2 = new MatrixRotator(Matrix.matrix2);
  
  it("can rotate Clockwise", function () {
    matrixRotator.rotate(Direction.CW);
    expect(matrixRotator.matrix).toEqual( [
                                            [9,0,3,4,8],
                                            [0,6,3,5,0],
                                            [3,8,6,2,1],
                                            [8,8,9,9,9],
                                            [7,3,0,7,3]
                                          ]);

  });

  it("can rotate CounterClockwise", function () {
    matrixRotator.rotate(Direction.CCW);
    matrixRotator.rotate(Direction.CCW);
    expect(matrixRotator.matrix).toEqual([
                                            [3,7,0,3,7],
                                            [9,9,9,8,8],
                                            [1,2,6,8,3],
                                            [0,5,3,6,0],
                                            [8,4,3,0,9]
                                          ]);
  });

  it("can rotate Clockwise", function () {
    matrixRotator2.rotate(Direction.CW);
    expect(matrixRotator2.matrix).toEqual( [
                                            [6,0,1,3,4,0],
                                            [9,9,8,7,9,1],
                                            [7,4,5,0,4,1],
                                            [0,6,0,1,4,3],
                                            [0,7,5,7,5,0],
                                            [2,8,2,8,7,5]
                                          ]);

  });

  it("can rotate CounterClockwise", function () {
    matrixRotator2.rotate(Direction.CCW);
    matrixRotator2.rotate(Direction.CCW);
    expect(matrixRotator2.matrix).toEqual([
                                            [5,7,8,2,8,2],
                                            [0,5,7,5,7,0],
                                            [3,4,1,0,6,0],
                                            [1,4,0,5,4,7],
                                            [1,9,7,8,9,9],
                                            [0,4,3,1,0,6]
                                          ]);
  });


});    