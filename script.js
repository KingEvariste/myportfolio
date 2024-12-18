time = document.getElementById("time");
section = document.getElementById("sec")
const apiUrl = 'https://worldtimeapi.org/api/timezone/Asia/Manila'

getTime = ()=>{
  fetch(apiUrl)
  .then(response =>{
    if (!response.ok){
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    let x = data.datetime;
    time.textContent = x.slice(11,16);
  })
  .catch(error => {
    console.error('Error', error);
  })
}
getTime();

setInterval(
  getTime
,10000)

for(let i = 1; i <= 75; i++){
  let stars = document.createElement('div');
  stars.classList.add('star');
  let size = Math.random() * 20;
  stars.style.fontSize = 10 + size + 'px';
  stars.style.left = Math.random() * + innerWidth + 'px';
  stars.style.top = Math.random() * + innerHeight + 'px';
  stars.style.filter = `hue-rotate(${i*5}deg)`;
  section.appendChild(stars);
}
function animateStars(){
  let AllStars = document.querySelectorAll('.star');
  let num = Math.floor(Math.random()*AllStars.length);
  AllStars[num].classList.toggle('animate');
}

setInterval(animateStars,50);