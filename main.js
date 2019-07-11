var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/lakers-logo.png') {
      myImage.setAttribute ('src','images/kobe-bryant.png');
    } else {
      myImage.setAttribute ('src','images/lakers-logo.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUserName() {
    var myName = prompt('Please enter your name: ');
    localStorage.setItem('name', myName);
    if(myName=== ''){
        myName='Loser';
    }
    myHeading.textContent = 'Lakers is the best team in LA, ' + myName + '!';
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Lakers is the best team in LA, ' + storedName + '!';
  }
  myButton.onclick = function() {
    setUserName();
  }
    