//nav transformation
const menubtn=document.querySelector('.menu-toggle');
const navbar=document.querySelector('.nav-menu');
const items=document.querySelectorAll('.nav-item a');

menubtn.addEventListener('click',()=>{
  navbar.classList.toggle('active');
  if(navbar.classList.contains('active')){
  menubtn.innerHTML='<img src="Assets/Icons/close.png">';
}
else{
  menubtn.innerHTML='<img src="Assets/Icons/menu.png">';
}
})

items.forEach(item =>{
    item.addEventListener('click',()=>{
    navbar.classList.remove('active')
    menubtn.innerHTML='<img src="Assets/Icons/menu.png">';
  })
})

//scoll animation
const sr=ScrollReveal( {
    origin: 'top',     // 'top', 'left', 'right', 'bottom'
    distance: '60px',     // how far it moves
    duration: 1500,       // in milliseconds
    delay: 200,           // delay before animating
    easing: 'ease-in-out',
    reset: false
});

sr.reveal('.main-head,.about-head,.skill-head,.head',{});
sr.reveal('.main-footer,.c2,textarea,button',{delay:400});
sr.reveal('input',{interval:100})

const right=ScrollReveal( {
    origin: 'right', 
    distance: '80px',     
    duration: 1500,       
    delay: 200,          
    easing: 'ease-in-out',
    reset: false
});
right.reveal('.col2',{delay:300})


const left=ScrollReveal( {
    origin: 'left',     
    distance: '60px',    
    duration: 1500,       
    delay: 200,          
    easing: 'ease-in-out',
    reset: false,
});
left.reveal('.c1',{})
const left_css=ScrollReveal( {
    origin: 'left',     
    distance: '60px',    
    duration: 1500,       
    delay: 200,          
    easing: 'ease-in-out',
    reset: false,
    afterReveal:function(el){
      el.classList.add('revealed') 
    }
});
left_css.reveal('.skill, .item',{interval:100})

