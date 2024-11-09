let vetor1 = [1,3,5,7,9]
let vetor2 = [2,4,6,8,10]

let vetor3 = []
let j = 0

for(let i = 0 ; i < 5; i++){
//   vetor3[0] = vetor1[0]
//   vetor3[1] = vetor2[0]
//   vetor3[2] = vetor1[1]
//   vetor3[3] = vetor2[1] 
//   vetor3[4] = vetor1[2] 
//   vetor3[5] = vetor2[2] 
//   vetor3[6] = vetor1[3] 
//   vetor3[7] = vetor2[3] 
//   vetor3[8] = vetor1[4] 
//   vetor3[9] = vetor2[4] 
vetor3[j] = vetor1[i]
j++
vetor3[j] = vetor2[i]
j++
 
}
document.write(`${vetor3}`) 