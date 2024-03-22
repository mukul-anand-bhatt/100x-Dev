setInterval(() => {
    console.clear();
    
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    // Format the time as HH:MM:SS
    let time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    //padding is used to show it in 00:00:00 format other wise it will be 0:0:0 for single digit
    console.log(time);
}, 1000);
