let gif=document.querySelector(".gif");
let msg=document.querySelector(".msg");
let yesbtn=document.querySelector(".yesbtn");
let nobtn=document.querySelector(".nobtn");

let noCount=0;



nobtn.addEventListener("click", ()=>{
    noCount++
    if(noCount===1){
        gif.src="bored-sad.gif"
        msg.innerText="please ?"
    }

    else if(noCount===2){
        gif.src="milk-and-mocha-bear-angry.gif"
        msg.innerText="Maan jao na !!"
    }

    else if(noCount===3){
        gif.src="bubu-sad-bubu-dudu.gif"
        msg.innerText="Mein ro dungi...."
         
    }

    else if(noCount===4){
        gif.src="bubu-sad.gif"
        msg.innerText="Dekho rula diya mujhe"
    }

    if(noCount>3){
        noCount=1;
    }

    const noBtn = document.querySelector(".nobtn");

  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});



yesbtn.addEventListener("click",()=>{
    gif.src="sport-running.gif"
    msg.innerText="Yayyy!!! Love you "
})

