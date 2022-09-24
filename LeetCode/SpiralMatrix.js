/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

direction = [
    [0, 1], //right
    [1, 0], //bottom
    [0,-1], // left
    [-1,0]  //top
]

var spiralOrder = function(matrix) {
    row = matrix.length
    col = matrix[0].length
    visited = new Array(row).fill(0).map((each) => new Array(col).fill(0))
    spiral = []
    step = row*col
    i=0, j=0
    itr =0
    while(step){
        spiral.push(matrix[i][j])
        visited[i][j] = 1
        currentItr = direction[itr%4]
        console.log(i,j)
        if(i+currentItr[0]>row-1 || j+currentItr[1] > col-1 || i+currentItr[0]<0 || j+currentItr[1]<0 || visited[i+currentItr[0]][j+currentItr[1]] == 1){
            itr++
        }
        
        currentItr = direction[itr%4]
        i += currentItr[0]
        j += currentItr[1]
        
        step--
    }
    return spiral
    
};