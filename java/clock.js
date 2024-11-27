// const szoveg = document.getElementById("szoveg")

// function showMessage() {
//     szoveg.innerHTML = "Ez az első Js"
// }

// let kor = prompt("Hány éves vagy?")

// if (kor < 18){
//     alert("Nem játszhatsz")
// }
// else if(kor < 70){
//     alert("Te már játszhatsz")
// }
// else{
//     alert("Túl öreg vagy")
// }

const time = document.getElementById("time")

document.addEventListener("DOMContentLoaded", () => {
    setInterval(showTime, 1000)
})

const showTime = () =>{
    let date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getUTCSeconds();

    hr = hr < 10 ? `0${hr}` : hr;
    min = min < 10 ? `0${min}` : min;
    sec = hr < 10 ? `0${sec}` : sec;


    console.log("hour" + hr, "minute" + min, "seconds" + sec);
    time.innerHTML = `${hr} : ${min} : ${sec}`;
}