let flippedCards = [];
let matchedCards = [];

function flipCard(card)
{
    if(flippedCards.length<2 && !card.classList.contains('flip'))
    {
        card.classList.add('flip');
        flippedCards.push(card);

        if(flippedCards.length===2)
        {
            setTimeout(checkForMatch,1000);
        }
    }
}

function checkForMatch()
{
    const[card1,card2] = flippedCards;
    const img1 = card1.querySelector(".card-back").innerHTML;
    const img2 = card2.querySelector(".card-back").innerHTML;

    if(img1==img2)
    {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedCards.push(card1,card2);

        if(matchedCards.length===document.querySelectorAll('.card').length)
        {
            alert("Congratulations!You have matched all the cards");
        }
    }
    else
    {
        card1.classList.remove('flip');
        card2.classList.remove('flip');
    }
    flippedCards=[];
}