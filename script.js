//import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

// load the data
// const request = new Request("./world_data.json");
// const response = await fetch(request);
// const worldData = await response.json();

//console.log(worldData);


var obj =
   [ {
      "id": "001",
      "name": "Brazil",
      "birth_rate_per_1000": 16.405,
      "cell_phones_per_100": 90.01936334,
      "children_per_woman": 1.862,
      "electricity_consumption_per_capita": 2201.808724,
      "gdp_per_capita": 4424.758692,
      "gdp_per_capita_growth": -1.520402823,
      "inflation_annual": 8.228535058,
      "internet_user_per_100": 39.22,
      "life_expectancy": 74,
      "military_expenditure_percent_of_gdp": 1.615173655,
      "gps_lat": -14.235004,
      "gps_long": -51.92528
    },
    {
      "id": "002",
      "name": "Canada",
      "birth_rate_per_1000": 10.625,
      "cell_phones_per_100": 70.70997244,
      "children_per_woman": 1.668,
      "electricity_consumption_per_capita": 15119.76414,
      "gdp_per_capita": 25069.86915,
      "gdp_per_capita_growth": -3.953353186,
      "inflation_annual": 2.944408564,
      "internet_user_per_100": 80.17086651,
      "life_expectancy": 80.9,
      "military_expenditure_percent_of_gdp": 1.415710422,
      "gps_lat": 56.130366,
      "gps_long": -106.346771
    },
    {
      "id": "003",
      "name": "Chile",
      "birth_rate_per_1000": 15.04,
      "cell_phones_per_100": 97.01862561,
      "children_per_woman": 1.873,
      "electricity_consumption_per_capita": 3276.06449,
      "gdp_per_capita": 6451.631126,
      "gdp_per_capita_growth": -2.610485847,
      "inflation_annual": 7.47050527,
      "internet_user_per_100": 38.8,
      "life_expectancy": 78.8,
      "military_expenditure_percent_of_gdp": 3.064076139,
      "gps_lat": -29.7566802,
      "gps_long": -72.708859
    },
    {
      "id": "004",
      "name": "China",
      "birth_rate_per_1000": 13.536,
      "cell_phones_per_100": 55.97490921,
      "children_per_woman": 1.642,
      "electricity_consumption_per_capita": 2632.724637,
      "gdp_per_capita": 2208.403948,
      "gdp_per_capita_growth": 8.648414427,
      "inflation_annual": 6.684109668,
      "internet_user_per_100": 28.97659939,
      "life_expectancy": 75.6,
      "military_expenditure_percent_of_gdp": 2.24110794,
      "gps_lat": 35.86166,
      "gps_long": 104.195397
    },
    {
      "id": "005",
      "name": "Colombia",
      "birth_rate_per_1000": 20.605,
      "cell_phones_per_100": 92.34584564,
      "children_per_woman": 2.405,
      "electricity_consumption_per_capita": 1041.994137,
      "gdp_per_capita": 3137.695335,
      "gdp_per_capita_growth": 0.2081538559,
      "inflation_annual": 3.666941163,
      "internet_user_per_100": 30,
      "life_expectancy": 75.3,
      "military_expenditure_percent_of_gdp": 3.833780372,
      "gps_lat": 4.570868,
      "gps_long": -74.297333
    },
    {
      "id": "006",
      "name": "Ecuador",
      "birth_rate_per_1000": 20.989,
      "cell_phones_per_100": 92.84925653,
      "children_per_woman": 2.69,
      "electricity_consumption_per_capita": 1078.038961,
      "gdp_per_capita": 1692.067197,
      "gdp_per_capita_growth": -1.079538461,
      "inflation_annual": 7.595866872,
      "internet_user_per_100": 24.6,
      "life_expectancy": 74.1,
      "military_expenditure_percent_of_gdp": 3.746501879,
      "gps_lat": -1.831239,
      "gps_long": -78.183406
    },
    {
      "id": "007",
      "name": "Egypt",
      "birth_rate_per_1000": 24.83,
      "cell_phones_per_100": 69.43661504,
      "children_per_woman": 2.919,
      "electricity_consumption_per_capita": 1607.918763,
      "gdp_per_capita": 1911.964501,
      "gdp_per_capita_growth": 2.856917581,
      "inflation_annual": 10.10750976,
      "internet_user_per_100": 24.28,
      "life_expectancy": 70.2,
      "military_expenditure_percent_of_gdp": 2.137305699,
      "gps_lat": 26.820553,
      "gps_long": 30.802498
    },
    {
      "id": "008",
      "name": "Finland",
      "birth_rate_per_1000": 11.127,
      "cell_phones_per_100": 144.1530224,
      "children_per_woman": 1.86,
      "electricity_consumption_per_capita": 15241.61194,
      "gdp_per_capita": 26205.68832,
      "gdp_per_capita_growth": -8.791558776,
      "inflation_annual": 0.4277308694,
      "internet_user_per_100": 82.53133098,
      "life_expectancy": 79.7,
      "military_expenditure_percent_of_gdp": 1.501872268,
      "gps_lat": 61.92411,
      "gps_long": 25.748151
    },
    {
      "id": "009",
      "name": "France",
      "birth_rate_per_1000": 12.21,
      "cell_phones_per_100": 95.44434226,
      "children_per_woman": 1.978,
      "electricity_consumption_per_capita": 7339.946832,
      "gdp_per_capita": 22508.76261,
      "gdp_per_capita_growth": -3.264056248,
      "inflation_annual": 1.050366124,
      "internet_user_per_100": 69.0633593,
      "life_expectancy": 81,
      "military_expenditure_percent_of_gdp": 2.55313249,
      "gps_lat": 46.227638,
      "gps_long": 2.213749
    },
    {
      "id": "010",
      "name": "Germany",
      "birth_rate_per_1000": 8.136,
      "cell_phones_per_100": 127.4188883,
      "children_per_woman": 1.376,
      "electricity_consumption_per_capita": 6753.05764,
      "gdp_per_capita": 24368.19561,
      "gdp_per_capita_growth": -4.886323581,
      "inflation_annual": 0.5959234322,
      "internet_user_per_100": 79.48523153,
      "life_expectancy": 80,
      "military_expenditure_percent_of_gdp": 1.438871341,
      "gps_lat": 51.165691,
      "gps_long": 10.451526
    },
    {
      "id": "011",
      "name": "Iceland",
      "birth_rate_per_1000": 14.738,
      "cell_phones_per_100": 107.6604456,
      "children_per_woman": 2.123,
      "electricity_consumption_per_capita": 51259.18763,
      "gdp_per_capita": 35310.97441,
      "gdp_per_capita_growth": -6.990418561,
      "inflation_annual": 6.900703626,
      "internet_user_per_100": 92.13686385,
      "life_expectancy": 82.2,
      "military_expenditure_percent_of_gdp": 0.0820538039,
      "gps_lat": 64.963051,
      "gps_long": -19.020835
    },
    {
      "id": "012",
      "name": "Iraq",
      "birth_rate_per_1000": 31.585,
      "cell_phones_per_100": 65.47478839,
      "children_per_woman": 4.276,
      "electricity_consumption_per_capita": 1086.323768,
      "gdp_per_capita": 752.1833548,
      "gdp_per_capita_growth": 1.141874289,
      "inflation_annual": 25.22442136,
      "internet_user_per_100": 1.047516616,
      "life_expectancy": 68.1,
      "military_expenditure_percent_of_gdp": 4.621383386,
      "gps_lat": 33.223191,
      "gps_long": 43.679291
    },
    {
      "id": "013",
      "name": "Japan",
      "birth_rate_per_1000": 8.201,
      "cell_phones_per_100": 91.8955442,
      "children_per_woman": 1.359,
      "electricity_consumption_per_capita": 7838.005685,
      "gdp_per_capita": 38242.02429,
      "gdp_per_capita_growth": -6.180260885,
      "inflation_annual": -2.08543109,
      "internet_user_per_100": 77.38468963,
      "life_expectancy": 82.8,
      "military_expenditure_percent_of_gdp": 1.019445017,
      "gps_lat": 36.204824,
      "gps_long": 138.252924
    },
    {
      "id": "014",
      "name": "Kazakhstan",
      "birth_rate_per_1000": 19.775,
      "cell_phones_per_100": 107.7147692,
      "children_per_woman": 2.537,
      "electricity_consumption_per_capita": 4447.142293,
      "gdp_per_capita": 2345.86415,
      "gdp_per_capita_growth": -1.437812068,
      "inflation_annual": 19.5422854,
      "internet_user_per_100": 17.91457965,
      "life_expectancy": 66.6,
      "military_expenditure_percent_of_gdp": 1.105385125,
      "gps_lat": 48.019573,
      "gps_long": 66.923684
    },
    {
      "id": "015",
      "name": "Mexico",
      "birth_rate_per_1000": 19.091,
      "cell_phones_per_100": 74.25785259,
      "children_per_woman": 2.313,
      "electricity_consumption_per_capita": 1869.82352,
      "gdp_per_capita": 5875.619997,
      "gdp_per_capita_growth": -7.417438847,
      "inflation_annual": 4.033645258,
      "internet_user_per_100": 26.34,
      "life_expectancy": 75.5,
      "military_expenditure_percent_of_gdp": 0.5396656609,
      "gps_lat": 23.634501,
      "gps_long": -102.552784
    },
    {
      "id": "016",
      "name": "New Zealand",
      "birth_rate_per_1000": 13.831,
      "cell_phones_per_100": 108.7301521,
      "children_per_woman": 2.125,
      "electricity_consumption_per_capita": 9375.550304,
      "gdp_per_capita": 14778.16393,
      "gdp_per_capita_growth": -1.552308788,
      "inflation_annual": 3.486782259,
      "internet_user_per_100": 79.82609287,
      "life_expectancy": 80.3,
      "military_expenditure_percent_of_gdp": 1.140562366,
      "gps_lat": -40.900557,
      "gps_long": 174.885971
    },
    {
      "id": "017",
      "name": "Nigeria",
      "birth_rate_per_1000": 40.134,
      "cell_phones_per_100": 48.23561006,
      "children_per_woman": 6.021,
      "electricity_consumption_per_capita": 119.8151486,
      "gdp_per_capita": 513.5003377,
      "gdp_per_capita_growth": 4.3526073,
      "inflation_annual": 9.313146383,
      "internet_user_per_100": 20,
      "life_expectancy": 58.5,
      "military_expenditure_percent_of_gdp": 0.8924302789,
      "gps_lat": 9.081999,
      "gps_long": 8.675277
    },
    {
      "id": "018",
      "name": "Peru",
      "birth_rate_per_1000": 21.342,
      "cell_phones_per_100": 85.86901405,
      "children_per_woman": 2.545,
      "electricity_consumption_per_capita": 1043.052601,
      "gdp_per_capita": 2955.186222,
      "gdp_per_capita_growth": -0.2228977721,
      "inflation_annual": 4.49134447,
      "internet_user_per_100": 31.4,
      "life_expectancy": 76.7,
      "military_expenditure_percent_of_gdp": 1.348875763,
      "gps_lat": -9.189967,
      "gps_long": -75.015152
    },
    {
      "id": "019",
      "name": "Russia",
      "birth_rate_per_1000": 10.828,
      "cell_phones_per_100": 161.1162887,
      "children_per_woman": 1.537,
      "electricity_consumption_per_capita": 6132.978648,
      "gdp_per_capita": 2806.41483,
      "gdp_per_capita_growth": -7.749103694,
      "inflation_annual": 11.60398093,
      "internet_user_per_100": 29.23584146,
      "life_expectancy": 68.3,
      "military_expenditure_percent_of_gdp": 4.36259042,
      "gps_lat": 61.52401,
      "gps_long": 105.318756
    },
    {
      "id": "020",
      "name": "Saudi Arabia",
      "birth_rate_per_1000": 23.569,
      "cell_phones_per_100": 167.3474553,
      "children_per_woman": 2.898,
      "electricity_consumption_per_capita": 7430.743897,
      "gdp_per_capita": 9294.355996,
      "gdp_per_capita_growth": -2.242127204,
      "inflation_annual": 14.36222827,
      "internet_user_per_100": 38,
      "life_expectancy": 77.6,
      "military_expenditure_percent_of_gdp": 10.95653405,
      "gps_lat": 23.885942,
      "gps_long": 45.079162
    },
    {
      "id": "021",
      "name": "South Africa",
      "birth_rate_per_1000": 22.113,
      "cell_phones_per_100": 93.33587369,
      "children_per_woman": 2.5,
      "electricity_consumption_per_capita": 4532.021902,
      "gdp_per_capita": 3697.67368,
      "gdp_per_capita_growth": -2.732989408,
      "inflation_annual": 7.861608575,
      "internet_user_per_100": 10.08745979,
      "life_expectancy": 55.8,
      "military_expenditure_percent_of_gdp": 1.394530379,
      "gps_lat": -30.559482,
      "gps_long": 22.937506
    },
    {
      "id": "022",
      "name": "Sweden",
      "birth_rate_per_1000": 11.72,
      "cell_phones_per_100": 112.1241184,
      "children_per_woman": 1.937,
      "electricity_consumption_per_capita": 14143.01101,
      "gdp_per_capita": 30885.45914,
      "gdp_per_capita_growth": -5.976535294,
      "inflation_annual": 1.022227082,
      "internet_user_per_100": 91.12326108,
      "life_expectancy": 81.2,
      "military_expenditure_percent_of_gdp": 1.247701873,
      "gps_lat": 60.128161,
      "gps_long": 18.643501
    },
    {
      "id": "023",
      "name": "United Arab Emirates",
      "birth_rate_per_1000": 14.027,
      "cell_phones_per_100": 153.7997194,
      "children_per_woman": 1.903,
      "electricity_consumption_per_capita": 9998.291079,
      "gdp_per_capita": 22507.00157,
      "gdp_per_capita_growth": -11.99171952,
      "inflation_annual": 8.549032358,
      "internet_user_per_100": 64,
      "life_expectancy": 76.1,
      "military_expenditure_percent_of_gdp": 5.834881976,
      "gps_lat": 23.424076,
      "gps_long": 53.847818
    },
    {
      "id": "024",
      "name": "United Kingdom",
      "birth_rate_per_1000": 12.195,
      "cell_phones_per_100": 130.1742603,
      "children_per_woman": 1.89,
      "electricity_consumption_per_capita": 5685.635995,
      "gdp_per_capita": 27933.77767,
      "gdp_per_capita_growth": -5.019251823,
      "inflation_annual": 2.861406642,
      "internet_user_per_100": 77.79971962,
      "life_expectancy": 79.7,
      "military_expenditure_percent_of_gdp": 2.667209048,
      "gps_lat": 52.3555177,
      "gps_long": -1.1743197
    },
    {
      "id": "025",
      "name": "United States",
      "birth_rate_per_1000": 14.191,
      "cell_phones_per_100": 89.14911634,
      "children_per_woman": 2.002,
      "electricity_consumption_per_capita": 12913.71143,
      "gdp_per_capita": 36539.22823,
      "gdp_per_capita_growth": -4.342271218,
      "inflation_annual": 1.152326348,
      "internet_user_per_100": 71.21181627,
      "life_expectancy": 78.3,
      "military_expenditure_percent_of_gdp": 4.822730027,
      "gps_lat": 37.09024,
      "gps_long": -95.712891
    }];


    var map = L.map('map').setView([51.505, -0.09], 2);
    let mapstats = new Map()
    let width= 700
    let height= 200
    let leftMargin= 20
    let rightMargin=15
    let bottomMargin= 100
    let topMargin= 15
    var text1 = document.getElementById("prop_selection1").options[document.getElementById("prop_selection1").selectedIndex].text;
    var text2 = document.getElementById("prop_selection2").options[document.getElementById("prop_selection2").selectedIndex].text;

    function get(select, chart){
        if (chart == 1){



        text1 = select.options[select.selectedIndex].text;
        }else{
        text2 = select.options[select.selectedIndex].text;
        }



    }


    function UpdateChart(chart){
        if (chart == 1){
        
        d3.select('#bar1').selectAll("svg").remove()
        
        drawChart(1)
        drawMap() 
      
        
    }else{
        d3.select('#bar2').selectAll("svg").remove()
        drawChart(2)}
    }


    console.log(text1);

    function drawChart(chart){

    if (chart==1){
       let svg = d3.select('#bar1').append('svg')

          .attr("width", width + leftMargin + rightMargin)
          .attr("height", height + topMargin + bottomMargin)
          .append("g")
          .attr("transform", `translate(`+ leftMargin + `,`+  topMargin +`)`)
       // X scale and axis


        let xscale1 = d3.scaleBand()
          .domain(Object.values(obj.map(d => d.name)))
          .range([0, width]);

        let x_axis1 = d3.axisBottom(xscale1)

       svg.append("g")
      .attr("transform", `translate(${leftMargin},   ${topMargin+height})`)
      .call(x_axis1)
      .call(g => g.selectAll(".tick text")
        .attr("font-family", "sans-serif")
        .attr("font-size", 12)
        .attr("x", 10)
        .attr("transform", `rotate(90)`))
        .attr("text-anchor", "start")
        .attr("text-align", "middle");



        let yscale1 = d3.scaleLinear()
        .domain([0, Math.max(...Object.values(obj.map(d => d[text1])))])
        .range([height, 0])



       let y_axis1 = d3.axisLeft(yscale1)

       svg.append("g")
      .attr("transform", `translate(${leftMargin}, ${topMargin})`)
      .call(y_axis1);


       Object.values(obj.map(d => d[text1] )).forEach( (element, index) => {
          mapstats.set(obj[index].name, element)
          let g = svg.append("g")
          let barWidth = 10;
          let x = (index * (width/ (Object.values(obj.map(d => d[text1])).length)) +  (width/ (Object.values(obj.map(d => d[text1])).length))/2 - barWidth/2)

       
       g.append("rect")
          .attr("x", x)
          .attr("y", ( yscale1(element)))
          .attr("height",  height- yscale1(element))
          .attr("width", barWidth)
          .attr("fill",  "#88aaee")
          .attr("transform", `translate(${leftMargin}, ${topMargin})`)
          .attr("align", "middle")
          
          

      //  g.append("text")
      //     .attr("x", x )
      //     .attr("y", (yscale1(element)))
      //     .text(element)
      //     .attr("transform", `translate(${leftMargin}, ${topMargin})`)
      //     .attr("font-size", 12)
      //     .attr("text-anchor", "middle")


      })

}else{

        let svg2 = d3.select('#bar2').append('svg')

           .attr("width", width + leftMargin + rightMargin)
           .attr("height", height + topMargin + bottomMargin)
           .append("g")
           .attr("transform", `translate(`+ leftMargin + `,`+  topMargin +`)`)
        // X scale and axis

        let xscale2 = d3.scaleBand()
        .domain(Object.values(obj.map(d => d.name)))
        .range([0, width]);


        let x_axis2 = d3.axisBottom(xscale2)

        svg2.append("g")
       .attr("transform", `translate(${leftMargin},   ${topMargin+height})`)
       .call(x_axis2)
       .call(g => g.selectAll(".tick text")
         .attr("font-family", "sans-serif")
         .attr("font-size", 12)
         .attr("x", 10)
         .attr("transform", `rotate(90)`))
         .attr("text-anchor", "start")
         //.attr("text-align", "right");




        let yscale2 = d3.scaleLinear()
           .domain([0, Math.max(...Object.values(obj.map(d => d[text2])))])
           .range([height, 0])

        let y_axis2 = d3.axisLeft(yscale2)

        svg2.append("g")
       .attr("transform", `translate(${leftMargin}, ${topMargin})`)
       .call(y_axis2);


        Object.values(obj.map(d =>d[text2] )).forEach( (element, index) => {
           let g = svg2.append("g")
           let barWidth = 10;
           let x = (index * (width/ Object.values(obj.map(d => d[text2])).length) +  (width/ Object.values(obj.map(d => d[text2])).length)/2 - barWidth/2)

        g.append("rect")
           .attr("x", x)
           .attr("y", ( yscale2(element)))
           .attr("height",  height - yscale2(element))
           .attr("width", barWidth)
           .attr("fill",  "#88aaee")
           .attr("transform", `translate(${leftMargin}, ${topMargin})`)
           .attr("align", "start")

        //  g.append("text")
        //     .attr("x", x )
        //     .attr("y", (yscale2(element)))
        //     .text(element)
        //     .attr("transform", `translate(${leftMargin}, ${topMargin})`)
        //     .attr("font-size", 12)
        //     .attr("text-anchor", "middle")


       })
    }}
     
   
    function drawMap(){
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 13,
    }).addTo(map);


    L.marker([51.5, -0.09]).addTo(map)
      .bindPopup(text1 + '<br>from: United Kingdom <br>' + mapstats.get('United Kingdom'))
      .openPopup();
   
    L.marker([52.31, 13,24]).addTo(map)

        .bindPopup(text1 + '<br> from: Germany <br>' + mapstats.get('Germany'))
        .openPopup();
    L.marker([-15.2, -51.31]).addTo(map)
        .bindPopup(text1 + '<br>from: Brasil<br>' + mapstats.get('Brasil'))
        .openPopup();
    L.marker([45.25, -71.8]).addTo(map)
        .bindPopup(text1 + '<br>from: Canada<br>' + mapstats.get('Canada'))
        .openPopup();
    L.marker([28.35, 145.03]).addTo(map)
        .bindPopup(text1 + '<br>from: Japan<br>' + mapstats.get('Japan'))
        .openPopup();
    L.marker([38.89, -77.01]).addTo(map)
        .bindPopup(text1 + '<br>from: United States<br>' + mapstats.get('United States'))
        .openPopup();
    L.marker([55.58, 37.39]).addTo(map)
        .bindPopup(text1 + '<br>from: Russia<br>' + mapstats.get('Russia'))
        .openPopup();
    L.marker([-33.45, -70.66]).addTo(map)
        .bindPopup(text1 + '<br>from: Chile<br>' + mapstats.get('Chile'))
        .openPopup();
    L.marker([40.12, 116.58]).addTo(map)
        .bindPopup(text1 + '<br>from: China<br>' + mapstats.get('China'))
        .openPopup();
    L.marker([4.28, -74.22]).addTo(map)
        .bindPopup(text1 + '<br>from: Columbia<br>' + mapstats.get('Columbia'))
        .openPopup();  
    L.marker([0.22, -78.51]).addTo(map)
        .bindPopup(text1 + '<br>from: Ecuador<br>' + mapstats.get('Ecuador'))
        .openPopup();   
    L.marker([30.04, 31.56]).addTo(map)
        .bindPopup(text1 + '<br>from: Egypt<br>' + mapstats.get('Egypt'))
        .openPopup(); 
    L.marker([60.11, 25.02]).addTo(map)
        .bindPopup(text1 + '<br>from: Finland<br>' + mapstats.get('Finland'))
        .openPopup(); 
    L.marker([48.86, 2.35]).addTo(map)
        .bindPopup(text1 + '<br>from: France<br>' + mapstats.get('France'))
        .openPopup();
    L.marker([64.18, -21.69]).addTo(map)
        .bindPopup(text1 + '<br>from: Iceland<br>' + mapstats.get('Iceland'))
        .openPopup();
    L.marker([33.33, 44.38]).addTo(map)
        .bindPopup(text1 + '<br>from: Iraq<br>' + mapstats.get('Iraq'))
        .openPopup();
    L.marker([51.11, 71.5]).addTo(map)
        .bindPopup(text1 + '<br>from: Kazakhstan<br>' + mapstats.get('Kazakhstan'))
        .openPopup();
    L.marker([19.32, -99.15]).addTo(map)
        .bindPopup(text1 + '<br>from: Mexico<br>' + mapstats.get('Mexico'))
        .openPopup();
    L.marker([-41.29, 174.78]).addTo(map)
        .bindPopup(text1  + '<br>from: New Zealand<br>' + mapstats.get('New Zealand'))
        .openPopup();
    L.marker([9.06, 7.49]).addTo(map)
        .bindPopup(text1 + '<br>from: Nigeria<br>' + mapstats.get('Nigeria'))
        .openPopup();
    L.marker([-12.05, -76.91]).addTo(map)
        .bindPopup(text1 + '<br>from: Peru<br>' + mapstats.get('Peru'))
        .openPopup();
    L.marker([23.52, 44.97]).addTo(map)
        .bindPopup(text1 + '<br>from: Saudi Arabia<br>' + mapstats.get('Saudi Arabia'))
        .openPopup();
    L.marker([-25.75, 28.19]).addTo(map)
        .bindPopup(text1 + '<br>from: South Africa<br>' + mapstats.get('South Africa'))
        .openPopup();
    L.marker([59.33, 18.06]).addTo(map)
.bindPopup(text1 + "<br>from: Sweden<br>" + mapstats.get('Sweden'))
        .openPopup();
    L.marker([24.44, 54.53]).addTo(map)
        .bindPopup(text1 + '<br>from: United Arab Emirates<br>' + mapstats.get('United Arab Emirates'))
        .openPopup()
        
        
    }

    drawChart(1)

    drawChart(2)

    drawMap()

    
    

    