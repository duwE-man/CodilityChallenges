// Find binary gap (longest sequence of zeros followed by 1)
function solution(N) {
    let binary = N.toString(2)
    let maximal = 0
    let temporal = 0
    for (let i = 0, length = binary.length; i < length; i++) {
        if (binary[i] == 0) 
          temporal += 1
        if (binary[i] == 1) {
          if (temporal > maximal)
            maximal = temporal
          temporal = 0
        }
    }
    return maximal
}