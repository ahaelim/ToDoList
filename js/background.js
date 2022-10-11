const images = ['0.jpeg','1.jpeg','2.jpeg'];
const body = document.querySelector("body");
const chosenImage = images[Math.floor(Math.random()*images.length)];

// 이미지 넣기
// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);

// 배경화면으로 추가
const imageUrl = `../img/${chosenImage}`

    const backgroundImage = `url("${imageUrl}")`
    
    body.style.backgroundImage= backgroundImage;
