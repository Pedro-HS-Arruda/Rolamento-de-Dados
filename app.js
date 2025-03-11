let random1 = Math.floor(Math.random() * 6) + 1

let randomimg1 = 'dice' + random1 + '.png'

let imgfin1 = 'img/' + randomimg1

let img1 = document.querySelectorAll('img')[0]

img1.setAttribute('src',imgfin1)


//DADO 2

let random2 = Math.floor(Math.random() * 6) + 1

let randomimg2 = 'dice' + random2 + '.png'

let imgfin2 = 'img/' + randomimg2

let img2 = document.querySelectorAll('img')[1]

img2.setAttribute('src',imgfin2)


//CONDIÇÃO

if(random1 > random2){
    document.querySelector('h1').innerHTML = 'Jogador 1 Vencerdor'
} else if (random2 > random1){
    document.querySelector('h1').innerHTML = 'Jogador 2 Vencerdor'
} else{
    document.querySelector('h1').innerHTML = "Empate"
}