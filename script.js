// const divContainer = document.querySelector('.container');
// const divClose = document.querySelector('.container .card');

// divClose.addEventListener('click', function(){
//     divContainer.style.display = 'none';
// });



// DOM TRANSVERSAL

const close = document.querySelectorAll('.close');

for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function(e){
        //close[i].parentElement.style.display = 'none';  /// INI PEMRAKTEKAN DOM TRANSVERSAL

        e.target.parentElement.style.display = 'none';
    });
};