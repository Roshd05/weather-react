import React from "react";
import axios from "axios";
import { SpinnerDiamond } from 'spinners-react';




export default function Weather(props) {
    function handleresponse(response) {
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}˚C`);
  }
    let apiKey ="b40b135798f82a05aed08769f9275f50"
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleresponse);
    
    return (
      <SpinnerDiamond
        size={67}
        thickness={149}
        speed={100}
        color="rgba(57, 98, 172, 0.75)"
        secondaryColor="rgba(77, 172, 57, 0.44)"
      />
    );
}