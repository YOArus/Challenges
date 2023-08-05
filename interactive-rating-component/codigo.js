let numberContainer = document.querySelector('.rating-card__numbers');
let rateNumber = document.querySelector('.thank-you-card__number');
let submitBtn = document.querySelector('#submit');
let ratingState = document.querySelector('.rating-card');
let thankYouState = document.querySelector('.thank-you-card__active');



//###Pasos

/*
1.Se selecciona el contenedor de los números
2.Se le asigna un evento.target para que al clickear se muestre el contenido de los mismos 
3.Para testear verificar con console
4. Se crea una segunda var
5. a esta nueva var se le asigna la var anterior
6. Para cambiar texto html se pone innerText
*/

numberContainer.addEventListener('click', event =>{
    let numberSelected = event.target.innerText;
    // console.log(numberSelected)
    rateNumber.innerText = numberSelected;

    if(numberSelected > 0 || numberSelected <= 5  ) {
        //para acceder  a los estulos se ejecuta lo siguiente
        submitBtn.addEventListener('click', () =>{
            ratingState.style.display = 'none';
            thankYouState.style.display = 'flex';
        })
    }

})

