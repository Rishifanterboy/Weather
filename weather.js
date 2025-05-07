const temp = document.querySelector(".temp p");
const city = document.querySelector(".city p");
const date_time = document.querySelector(".date_time p");
const condition = document.querySelector(".condition p");
const searchBar = document.querySelector(".search_bar");
const form = document.querySelector(".input");

//const butt = document.querySelector("search_button");

form.addEventListener("submit", search);

let target = "";

const weather = async (targetPlace) => {
  let url = `http://api.weatherapi.com/v1/current.json?key=ADD_YOUR_API_KEY_HERE&q=${targetPlace}&aqi=no`;
  const response = await fetch(url);
  let data = await response.json();
  console.log(data);

  let locationName = data.location.name;
  let temperature = data.current.temp_c;
  let dateTime = data.location.localtime;
  let conditio = data.current.condition.text;
  let icon = data.current.condition.icon;

  updating(temperature, locationName, dateTime, conditio);
};

function updating(x, y, z, xy) {
  let spiltDate = z.split(" ")[0];
  let spiltTime = z.split(" ")[1];
  let currentDay = day(new Date(spiltDate).getDay());

  temp.innerText = x + " c";
  city.innerText = y;
  date_time.innerText = `${spiltDate}  ${", "} ${currentDay} ${", "}  ${spiltTime}`;
  condition.innerText = xy;
}

function search(e) {
  e.preventDefault();
  target = searchBar.value;
  weather(target);
}

function day(num) {
  switch (num) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thrusday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
  }
}
