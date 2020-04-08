const game= () =>{
    let Pscore=0;
    let Cscore=0;
    const main1= () =>{
        const butt=document.querySelector(".introscreen button");
        const intro=document.querySelector(".introscreen");
        const scores=document.querySelector(".scoreboard");
        const matchs=document.querySelector(".match");

        butt.addEventListener("click" , ()=>{
            intro.classList.add("fadeout");
            scores.classList.add("fadein");
            matchs.classList.add("fadein");

        });

    };
    const play=()=>{
        const options1=document.querySelectorAll(".moves button");
        const phand=document.querySelector(".bew");
        const chand=document.querySelector(".bew1");

        const handss=document.querySelectorAll(".hands img");
        handss.forEach(hand =>{
            hand.addEventListener("animationend",function(){
                this.style.animation="";
            });
        });

        const comph=["rock","paper","scissor"];

        options1.forEach(option =>{
            option.addEventListener("click",function(){
                const getNum=Math.floor(Math.random()*3);
                const choice=comph[getNum];
              setTimeout(()=>{
                compares(this.textContent,choice);
                
                phand.src=`./images/${this.textContent}.png`;
                chand.src=`./images/${choice}.png`;
              },2000);
                phand.style.animation="rotp 2s ease";
                chand.style.animation="rotc 2s ease";
            });
            
        });

        
        
    };
    const Updatescore=()=>{
        const playersc=document.querySelector('.Player-score  p');
        const compsc=document.querySelector('.Computer-score  p');
        playersc.textContent=Pscore;
        compsc.textContent=Cscore;
    }

const compares=(pchoice,choice)=>{
    const winner1=document.querySelector(".winner");
    if(pchoice===choice){
        winner1.textContent="It's A Tie!";
        Updatescore();
        return;
    }
    if(pchoice==='rock'){
        if(choice==='scissor'){
            winner1.textContent="Player Wins!";
            Pscore++;
            Updatescore();
            return;

        }else{
            winner1.textContent="Computer Wins!";
            Cscore++;
            Updatescore();
            return;
        }
    }
    if(pchoice==='scissor'){
        if(choice==='paper'){
            winner1.textContent="Player Wins!";
            Pscore++;
            Updatescore();
            return;

        }else{
            winner1.textContent="Computer Wins!";
            Cscore++;
            Updatescore();
            return;
        }
    }
    if(pchoice==='paper'){
        if(choice==='rock'){
            winner1.textContent="Player Wins!";
            Pscore++;
            Updatescore();
            return;

        }else{
            winner1.textContent="Computer Wins!";
            Cscore++;
            Updatescore();
            return;
        }
    }

}



    main1();
    play();
};
game();