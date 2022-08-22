const cityName = document.getElementById('cityName');
const submitbtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');

const getInfo = async (event) => {
    event.preventDefault();
    let cityValue = cityName.value;
    if (cityValue == "") {
        city_name.innerText = `Please write the name before search`;
        datahide.classList.add('data-hide');

    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=ed500dadd46e0ba2355614128eea034a`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerHTML = `${arrData[0].name}, ${arrData[0].sys.country} `;
            temp_real_val.innerText = arrData[0].main.temp;
            // temp_status.innerText = arrData[0].weather[0].main;

            const tempStatus = arrData[0].weather[0].main;
            if (tempStatus == "Sunny") {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }
            else if (tempStatus == "Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #dfe4ea;'></i>";
            }
            else if (tempStatus == "Rainy") {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }
            // console.log(response);

            datahide.classList.remove('data-hide');
        } catch {
            city_name.innerText = `Please enter the name properly`;
            datahide.classList.add('data-hide');
        }

    }
}

submitBtn.addEventListener('click', getInfo);



// Js code for dynamic time

const getCurrentDay = () =>{
    var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let currentTime = new Date();
    let days =  weekday[currentTime.getDay()];
    let day = document.getElementById('day');
    day.innerText = days;
    
	};

    getCurrentDay();


    const getCurrentTime = ()=>{
        const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
         var now = new Date();
         var month  = months[now.getMonth()];
         let today_date = document.getElementById('today_date');
         today_date.innerText = month;
         var date  = now.getDate();
    };
         getCurrentTime();