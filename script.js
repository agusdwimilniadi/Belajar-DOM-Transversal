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
        e.preventDefault()
        e.stopPropagation() // Untuk menstop cek element diatasnya, atau kalo kurang jelas ini bisa di hapus lalu klik di tanda X kan yang terjadi itu fungsi .card nya bukan fungsi tanda silangnya, maka dari itu ada ini
    });
};

const kartuSemua = document.querySelectorAll('.card');
kartuSemua.forEach(function(card){
    card.addEventListener('click', function(){
        alert('ok')
    })
});