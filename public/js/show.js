$('.small-image img').click(function(){

    $(this).addClass('image-active').siblings().removeClass('image-active');

    let image = $(this).attr('src');

    $('.big-image img').attr('src',image)

})

let modelBtn = document.querySelector('.modal-btn')
let modelBg = document.querySelector('.model-bg')
let modelClose = document.querySelector('.modal-close')

modelBtn.addEventListener('click',function(){
    modelBg.classList.add('bg-activate')
})

modelClose.addEventListener('click',function(){
    modelBg.classList.remove('bg-activate')
})