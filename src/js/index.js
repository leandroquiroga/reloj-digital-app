const obtenerID = (id) => document.getElementById(id)

const format = (seconds) =>{
    if(seconds < 10){
        seconds = '0' + seconds
    }
    return seconds;
}
const showHours = (date) => {
    let showHours = obtenerID('hours');
    let showMinutes = obtenerID('minuts');
    let showSeconds = obtenerID('seconds');
    let hours = format(date.getHours());
    let minutes = format(date.getMinutes());
    let seconds = format(date.getSeconds());

    showHours.innerHTML = `${hours}:`
    showMinutes.innerHTML = `${minutes}:`
    showSeconds.innerHTML = `${seconds}`;
}
const showClock = () => {
    let date = new Date();
    showHours(date)

    
}
const showDate = () => {
    let date = new Date()
    let day = date.toDateString();
    let showDate = obtenerID('date');
    
    showDate.innerHTML = `${day}`
}
const obtenerData = () =>{
    setInterval(showClock, 1000);
    showDate();
}

const initApp = () => obtenerData();

initApp()






