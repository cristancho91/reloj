const reloj = document.querySelector('#reloj');

const mecanismo = ()=>{
    let tiempo = new Date();
    let horas = (tiempo.getHours()%12);
    let minutos = tiempo.getMinutes();
    let segundos = tiempo.getSeconds();

    if(horas < 10 ){
        horas = '0'+ horas;
    }
    if(minutos < 10){
        minutos = '0'+ minutos;
    }
    if(segundos < 10){
        segundos = '0'+segundos;
    }

    let cadenaTxt = horas + ' : '+minutos+' : '+ segundos;
    reloj.textContent = cadenaTxt;
}
setInterval(mecanismo, 1000);