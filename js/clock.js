const clock = document.querySelector("h2#clock")

// function sayHello() {
//     console.log("hello");
// }
// setInterval(실행할 함수, 5000ms(5초)마다 반복)
// setInterval(sayHello, 5000)

// setTimeout(실행할 함수, 5000ms(5초) 만큼 기다린뒤 실행)
//setTimeout(sayHello, 5000);

// "1".padStart(2, "0") => 01
// 글자 수가 2개가 되도록, string 앞에 넣어줄 string
// "1".padEnd(2, "0") => 10

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
   
    clock.innerText = `${hours} : ${minutes} : ${seconds}`
}

getClock();
setInterval(getClock, 1000);
