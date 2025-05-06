console.log('JS conected');

// Implementa tu solución

// 1. recupera el elemento html con la clase 'snail' y asignale una variable.
let elementoSnail = document.querySelector("div.snail");
// 2. Necesitarás una variable para almacenar la posición actual del caracol. La posición inicial es 550px en el eje y.
let actualPosition = 550;
console.log(actualPosition);
// 3. Recupera el elemento html con id 'btn-submitDay' y asignale una variable.
let accionDia = document.getElementById("btn-submitDay");
let accionNoche = document.getElementById("btn-submitNight");
let daysContador = 0;
let metrosRunners = 0;
let position = 0;
let getOutBoolean = "No";
let daysCount = document.getElementById("daysCount");
let meters = document.getElementById("meters");
let getOut = document.getElementById("result");
let reset = document.getElementById("reset");
// 4. Asigna al botón el evento de 'click' que llamará a una función.
accionDia.addEventListener("click", SubirPozo);
accionNoche.addEventListener("click", BajarPozo);
reset.addEventListener("click", ReloadPage);

getOut.textContent = "Ha salido del pozo? " +getOutBoolean;

accionNoche.disabled = true;
reset.style.display = 'none';

let bodyElement = document.querySelector("body");


    

// 5. Crea la función llamada 'PassDay', por ejemplo, y consigue que el caracol escale 270px.
function SubirPozo(){
    daysContador++;
    metrosRunners +=3;
    position += -270;
    elementoSnail.style.marginTop = position+"px";
    actualPosition += position;
    console.log("ejecuto la funcion subirPozo", actualPosition);
    daysCount.textContent = "Han pasado "+daysContador+" dias";
    meters.textContent = metrosRunners + " Metros recorridos";
    
    
    if(metrosRunners>=5){
        getOutPozo();       
        
    } else{
        getOutBoolean = "No";
        getOut.textContent = "Ha salido del pozo? " +getOutBoolean;
        accionNoche.disabled = false;
        accionDia.disabled = true;
        
    }
    bodyElement.style.backgroundImage = 'url(https://viajes.nationalgeographic.com.es/medio/2020/04/01/6-via-lactea_57769b72_1254x836.jpg)';
    

}

function BajarPozo(){
    daysContador--;
    metrosRunners -=2;
    position += 180;
    elementoSnail.style.marginTop = position+"px";
    actualPosition += position;
    console.log("ejecuto la funcion BajarPozo", actualPosition);
    daysCount.textContent = "Han pasado "+daysContador+" dias";
    meters.textContent = metrosRunners + " Metros recorridos";
    if(metrosRunners>=5){
        elementoSnail.style.transform = "rotate(0deg)";
        elementoSnail.style.marginLeft="-50px";
        elementoSnail.style.marginTop="-480px";
        getOutBoolean = "Si";
        getOut.textContent = "Ha salido del pozo? " +getOutBoolean;
    } else{
        getOutBoolean = "No";
        getOut.textContent = "Ha salido del pozo? " +getOutBoolean;
    }
    accionNoche.disabled = true;
    accionDia.disabled = false;
    bodyElement.style.backgroundImage = 'url(https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg)';
    
    

    
}

function PassDay(){
    actualPosition = 450;
    console.log("ejecuto la funcion", actualPosition);
}

function getOutPozo(){
    elementoSnail.style.transform = "rotate(0deg)";
    elementoSnail.style.marginLeft="-50px";
    elementoSnail.style.marginTop="-480px";
    getOutBoolean = "Si";
    getOut.textContent = "Ha salido del pozo? " +getOutBoolean;
    reset.style.display = 'block';
    accionNoche.disabled = true;
    accionDia.disabled = true;
}

function ReloadPage(){
    location.reload();
}