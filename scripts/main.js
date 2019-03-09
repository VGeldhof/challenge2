var today = new Date();
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

var months = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'augustus', 'september', 'oktober', 'november', 'december'];
var day = today.getDate();
var month = today.getMonth();
var year = today.getFullYear();


// Digitale klok

function timeHours() {
  var today = new Date();
  var hour = today.getHours();
  hour = leadingZero(hour);
  document.getElementById('hoursClock').innerHTML = hour;
  var t = setInterval('timeHours()', 1000);
}

function timeMinutes() {
  var today = new Date();
  var minute = today.getMinutes();
  minute = leadingZero(minute);
  document.getElementById('minutesClock').innerHTML = minute;
  var t = setInterval('timeMinutes()', 1000);
}

function timeSeconds() {
  var today = new Date();
  var second = today.getSeconds();
  second = leadingZero(second);
  document.getElementById('secondsClock').innerHTML = second;
  var t = setInterval('timeSeconds()', 1000);
}


function leadingZero(number) {

  if(number < 10) {
    return '0' + number;
  }

  else {
    return number;
  }
}

// animatie klok
function animationQHours() {
  var a = document.getElementById('hoursClock');
  var tl1 = new TimelineMax();
  var mediaQ719 = window.matchMedia("(max-width: 719px)");
  var mediaQ1023 = window.matchMedia("(max-width: 1023px)");
  var mediaQ1439 = window.matchMedia("(max-width: 1439px)");
  
  if (mediaQ719.matches) { // If media query matches
    tl1.to(hoursClock, 1, {
            fontSize: 55, 
          });
  }

  else if (mediaQ1023.matches) { // If media query matches
    tl1.to(hoursClock, 1, {
            fontSize: 125, 
          });
  }

  else if (mediaQ1439.matches) { // If media query matches
    tl1.to(hoursClock, 1, {
            fontSize: 155, 
          });
  }

  else { // If media query has a min-width of 1440px
    tl1.to(hoursClock, 1, {
            fontSize: 230, 
          });
  }

}


function animationQMinutes() {
  var a = document.getElementById('minutesClock');
  var tl1 = new TimelineMax();
  var mediaQ719 = window.matchMedia("(max-width: 719px)");
  var mediaQ1023 = window.matchMedia("(max-width: 1023px)");
  var mediaQ1439 = window.matchMedia("(max-width: 1439px)");
  
  if (mediaQ719.matches) { // If media query matches
    tl1.to(minutesClock, 1, {
            fontSize: 55, 
          });
  }

  else if (mediaQ1023.matches) { // If media query matches
    tl1.to(minutesClock, 1, {
            fontSize: 125, 
          });
  }

  else if (mediaQ1439.matches) { // If media query matches
    tl1.to(minutesClock, 1, {
            fontSize: 155, 
          });
  }

  else { // If media query has a min-width of 1440px
    tl1.to(minutesClock, 1, {
            fontSize: 230, 
          });
  }

}

function animationQSeconds() {
  var a = document.getElementById('secondsClock');
  var tl1 = new TimelineMax();
  var mediaQ719 = window.matchMedia("(max-width: 719px)");
  var mediaQ1023 = window.matchMedia("(max-width: 1023px)");
  var mediaQ1439 = window.matchMedia("(max-width: 1439px)");
  
  if (mediaQ719.matches) { // If media query matches
    tl1.to(secondsClock, 1, {
            fontSize: 55, 
          });
  }

  else if (mediaQ1023.matches) { // If media query matches
    tl1.to(secondsClock, 1, {
            fontSize: 125, 
          });
  }

  else if (mediaQ1439.matches) { // If media query matches
    tl1.to(secondsClock, 1, {
            fontSize: 155, 
          });
  }

  else { // If media query has a min-width of 1440px
    tl1.to(secondsClock, 1, {
            fontSize: 230, 
          });
  }

}

function animationQPoint() {
  var a = document.getElementsByClassName('dubbelePunt');
  var tl1 = new TimelineMax();
  var mediaQ719 = window.matchMedia("(max-width: 719px)");
  var mediaQ1023 = window.matchMedia("(max-width: 1023px)");
  var mediaQ1439 = window.matchMedia("(max-width: 1439px)");
  
  if (mediaQ719.matches) { // If media query matches
    tl1.to(secondsClock, 1, {
            fontSize: 55, 
          });
  }

  else if (mediaQ1023.matches) { // If media query matches
    tl1.to(secondsClock, 1, {
            fontSize: 125, 
          });
  }

  else if (mediaQ1439.matches) { // If media query matches
    tl1.to(secondsClock, 1, {
            fontSize: 155, 
          });
  }

  else { // If media query has a min-width of 1440px
    tl1.to(secondsClock, 1, {
            fontSize: 230, 
          });
  }

}



function animationBounce() {
  var b = document.getElementById('secondsClock');
  
  var tl2 = new TimelineMax({repeat : -1});

	tl2.call(timeSeconds)
			.from('#secondsClock', 0.3, { opacity: 0, y: -100, ease: Bounce.easeOut})
			.to('#secondsClock', 0.7, { opacity: 1, y: 0});

}



// Visueel dagnacht digitale klok


function dagnachttekst() {
  var textColor = document.getElementById('digitalClock');

      if (hour < 6) {
          textColor.style.color = "#d6f0ff";
      }
        else if (hour < 12) {
          textColor.style.color = "#d6f0ff";
        }
        else if (hour < 18) {
          textColor.style.color = "#d6f0ff";
        }
      else {
          textColor.style.color = "#d6f0ff";
      }
}

function dagennacht() {
  var bodyColor = document.getElementsByTagName("SECTION")[0];
  
      if (hour < 6) {
          bodyColor.style.backgroundColor = "#172742";
      }
        else if (hour < 12) {
          bodyColor.style.backgroundColor = "#f7b751";
        }
        else if (hour < 18) {
          bodyColor.style.backgroundColor = "#35b8ff";
        }
      else {
          bodyColor.style.backgroundColor = "#184796";
      }
}

function dagNachtIMG() {

    if (hour >= 22 && hour <= 4) {
          document.getElementById('dag_nacht').style.backgroundImage = 'url(img/starryNight.jpg)';
    }
      else if (hour >= 5 && hour <= 10) {
          document.getElementById('dag_nacht').style.backgroundImage = 'url(img/dawn.jpg)';
      }
      else if (hour >= 11 && hour <= 16) {
          document.getElementById('dag_nacht').style.backgroundImage = 'url(img/blueSky.jpg)';
      }
    else {
          document.getElementById('dag_nacht').style.backgroundImage = 'url(img/evening.jpg)';
    }  
}


function dagnachttekstdag() {
  var textColor = document.getElementById('digitalDay');

      if (hour < 6) {
          textColor.style.color = "#d6f0ff";
      }
        else if (hour < 12) {
          textColor.style.color = "#ffedd1";
        }
        else if (hour < 18) {
          textColor.style.color = "#d6f0ff";
        }
      else {
          textColor.style.color = "#efefef";
      }
}

function dagnachttekstdatum() {
  var textColor = document.getElementById('digitalDate');

      if (hour < 6) {
          textColor.style.color = "#d6f0ff";
      }
        else if (hour < 12) {
          textColor.style.color = "#ffedd1";
        }
        else if (hour < 18) {
          textColor.style.color = "#d6f0ff";
        }
      else {
          textColor.style.color = "#efefef";
      }
}


// Datum


var formatDate = today.getDate() + ' ' + months[today.getMonth()] + ' ' + today.getFullYear();


var days = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];

var formatDay = days[today.getDay()];



window.onload = function () {
  
  timeHours();
  timeMinutes();
  timeSeconds();
  leadingZero();
  animationQHours();
  animationQMinutes();
  animationQSeconds();
  animationQPoint();
  animationBounce();
  
  dagNachtIMG();
  dagnachttekst();
  dagnachttekstdag();
  dagnachttekstdatum();

  document.getElementById('digitalDate').innerHTML = formatDate;

  document.getElementById('digitalDay').innerHTML = formatDay;
};




















