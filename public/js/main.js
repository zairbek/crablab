window.addEventListener("load", init)

function init(){
  stretchBlock(getId("intro"), "1/1");
  stretchBlock(getId("menu-review"), "1/1");
  

  // ==================================================
  (function(){
    var a = document.querySelectorAll("a[class=phone-number]");
    // подберает элементы по селекторам и вешает события 
    // определяеть тип девайса (typeDevice), и вызывает функцию popupRender
    //в качестве аргумента передается iam - это this;
    a.forEach(function(item){
      item.onclick = function(event){
        var iam = this;
        if(typeDevice() === "desktop"){

          event.preventDefault(popupRender(iam));
          event.preventDefault(backgroundRender(true));
        }
      }
    })
  }
  )();
  // ==================================================



  
  $('.dishes-top-side').slick({
    dots: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });


  $('.interior-right-side').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

}


// FINISHED========
getId = (attr) => document.getElementById(attr);

window.onresize = function(){
  stretchBlock(getId("intro"), "1/1");
  stretchBlock(getId("menu-review"), "1/1");
};

function stretchBlock(attr, size){
  let h = window.innerHeight;
  switch(size){
    case "1/1": attr.style.height = h + "px"; break;
    case "1/2": attr.style.height = h / 2 + "px"; break;
    case "2/3": attr.style.height = h / 1.5 + "px"; break;
    case "3/4": attr.style.height = h - (h / 4) + "px"; break;
  }
  
};

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




// FINISHED========
function swipeMenu(){
  var el = getId(this.dataset.elem);
  el.style.left = 0;
  backgroundRender(true);
  getId("background").addEventListener('click', function(){
    el.style.left = - el.clientWidth - 5 + "px";
    backgroundRender(false);
  })
  getId(el.dataset.elClose).addEventListener('click', function(){
    el.style.left = - el.clientWidth - 5 + "px";
    backgroundRender(false);
  })
}
// FINISHED========




function backgroundRender(arg){
  var el = getId("background");
  if(arg){
    el.style.display = "block";
    
  }else{
    el.style.display = "";
  }

}

function popupRender(arg){
  var w = arg.dataset.popupWidth;
  var h = arg.dataset.popupHeight;
  var el = getId(arg.dataset.popupElem);
  
  var _windowHeight = window.innerHeight;
  var _windowWidth = window.innerWidth;
  el.style.display = "flex";
  el.style.width = w + "%";
  el.style.height = h + "px";
  
  el.style.top = (_windowHeight / 2) - (el.offsetHeight / 1.5) + "px";
  el.style.left = (_windowWidth / 2) - (el.offsetWidth / 2) + "px";

  window.addEventListener('keydown', function(e){ if(e.keyCode === 27){
    el.style.display = "none";
    backgroundRender(false)
  }});
  getId("background").addEventListener('click', function(){
    el.style.display = "none";
    backgroundRender(false);
  })
  getId(el.dataset.elClose).addEventListener("click", function(){
    el.style.display = "none";
    backgroundRender(false);
  })
}