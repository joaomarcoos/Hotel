$(document).ready(function(){

    $('#btn').click(function(){
        $('#modal-container').fadeOut(500);
    })


})

let typed = new Typed('.typed', {
    strings:[
        'aconchego', 
        'conforto',
        'simpatia',
        'e alto astral'
    ],
    loop: true, 
    typeSpeed: 80,
    backSpeed: 100,
    backDelay: 2000
})