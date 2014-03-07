/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *  
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
exports.MatrixRotator = MatrixRotator;
var Direction = require("./Direction").Direction;

function MatrixRotator(matrix){
  this.matrix = matrix;
  
};

//                                         |-- Must be Direction.CW
//                                         v        or Direction.CCW
MatrixRotator.prototype.rotate = function(direction) {
  // do work here
  
  //store matrix length
  matrixLength = this.matrix.length;

  //create new temp matrix
  rotatedMatrix = new Array();


  // must be a valid Direction, see Direction.js

  //runs if direction is clockwise
  if (direction === Direction.CW) {
    //loop through original matrix to build each array in the temp matrix
    for (var i = 0; i < matrixLength; i++) {
        //push an array that has each element with decending indexes of the original matrix
        //while the inner array's index remains the same until next loop where it increments
        rotatedMatrix.push([
            this.matrix[matrixLength-1][i],
            this.matrix[matrixLength-2][i],
            this.matrix[matrixLength-3][i],
            this.matrix[matrixLength-4][i],
            this.matrix[matrixLength-5][i]
        ]);

    } 
  }

  //runs if direction is counterclockwise
  if (direction === Direction.CCW) {
    //loop through original matrix to build each array in the temp matrix
    for (var i = matrixLength-1; i >= 0; i--) {
        //push an array that has each element with ascending indexes of the matrix
        //while the inner array's index remains the same until next loop where it decrements
        rotatedMatrix.push([
            this.matrix[matrixLength-5][i],
            this.matrix[matrixLength-4][i],
            this.matrix[matrixLength-3][i],
            this.matrix[matrixLength-2][i],
            this.matrix[matrixLength-1][i]
        ]);

    } 


  }
    
    //rewrite original matrix with rotated matrix
    this.matrix = rotatedMatrix;



};