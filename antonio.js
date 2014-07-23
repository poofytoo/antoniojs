/*!
 * Antonio.js
 * http://victorhh.com/antoniojs
 *
 * Author: Victor Hung
 * Released under the MIT license
 *
 * Date: 2014-07-22
 */
 
// Pardon me, I haven't coded pure JavaScript in AGES
// This might be interesting.

var ANTONIO = "97110116111110105111";
var BIRTHDAY = 7/22;

var img = document.createElement('img');
var logger = [];
var position = -800;
var antonioAnimate;
var activateBtn = document.getElementById('activate');

img.src = "http://victorhh.com/antoniojs/theman.png";
img.style.height = "100%";
img.style.position = "fixed";
img.style.right = position + "px";
img.style.bottom = "0";
img.style.zIndex = 2014;

document.addEventListener('keypress', function (e) {
  console.log('hay');
  logger += '' + e.which;
  if (ANTONIO.indexOf(logger) != 0) {
    logger = "";
  } else if (ANTONIO === logger){
    console.log('Antonio Activated!');
    antonioAnimate = setInterval(moveTheMan, 24);
  }
})

if (activateBtn) {
  activateBtn.addEventListener('click', function() {
    console.log('Antonio Activated!');
    antonioAnimate = setInterval(moveTheMan, 24);
  })
}

var moveTheMan = function() {
  if (position < -1) {
    position *= BIRTHDAY;
  } else {
    clearInterval(antonioAnimate);
  }
  img.style.right = position + "px";
}

document.getElementsByTagName('html')[0].appendChild(img);
