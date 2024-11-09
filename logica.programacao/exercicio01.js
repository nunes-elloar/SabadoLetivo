let maiorNumero = 0
const vetor = [5,6,3,2,8,9,4,1,7,2,3]

for(let i = 0; i < vetor.length; i++){
    if(vetor[1] > maiorNumero){
        maiorNumero = vetor[i]
    }
}
console.log(`O maior número do vetor é ${maiorNumero}`)