const time = document.getElementById('today'),
  days = document.getElementById('days_to_summer'),
  hours = document.getElementById('hours_to_summer'),
  seconds = document.getElementById('seconds_to_summer'),
  summer20 = document.getElementById('summer'),
  photography = document.getElementById('photographer');

//Nayta kellon aika
function showTime() {
  let now = new Date();

  time.innerHTML = `<span class='aika_nyt'>${now}</span>`;

  setTimeout(showTime, 1000);
}

let summer = new Date('may 31, 2020 00:00:01');

function summer2020() {
  let currentTime = new Date();
  let timeLeft = summer - currentTime;
  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  summer20.innerHTML = `<span class='txt'>Kesäkuun alkuun</span> <span class='time'>${days}</span><span class='txt'> päivää</span> <span class='time'>${hours}</span> <span class='txt'>tuntia</span> <span class='time'>${minutes}</span> minuuttia ja</span> <span class='time'>${seconds}</span> <span class='txt'>sekunttia</span>`;

  setTimeout(summer2020, 1000);
}

function daysToSummer() {
  let currentTime = new Date();
  let timeLeft = summer - currentTime;

  let days_left = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  days.innerHTML = `<span class='txt'>Kesään on ${days_left} päivää</span>`;

  setTimeout(daysToSummer, 1000);
}

function hoursToSummer() {
  let currentTime = new Date();
  let timeLeft = summer - currentTime;

  let hours_left = Math.floor(timeLeft / (1000 * 60 * 60));

  hours.innerHTML = `<span class='txt'>Kesään on ${hours_left} tuntia</span>`;

  setTimeout(hoursToSummer, 1000);
}

function secondsToSummer() {
  let currentTime = new Date();
  let timeLeft = summer - currentTime;

  let seconds_left = Math.floor(timeLeft / 1000);

  seconds.innerHTML = `<span class='txt'>Kesään on ${seconds_left} sekunttia</span>`;

  setTimeout(secondsToSummer, 1000);
}

function background() {
  let currentTime = new Date();
  let month = currentTime.getMonth();

  //kevät
  if (month >= 2 && month <= 4) {
    document.body.style.background =
      '#000 url(spring.jpg) no-repeat center top';
    photography.innerHTML = 'Kuvaaja eberhard grossgasteiger palvelusta Pexels';

    //kesä
  } else if (month >= 5 && month <= 7) {
    document.body.style.background =
      '#000 url(summer.jpg) no-repeat center top';
    document.body.style.color = 'black';
    photography.innerHTML = 'Kuvaaja Ylanite Koppens palvelusta Pexels';

    //Syksy
  } else if (month >= 8 && month <= 10) {
    document.body.style.background = '#000 url(autum.jpg) center top';
    document.body.style.color = 'white';

    //Talvi
  } else {
    document.body.style.background =
      '#000 url(winter.jpg) no-repeat center top  ';
    document.body.style.color = 'white';
    photography.innerHTML = 'Kuvaaja Egor Kamelev palvelusta Pexels';
  }
}

showTime();
summer2020();
daysToSummer();
hoursToSummer();
secondsToSummer();
background();
