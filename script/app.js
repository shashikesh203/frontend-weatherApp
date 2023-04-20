const cityName = document.getElementById('city');
const temperature = document.getElementById('temp');
const date =  document.getElementById('date');
const inputCity =  document.getElementById('input-city');
const  submit =  document.getElementById('submit-button');

submit.addEventListener('click',function(){
    fetch(`http://localhost:8000/`)
      .then(response => response.json())
      .then(json => {
         temperature.innerHTML = json.temp;
         cityName.innerHTML = json.cityName;
         
      });
});