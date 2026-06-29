/* ================================
   PREMIUM LOVE WEBSITE
   Script Part 1
================================ */

const typing = document.getElementById("typing");
const pesan = document.getElementById("pesan");

const popup = document.getElementById("popup");
const openLetter = document.getElementById("openLetter");
const closePopup = document.getElementById("closePopup");

const giftBtn = document.getElementById("giftBtn");
const giftBox = document.getElementById("giftBox");
const giftText = document.querySelector(".giftText");

const darkMode = document.getElementById("darkMode");

const stars = document.getElementById("stars");
const heartRain = document.getElementById("heart-rain");

/* ================================
      Typing Title
================================ */

const titleText = "❤️ Untuk Nur Laila Mardiana ❤️";

let titleIndex = 0;

function typingTitle(){

if(titleIndex < titleText.length){

typing.innerHTML += titleText.charAt(titleIndex);

titleIndex++;

setTimeout(typingTitle,80);

}else{

typingMessage();

}

}

typingTitle();

/* ================================
      Typing Message
================================ */

const message = `

Hai Cantikku ❤️

Terima kasih ya...

Sudah mengungkapkan semua perasaanmu kepadaku.

Terima kasih sudah menerima aku apa adanya.

Terima kasih sudah sayang sama aku.

Terima kasih karena selalu ada buat aku kapan pun.

Aku benar-benar bersyukur bisa mengenalmu.

Semoga hubungan kita selalu dipenuhi kebahagiaan.

Aku akan selalu berusaha menjadi yang terbaik untukmu.

Aku sayang banget sama kamu ❤️

`;

let messageIndex = 0;

function typingMessage(){

if(messageIndex < message.length){

pesan.innerHTML += message.charAt(messageIndex);

messageIndex++;

setTimeout(typingMessage,30);

}

}

/* ================================
      Partikel Bintang
================================ */

function createStars(){

for(let i=0;i<180;i++){

let star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*3+"s";

star.style.animationDuration=2+Math.random()*3+"s";

stars.appendChild(star);

}

}

createStars();

/* ================================
      Hujan Hati
================================ */

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

const love=["❤️","💖","💕","💗","💞"];

heart.innerHTML=love[Math.floor(Math.random()*love.length)];

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=

3+Math.random()*4+"s";

heart.style.fontSize=

20+Math.random()*20+"px";

heartRain.appendChild(heart);

setTimeout(()=>{

heart.remove();

},7000);

}

setInterval(createHeart,350);
/* =========================================
   GIFT BOX
========================================= */

giftBtn.addEventListener("click", () => {

    giftBox.style.display = "block";

    const box = document.querySelector(".box");

    box.classList.add("open");

    setTimeout(() => {
        giftText.style.display = "block";
    }, 700);

    // Ledakan hati
    for(let i=0; i<80; i++){

        createExplosion();

    }

});


/* =========================================
   LEDAKAN HATI
========================================= */

function createExplosion(){

    const love = document.createElement("div");

    love.className = "heart";

    const emoji = ["❤️","💖","💕","💗","💞","✨","⭐"];

    love.innerHTML = emoji[
        Math.floor(Math.random()*emoji.length)
    ];

    love.style.left = (45 + Math.random()*10) + "%";

    love.style.top = "45%";

    love.style.position = "fixed";

    love.style.fontSize =
        (20 + Math.random()*35) + "px";

    love.style.animationDuration =
        (2 + Math.random()*2) + "s";

    document.body.appendChild(love);

    setTimeout(()=>{

        love.remove();

    },5000);

}


/* =========================================
   POPUP SURAT
========================================= */

openLetter.addEventListener("click",()=>{

    popup.style.display="flex";

});


closePopup.addEventListener("click",()=>{

    popup.style.display="none";

});


popup.addEventListener("click",(e)=>{

    if(e.target===popup){

        popup.style.display="none";

    }

});


/* =========================================
   DARK MODE
========================================= */

let mode=false;

darkMode.addEventListener("click",()=>{

    mode=!mode;

    document.body.classList.toggle("dark");

    if(mode){

        darkMode.innerHTML=
        '<i class="fa-solid fa-sun"></i> Mode Terang';

    }else{

        darkMode.innerHTML=
        '<i class="fa-solid fa-moon"></i> Mode Malam';

    }

});


/* =========================================
   ANIMASI CARD
========================================= */

const card=document.querySelector(".card");

document.addEventListener("mousemove",(e)=>{

    const x=(window.innerWidth/2-e.clientX)/35;

    const y=(window.innerHeight/2-e.clientY)/35;

    card.style.transform=
    `rotateY(${-x}deg) rotateX(${y}deg)`;

});

document.addEventListener("mouseleave",()=>{

    card.style.transform=
    "rotateY(0deg) rotateX(0deg)";

});


/* =========================================
   EFEK GLOW TOMBOL
========================================= */

const buttons=document.querySelectorAll("button");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.boxShadow=
        "0 0 25px #fff,0 0 50px hotpink";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.boxShadow="";

    });

});
/* ==========================================
   COUNTDOWN HUBUNGAN
========================================== */

// GANTI TANGGAL JADIAN DI SINI
const startDate = new Date("2026-04-05 00:00:00");

function updateCountdown(){

    const now = new Date();

    const distance = now - startDate;

    const days = Math.floor(distance / (1000*60*60*24));

    const hours = Math.floor(
        (distance % (1000*60*60*24))
        /(1000*60*60)
    );

    const minutes = Math.floor(
        (distance % (1000*60*60))
        /(1000*60)
    );

    const seconds = Math.floor(
        (distance % (1000*60))
        /1000
    );

    document.getElementById("days").textContent =
    days;

    document.getElementById("hours").textContent =
    hours;

    document.getElementById("minutes").textContent =
    minutes;

    document.getElementById("seconds").textContent =
    seconds;

}

updateCountdown();

setInterval(updateCountdown,1000);


/* ==========================================
   KELAPAK MAWAR
========================================== */

function createRose(){

    const rose = document.createElement("div");

    rose.innerHTML = "🌹";

    rose.style.position = "fixed";

    rose.style.left =
        Math.random()*100+"vw";

    rose.style.top="-30px";

    rose.style.fontSize=
        (20+Math.random()*20)+"px";

    rose.style.pointerEvents="none";

    rose.style.zIndex="999";

    document.body.appendChild(rose);

    const speed = 4+Math.random()*5;

    rose.animate([

        {
            transform:"translateY(0px) rotate(0deg)"
        },

        {
            transform:
            `translateY(${window.innerHeight+100}px)
             rotate(${360+Math.random()*360}deg)`
        }

    ],{

        duration:speed*1000,

        easing:"linear"

    });

    setTimeout(()=>{

        rose.remove();

    },speed*1000);

}

setInterval(createRose,900);


/* ==========================================
   CONFETTI RINGAN
========================================== */

function createConfetti(){

    const confetti=document.createElement("div");

    confetti.style.position="fixed";

    confetti.style.left=Math.random()*100+"vw";

    confetti.style.top="-20px";

    confetti.style.width="10px";

    confetti.style.height="10px";

    confetti.style.borderRadius="50%";

    const colors=[
        "#ff3d77",
        "#ffeb3b",
        "#4facfe",
        "#7b68ee",
        "#43e97b",
        "#ffffff"
    ];

    confetti.style.background=
        colors[Math.floor(Math.random()*colors.length)];

    confetti.style.pointerEvents="none";

    document.body.appendChild(confetti);

    const speed=3000+Math.random()*3000;

    confetti.animate([

        {
            transform:"translateY(0)"
        },

        {
            transform:
            `translateY(${window.innerHeight+50}px)
             rotate(${Math.random()*720}deg)`
        }

    ],{

        duration:speed,

        easing:"linear"

    });

    setTimeout(()=>{

        confetti.remove();

    },speed);

}

for(let i=0;i<40;i++){

    setTimeout(createConfetti,i*120);

}


/* ==========================================
   EFEK KILAU
========================================== */

setInterval(()=>{

    document.querySelector(".card").animate([

        {
            boxShadow:
            "0 0 20px rgba(255,255,255,.2)"
        },

        {
            boxShadow:
            "0 0 60px hotpink"
        },

        {
            boxShadow:
            "0 0 20px rgba(255,255,255,.2)"
        }

    ],{

        duration:2000

    });

},3000);


/* ==========================================
   UCAPAN SAAT WEBSITE DIBUKA
========================================== */

window.addEventListener("load",()=>{

    setTimeout(()=>{

        alert("❤️ Selamat Datang Cantikku, Semoga Kamu Suka Website Ini ❤️");

    },800);

});