module.exports = function towelSort(matrix) {
    let i = 0;
    if (matrix == undefined) {
        matrix = [];
        return matrix;
    }
    while (i < matrix.length) {
        if (i % 2 !== 0) {
            matrix[i].reverse();
        }
        i++;
    }
    return matrix.flat();
};