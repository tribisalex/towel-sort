module.exports = function towelSort (matrix) {
    let arr = [];
    if (matrix === undefined) {
        return [];
    } else {
        for (let i = 0; i < matrix.length; i++) {
            let arr1 = matrix[i];
            if (i % 2 === 0) {
                arr1.sort((a, b) => {
                    if (a > b) return 1;
                    if (a === b) return 0;
                    if (a < b) return -1;
                });
            } else {
                arr1.sort((a, b) => {
                    if (a > b) return -1;
                    if (a === b) return 0;
                    if (a < b) return 1;
                });
            }
            for (let j = 0; j < matrix[i].length; j++) {
                arr.push(arr1[j]);
            }
        }
        return arr;
    }
}
