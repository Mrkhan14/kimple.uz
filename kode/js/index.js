/*::::::::::::::::::::: start index slidre::::::::::::::::::::::::::*/
$(document).ready(function() {
      $('#index-top').owlCarousel({
        loop: true,
        responsiveClass: true,
        autoplay:true,
        dots:false,
        items: 1,
        autoplayTimeout:10000
      })
});
/*::::::::::::::::::::: end index slidre::::::::::::::::::::::::::*/

/*::::::::::::::::::::: start  footer carusel :::::::::::::::::::::*/
$(document).ready(function() {
      $('#top').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay:true,
        dots:false,
        autoplayTimeout:10000,
        responsive: {
          0: {
            items: 1,
            slideBy: 1,
            nav: true
          },
          600: {
            items: 2,
            slideBy: 2,
            nav: false
          },
          1000: {
            items: 3,
            nav: true,
            slideBy: 3,
            margin: 20
          }
        }
      })
});
// owl.on('mousewheel', '.owl-stage', function (e) {
//     if (e.deltaY>0) {
//         owl.trigger('next.owl');
//     } else {
//         owl.trigger('prev.owl');
//     }
//     e.preventDefault();
// });
/*::::::::::::::::::::: end    footer carusel :::::::::::::::::::::*/

/*::::::::::::::::::::: start  read-more.html carusel :::::::::::::::::::::*/
$(document).ready(function() {
      $('#top2').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay:true,
        dots:false,
        autoplayTimeout:10000,
        responsive: {
          0: {
            items: 1,
            slideBy: 1,
            nav: true
          },
          600: {
            items: 1,
            slideBy: 1,
            nav: false
          },
          1000: {
            items: 2,
            nav: true,
            slideBy: 2,
            margin: 20
          }
        }
      })
});
/*::::::::::::::::::::: end   read-more.html carusell :::::::::::::::::::::*/


/*::::::::::::::::::::: bernt :::::::::::::::::::::*/
$(document).ready(function() {
      $('#bernt-slider').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay:true,
        dots:false,
        autoplayTimeout:7000,
        responsive: {
          0: {
            items: 1,
            nav: true
          },
          600: {
            items: 2,
            nav: false
          },
          1000: {
            items: 6,
            nav: true,
            margin: 20
          }
        }
      })
});
/*::::::::::::::::::::: bernt :::::::::::::::::::::*/

/*::::::::::::::::::::: bernt :::::::::::::::::::::*/
$(document).ready(function() {
      $('#baner-silider').owlCarousel({
        loop: true,
        margin: 10,
        autoplay:true,
        dots:false,
        nav:false,
        autoplayTimeout:10000,
        animateIn: 'flipInX',
        items:1
      })
});
/*::::::::::::::::::::: bernt :::::::::::::::::::::*/

/*:::::::::::::::::::::click likr  :::::::::::::::::::::*/
$(".zo").click(function(e){
  e.preventDefault();
   $(this).toggleClass("kactive");
});
$(".no").click(function(e){
  e.preventDefault();
   $(this).toggleClass("kactive");
});

/*:::::::::::::::::::::click likr  :::::::::::::::::::::*/



// var $disabledResults = $(".js-example-disabled-results");
// $disabledResults.select2();
    var $disabledResults = $(".js-example-disabled-results");
    for(i=0; i<$disabledResults.length; i++){
       $($disabledResults[i]).select2({
        dropdownParent: $($disabledResults[i]).closest('div')
       });
     }

/*:::::::::::::::::::::audioplayer  :::::::::::::::::::::*/
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    // ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
/*:::::::::::::::::::::audioplayer :::::::::::::::::::::*/

$(".drop-filter .btn.btn-link").click(function(e){
  e.preventDefault();
   $(this).toggleClass("icon-action");
});


/*:::::::::::::::::::::mutlit form :::::::::::::::::::::*/
//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
  if(animating) return false;
  animating = true;
  
  current_fs = $(this).parent();
  next_fs = $(this).parent().next();
  
  //activate next step on progressbar using the index of next_fs
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

   //show the next fieldset
  next_fs.show(); 
  //hide the current fieldset with style
  current_fs.animate({opacity: 0}, {
    step: function(now, mx) {
      //as the opacity of current_fs reduces to 0 - stored in "now"
      //1. scale current_fs down to 80%
      scale = 1 - (1 - now) * 0.2;
      //2. bring next_fs from the right(50%)
      left = (now * 50)+"%";
      //3. increase opacity of next_fs to 1 as it moves in
      opacity = 1 - now;
      current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
      next_fs.css({'left': left, 'opacity': opacity});
    }, 
    duration: 800, 
    complete: function(){
      current_fs.hide();
      animating = false;
    }, 
    //this comes from the custom easing plugin
    easing: 'easeInOutBack'
  });
});

$(".previous").click(function(){
  if(animating) return false;
  animating = true;
  
  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();
  
  //de-activate current step on progressbar
  $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
  
  //show the previous fieldset
  previous_fs.show(); 
  //hide the current fieldset with style
  current_fs.animate({opacity: 0}, {
    step: function(now, mx) {
      //as the opacity of current_fs reduces to 0 - stored in "now"
      //1. scale previous_fs from 80% to 100%
      scale = 0.8 + (1 - now) * 0.2;
      //2. take current_fs to the right(50%) - from 0%
      left = ((1-now) * 50)+"%";
      //3. increase opacity of previous_fs to 1 as it moves in
      opacity = 1 - now;
      current_fs.css({'left': left});
      previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
    }, 
    duration: 800, 
    complete: function(){
      current_fs.hide();
      animating = false;
    }, 
    //this comes from the custom easing plugin
    easing: 'easeInOutBack'
  });
});

$(".submit").click(function(){
  return false;
})

$(".submit1").click(function(e){
  e.preventDefault();
   $('.click1').addClass("none-border");
});
$(".submit1").click(function(e){
  e.preventDefault();
   $('.click2').addClass("color");
});
$(".submit2").click(function(e){
  e.preventDefault();
   $('.click2').addClass("none-border");
   $('.click3').addClass("none-border color");
});

$(".net-submi2").click(function(e){
  e.preventDefault();
   $('.click1').toggleClass("none-border");
   $('.click2').toggleClass("color");
});
$(".net-submi3").click(function(e){
  e.preventDefault();
   $('.click2').toggleClass("none-border");
   $('.click3').toggleClass("color");
});


/*:::::::::::::::::::::mutlit form :::::::::::::::::::::*/

/*:::::::::::::::::::::dabavir input form :::::::::::::::::::::*/
$("textarea").on("click", 
  function(event) {
    console.log(event);
});

$(".add-teatarea").on("click", function() {
  $(" <textarea  class='add-block-textarea' placeholder='Напишите, чем вам помочь...'></textarea>").appendTo("#scope");
});



var sheet = document.createElement('style'),  
  $rangeInput = $('.range input'),
  prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];

document.body.appendChild(sheet);

var getTrackStyle = function (el) {  
  // var curVal = el.value,
  //     val = (curVal - 1) * 0,
  //     style = '';
  
  // Set active label
  $('.range-labels li').removeClass('active selected');
  
  var curLabel = $('.range-labels').find('li:nth-child(' + curVal + ')');
  
  curLabel.addClass('active selected');
  curLabel.prevAll().addClass('selected');
  
  // Change background gradient
  // for (var i = 0; i < prefs.length; i++) {
  //   style += '.range {background: linear-gradient(to right, #37adbf 0%, #37adbf ' + val + '%, #fff ' + val + '%, #fff 100%)}';
  //   style += '.range input::-' + prefs[i] + '{background: linear-gradient(to right, #37adbf 0%, #37adbf ' + val + '%, #b2b2b2 ' + val + '%, #b2b2b2 100%)}';
  // }

   return style;
}
$rangeInput.on('input', function () {
  sheet.textContent = getTrackStyle(this);
});

// Change input value on label click
$('.range-labels li').on('click', function () {
  var index = $(this).index();
  
  $rangeInput.val(index + 1).trigger('input');
  
});
/*:::::::::::::::::::::end dabavir input form :::::::::::::::::::::*/
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});
/*:::::::::::::::::::::suuma input form :::::::::::::::::::::*/
$("#test3").inputmask("decimal", {
     mask: "999 999 999 999 999 999 999",
     radixPoint: ',',
     inputtype: "text"
});
$("#test5").inputmask("decimal", {
     mask: "999 999 999 999 999",
     radixPoint: ',',
     inputtype: "text"
});
$("#test4").inputmask("decimal", {
     mask: "(99) 999 99 99",
     radixPoint: ',',
     inputtype: "text"
});
$(".test4").inputmask("decimal", {
     mask: "99 999 99 99",
     radixPoint: ',',
     inputtype: "text"
});

/*:::::::::::::::::::::end summa input form :::::::::::::::::::::*/

/*:::::::::::::::::::::Tooltip bootstrap 4:::::::::::::::::::::*/

/*:::::::::::::::::::::Tooltip bootstrap 4:::::::::::::::::::::*/