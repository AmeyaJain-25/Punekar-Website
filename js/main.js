getData()








jQuery(document).ready(function(){
    "use strict"
    $("header").ripples({
        dropRadius: 15,
        perturbance: 0.01,
    })

});





async function getData() {
    const response = await fetch("https://api.covid19india.org/v4/data.json");
    const data = await response.json();
    console.log(data);


    const coronaTime = document.querySelector('.corona-time');
    coronaTime.innerHTML = "Last Updated: " + data.MH.meta.last_updated

    const conf = document.querySelector('.confirmedCases');
    conf.innerHTML = data.MH.districts.Pune.total.confirmed;
    let act = document.querySelector('.activeCases');
    let actCases = data.MH.districts.Pune.total.confirmed - data.MH.districts.Pune.total.recovered - data.MH.districts.Pune.total.deceased;
    act.innerHTML = actCases;
    let rec = document.querySelector('.recoveredCases');
    rec.innerHTML = data.MH.districts.Pune.total.recovered;
    let dth = document.querySelector('.deathCases');
    dth.innerHTML = data.MH.districts.Pune.total.deceased;


}


