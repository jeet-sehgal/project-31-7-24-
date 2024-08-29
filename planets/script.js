function navMethod(){
    if (document.querySelector("ul").style.top=="")
    document.querySelector("ul").style.top="0lvh"
else{
    document.querySelector("ul").style.top=""
}
}
data={
    name:["MERCURY","VENUS","EARTH","MARS","JUPITER","SATURN","URANUS","NEPTUNE"],
    color:["#def4fc","#e2bb74","#4dcae9","#ea613f","#d99f70","#e8bb62","#5dddc4","#4373e5"],
    sizeImg:["120px","140px","150px","130px","170px","170px","150px","150px"],
    overview:[
        "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
    "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
    "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
    "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'.",
    'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.',
    "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
    "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
    "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus."
    ],
    footer1:["58.6 Days","243 Days","0.99 Days","1.03 Days","9.93 Hours","10.8 Hours","17.2 Hours","16.08 Hours"],
    footer2:["87.97 Days","224.7 Days","365.26 Days","1.88 Years","11.86 Years","29.46 Years","84 Years","164.79 Years"],
    footer3:["2,439.7 KM","6,051.8 KM","6,371 KM","3,389.5 KM","69,911 KM","58,232 KM","25,362 KM","24,622 KM"],
    footer4:["430°c","471°c","16°c","-28°c",'-108°c',"-138°c","-195°c","-201°c"],
    img1:["images/planet-mercury.svg","images/planet-venus.svg","images/planet-earth.svg","images/planet-mars.svg","images/planet-jupiter.svg","images/planet-saturn.svg","images/planet-uranus.svg","images/planet-neptune.svg"],
    img2:["images/planet-mercury-internal.svg","images/planet-venus-internal.svg",'images/planet-earth-internal.svg',"images/planet-mars-internal.svg","images/planet-jupiter-internal.svg","images/planet-saturn-internal.svg","images/planet-uranus-internal.svg",'images/planet-neptune-internal.svg'],
    img3:["images/geology-mercury.png","images/geology-venus.png","images/geology-earth.png","images/geology-mars.png","images/geology-jupiter.png","images/geology-saturn.png","images/geology-uranus.png","images/geology-neptune.png"],
    internal:[
        "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
        "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
        "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
        "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
        "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
        "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
        "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
        "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions."
    ],
    surface:[
        "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
        "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
        "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
        "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",
        "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
        "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.",
        "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
        "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum."
    ]
}
window.addEventListener("load",()=>{
    if(!localStorage.getItem("planetSel")){
        localStorage.setItem("planetSel",2);

    }
    document.querySelector(".infoOptions ul li").classList.add("infoLink")
    fixed(localStorage.getItem("planetSel"));
    change(localStorage.getItem("planetSel"));
})
function fixed(planet){
    document.querySelector("#name").innerHTML=data.name[planet];
    document.querySelector("#value1").innerHTML=data.footer1[planet];
    document.querySelector("#value2").innerHTML=data.footer2[planet];
    document.querySelector("#value3").innerHTML=data.footer3[planet];
    document.querySelector("#value4").innerHTML=data.footer4[planet];
    document.querySelector(".infoLink").style.setProperty("--color",data.color[planet])
    document.querySelector(".infoLink").style.setProperty("--width","100%")

}
function change(planet){
    document.querySelector(".content .img").style.setProperty("--src","")
    select=document.querySelector(".infoLink").getAttribute("data-key");
    if(select==1){
        document.querySelector("#contentImg").setAttribute("src",data.img1[planet]);
        document.querySelector("#contentImg").setAttribute("height",data.sizeImg[planet]);
        document.querySelector("#para").innerHTML=data.overview[planet];

    }
    else if(select==2){
        document.querySelector("#para").innerHTML=data.internal[planet];
        document.querySelector("#contentImg").setAttribute("src",data.img2[planet]);
        document.querySelector("#contentImg").setAttribute("height",data.sizeImg[planet]);

    }
    else{
        document.querySelector("#para").innerHTML=data.surface[planet];
        document.querySelector("#contentImg").setAttribute("src",data.img1[planet]);
        document.querySelector("#contentImg").setAttribute("height",data.sizeImg[planet]);


        // document.querySelector("#contentImg").classList.add("surface");
        document.querySelector(".content .img").style.setProperty("--src",`url(${data.img3[planet]})`);
    }
}
infoOption=document.querySelectorAll(".infoOptions ul li");
infoOption.forEach(ele=>{
    ele.addEventListener("click",()=>{
        
        if(!ele.getAttribute("class")){
            document.querySelector(".infoLink").classList.remove("infoLink");
            ele.classList.add("infoLink")
            document.querySelector(".infoLink").style.setProperty("--width","100%");
            document.querySelector(".infoLink").style.setProperty("--color",data.color[localStorage.getItem("planetSel")])
            change(localStorage.getItem("planetSel"))
            
        }
    })
})
let last;
solarSystem=document.querySelectorAll("nav li");
solarSystem.forEach(ele=>{
    
    ele.addEventListener("click",()=>{
        navMethod();
        if(last)
            last.style.setProperty("--line","0px")
        localStorage.setItem("planetSel",ele.getAttribute("data-key"));
        fixed(ele.getAttribute("data-key"));
        change(ele.getAttribute("data-key"));
        ele.style.setProperty("--line","40px");
        last=ele;
        
        // if(document.querySelector("nav ul").style.getPropertyValue("position")=="static")
    })
})