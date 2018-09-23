window.addEventListener("load", init)

function init(){
  stretchBlock(getId("intro"));
  getId("intro-footer__arrow").addEventListener('click', scrollToElem);
  getId("header-nav__menu").addEventListener('click', swipeMenu)
}


// FINISHED========
getId = (attr) => document.getElementById(attr);

window.onresize = function(){
  stretchBlock(getId("intro"));
};

function stretchBlock(attr){
  let h = window.innerHeight;
  attr.style.height = h + "px";
}
// FINISHED========


// ===================================================================
(function(){
  window.device = {};

  var _user_agent = window.navigator.userAgent.toLowerCase();
  
  var device_desktop = ['windows', 'x11', 'macintosh'];
  var device_mobile = ['android', 'blackberry', 'bb10', 'rim', 'ios', 'mobile', 'ipad', 'ipod', 'iphone', 'phone', 'touch'];

  desktop = function(){
    for(let i = 0; i <= device_desktop.length; i++){
      if(_user_agent.indexOf(device_desktop[i]) !== -1)
        return _user_agent.indexOf(device_desktop[i]) !== -1; 
    }
  }
  mobile = function(){
    for(let i = 0; i <= device_mobile.length; i++){
      if(_user_agent.indexOf(device_mobile[i]) !== -1)
        return _user_agent.indexOf(device_mobile[i]) !== -1
    }
  }


  
  // if(desktop())
  //   alert("desktop")
  // if(mobile())
  //   alert("mobile")


}).call(this);

// =====================================================================================



function scrollToElem(){
  var toEl = getId(this.dataset.scrollToElemId);
  var offset =  toEl.offsetTop;
  var nowPosition = window.pageYOffset;
  var t;
    
  t = setInterval(function(){
    if(nowPosition <= offset){
    let p = window.pageYOffset; 
    window.scrollTo(0, p + 8);

      if(p >= offset){
        clearInterval(t);          
      }
    }
  }, 0.01)
  


  // window.scrollTo(0, offset);
}





// FINISHED========
function swipeMenu(){
  var el = getId(this.dataset.elem);
  el.style.left = 0;

  getId(el.dataset.elClose).addEventListener('click', function(){
    el.style.left = - el.clientWidth - 5 + "px";
  })
}
// FINISHED========











function foo(dur){

}