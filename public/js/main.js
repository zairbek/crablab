// fn.apply()
// obj.prototype

window.addEventListener("load", init)

function init(){
  stretchBlock(getId("intro"));
  getId("intro-footer__arrow").addEventListener('click', scrollToElem);
  getId("header-nav__menu").addEventListener('click', swipeMenu);


  // ==================================================
  var a = document.querySelectorAll("a[class=phone-number]");
  a.forEach(function(item){
    item.onclick = function(event){
      var device = typeDevice();
      if(typeDevice() === "desktop"){
        event.preventDefault(alert(0));
      }
    }
  });
  // ==================================================

}


// FINISHED========
getId = (attr) => document.getElementById(attr);

window.onresize = function(){
  stretchBlock(getId("intro"));
};

function stretchBlock(attr){
  let h = window.innerHeight;
  attr.style.height = h + "px";
};

(function(){
  // функция для изменение темы браузера
  var el = [], s, h;
  el[0] = document.querySelector("meta[name=theme-color]");
  el[1] = document.querySelector("meta[name=msapplication-navbutton-color]");
  el[2] = document.querySelector("meta[name=apple-mobile-web-app-status-bar-style]");

  window.addEventListener('scroll', function(){
    s = window.pageYOffset || document.documentElement.scrollTop;
    h = window.innerHeight;
    if(h <= s){
      el[0].setAttribute('content', '#52cca8');
      el[1].setAttribute('content', '#52cca8');
      el[2].setAttribute('content', '#52cca8');
    }else{
      el[0].setAttribute('content', '#582b2b');
      el[1].setAttribute('content', '#582b2b');
      el[2].setAttribute('content', '#582b2b');
    }
  })
}).call(this)

// FINISHED========


// ===================================================================
function typeDevice (){
  // функция для определение девайса
  // Возвращаеть "desktop" - "mobile"
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

  if(desktop())
    return "desktop";
  if(mobile())
    return "mobile";
};


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

}





// FINISHED========
function swipeMenu(){
  var el = getId(this.dataset.elem);
  el.style.left = 0;
  //var div = document.createElement('div');
  //div.style.background = 'black';
  //el.parentNode.appendChild(div)
  //alert(el.parentNode);

  getId(el.dataset.elClose).addEventListener('click', function(){
    el.style.left = - el.clientWidth - 5 + "px";
  })
}
// FINISHED========



function popupRender(){
  var _windowHeight = window.innerHeight;
  var _windowWidth = window.innerWidth;
  var el = getId("popup-alert");
  var elWidth = el.offsetWidth;
  var elHeight = el.offsetHeight;
  el.style.visibility = "visible";
  el.style.top = (_windowHeight / 2) - (elHeight / 1.5) + "px";
  el.style.left = (_windowWidth / 2) - (elWidth / 2) + "px";

}