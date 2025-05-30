    const btns = document.querySelectorAll(".btn");

    const getcompchoice = () => {
        let options = ["rock", "paper", "scissors"];
        let randidx = Math.floor(Math.random()*3);
        return options[randidx];
    }
    const determinewinner=(userchoice,compchoice)=>{
        if(userchoice===compchoice) {
            return "It's a tie!";
        }
        if((userchoice === "rock" && compchoice === "scissors") ||
            (userchoice === "scissors" && compchoice === "paper") ||
            (userchoice === "paper" && compchoice === "rock"))
            {
            return "You win";
        }
        return "You lose";
    }

    const playgame = (userchoice) => {
        const compchoice = getcompchoice();
        const result=determinewinner(userchoice,compchoice);
        document.getElementById("result").innerHTML =`computer choice: ${compchoice} <br> ${result}`;
    }

    btns.forEach(btn => {
        btn.addEventListener("click", ()=>{
            let userchoice = btn.getAttribute("id");
            console.log(userchoice);
            playgame(userchoice);
        })
    })