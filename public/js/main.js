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
      item.onclick = function(e){
        var iam = this;
        if(typeDevice() === "desktop"){
          
          
        }
      }
    })
  }
  )();
  // ==================================================



  var res = typeDevice() === "desktop" ? true : false; 
  
  $('.dishes-top-side').slick({
    dots: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    arrows: res,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
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
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    arrows: res,
    slidesToShow: 1,
    adaptiveHeight: true
  });


  var menuRestourant = new LazyLoad({
    elements_selector: ".menu-restourant-right-side_bg"
  })
  var menuReview = new LazyLoad({
    elements_selector: ".menu-review-right-side_bg"
  })
  var interior = new LazyLoad({
    elements_selector: ".interior-right-side_bg"
  })
  var dishes = new LazyLoad({
    elements_selector: ".dishes-top-side_bg"
  })


  $("#demo1").animatedModal({
    color: "rgb(23, 173, 233)",
    animationDuration: ".6s",
    animatedIn: "bounceInDown",
    animatedOut: "bounceOutUp"
  });




  // var arr = document.querySelectorAll(".dishes-top-side_bg");
  // arr.forEach(function(item){
  //   item.addEventListener("click", function(e){
  //     console.log(e.target.getAttribute("data-src"))
  //   })
  // })

  

  $(".script-nav li a").click(function(e){
    e.preventDefault();
    var id = $(this).attr("href");
    var top = $(id).offset().top;
    $("body, html").animate({scrollTop: top}, 1000);
  });
  $("#intro-footer__arrow").click(function(e){
    e.preventDefault();
    var id = $(this).attr("href");
    var top = $(id).offset().top;
    $("body, html").animate({scrollTop: top}, 1000);
  });
  $("#menu__items li a").click(function(e){
    e.preventDefault();
    var id = $(this).attr("href");
    var top = $(id).offset().top;
    $("body, html").animate({scrollTop: top}, 1000);
  });


  $("section").addClass("hidden").viewportChecker({
    classToAdd: "visible animated fadeInUp",
    offset: 100
  })


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







