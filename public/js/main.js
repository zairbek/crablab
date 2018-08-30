window.onload = init;

function init(){
  stretchBlock(getId("intro"));
  getId("intro-footer__arrow").addEventListener('click', scrollToElem);
  getId("header-nav__menu").addEventListener('click', swipeMenu)
}



getId = (attr) => document.getElementById(attr);
(window.onresize = function(){
  stretchBlock(getId("intro"));
})


function stretchBlock(attr){
  // let w = window.innerWidth;
  let h = window.innerHeight;

  attr.style.height = (h - 20) + "px";
}

function scrollToElem(){
  let scrollTo = this.dataset.scrollToElemId;
  let to = getId(scrollTo).offsetTop;
  // let scroll = window.pageYOffset;
 
  window.scrollBy(0, to);
}

function swipeMenu(){
  let el = this.dataset.elem;
  getId(el).style.left = 0;
}


