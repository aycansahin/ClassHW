document.addEventListener('DOMContentLoaded', (event) => {
   
    const cardArray = [ 
       {
           name: 'e',
           img: 'images/e.png'
       },
       {
            name: 'b',
            img: 'images/b.png'
       },
       {
            name: 't',
            img: 'images/t.png'
       },
       {
            name: 's',
            img: 'images/s.png'
       },
       {
            name: 'c',
            img: 'images/c.png'
       },              
       {
            name: 'ha',
            img: 'images/ha.png'
       },
       {
           name: 'dal',
           img: 'images/dal.png'
       },
       {
            name: 'zel',
            img: 'images/zel.png'
       }, 
       {
            name: 'ra',
            img: 'images/ra.png',
            ses: 'voices/alif.mp3'
        },
        {
            name: 'z',
            img: 'images/z.png'
        },
        {
            name: 'e',
            img: 'images/e.png'
        },
        {
             name: 'b',
             img: 'images/b.png'
        },
        {
             name: 't',
             img: 'images/t.png'
        },
        {
             name: 's',
             img: 'images/s.png'
        },
        {
             name: 'c',
             img: 'images/c.png'
        },              
        {
             name: 'ha',
             img: 'images/ha.png'
        },
        {
            name: 'dal',
            img: 'images/dal.png'
        },
        {
             name: 'zel',
             img: 'images/zel.png'
        }, 
        {
             name: 'ra',
             img: 'images/ra.png'
         },
         {
             name: 'z',
             img: 'images/z.png'
         }     
   ] 

//kartları karıştıralım
cardArray.sort(()=> 0.5 - Math.random())
const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
resultDisplay.textContent = 0;
var cardChosen = []
var cardChosenId = []
var cardsWon = []
//creat board
function createBoard(){
    for(let i=0; i<cardArray.length; i++){
        var card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

//check matches
function checkForMatch(){
    var cards = document.querySelectorAll('img')
    const option1Id = cardChosenId[0]
    const option2Id = cardChosenId[1]
    if(cardChosen[0] === cardChosen[1]){
        //alert('Böyle devam!')
        var okses=document.getElementById('eslesti');
        okses.play();
        cards[option1Id].setAttribute('src', 'images/esles.png')
        cards[option2Id].setAttribute('src', 'images/esles.png')
        cardsWon.push(cardChosen)
    }
    else{
        cards[option1Id].setAttribute('src', 'images/blank.png')
        cards[option2Id].setAttribute('src', 'images/blank.png')
    }
    cardChosen = []
    cardChosenId = []
    resultDisplay.textContent = cardsWon.length*10
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Tebrikler! Oyunu Kazandınız'
        clearInterval(interval)
    }
}

//flip card
function flipCard(){
    var cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    var okses1=document.getElementById(cardArray[cardId].name);
    okses1.play();
    if(cardChosen.length === 2){
        //does not happen to quicly
        setTimeout(checkForMatch, 500)
    }
}

//timer

var second = 0, minute = 0;
var timer = document.querySelector(".timer");
var interval;
function startTimer(){
    interval = setInterval(function(){
        timer.innerHTML = minute+" dk "+second+" sn";
        second++;
        if(second == 60){
            minute++;
            second = 0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
    
}

createBoard()
startTimer()

})






























