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
  console.log("length: "+matrixLength);
  tempArray = new Array();

  //create new temp matrix
  rotatedMatrix = new Array();


  // must be a valid Direction, see Direction.js

  //runs if direction is clockwise
  if (direction === Direction.CW) {
    //loop through original matrix to build each array in the temp matrix
    //i is the index of the element of the inner array in the original matrix
    for (var i = 0; i < matrixLength; i++) {
        //create an array to be placed into a temp array
        //j is the index of the outer array in the matrix
        for (var j = matrixLength-1; j >= 0; j--) {
            tempArray.push(this.matrix[j][i]);
        }
        //push temp array into rotated matrix and reset temp array
        rotatedMatrix.push(tempArray);
        tempArray = [];

    } 
    console.log("rotate: "+rotatedMatrix);
  }

  //runs if direction is counterclockwise
  if (direction === Direction.CCW) {
    //loop through original matrix to build each array in the temp matrix
    //i is the index of the element of the inner array in the original matrix
    for (var i = matrixLength-1; i >= 0; i--) {
        //create an array to be placed into a temp array
        //j is the index of the outer array in the matrix
        for (var j = 0; j < matrixLength; j++) {
            tempArray.push(this.matrix[j][i]);
        }
        //push temp array into rotated matrix and reset temp array
        rotatedMatrix.push(tempArray);
        tempArray = [];

    } 


  }
    
    //rewrite original matrix with rotated matrix
    this.matrix = rotatedMatrix;



};