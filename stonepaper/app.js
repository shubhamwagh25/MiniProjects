let userscore = 0;
let compscore = 0;
const msg = document.querySelector("#msg");

const choices = document.querySelectorAll(".Choice");
const Userscore = document.querySelector("#user-score");
const Compscore = document.querySelector("#comp-score");

const gencompchoice = ()=>
{
    const options =["rock" , "paper" , "scissor"];
    const randidx = Math.floor(Math.random()*3);
    // console.log(options[ranidx]);
    return options[randidx];

}    
const playGame = (userChoice) =>
{
    console.log("user choice is ", userChoice);
    const compchoice = gencompchoice();
    console.log("computer choice" , compchoice);
    if(userChoice === compchoice)
    {
        console.log("Its Draw");
        msg.innerHTML=" DRAW "
        msg.style.backgroundColor="#081b31";
        
    }else{

        if (userChoice === "rock" && compchoice === "paper" )
        {
            console.log("computer win");
            msg.innerHTML = " computer win , paper won on your rock "
            msg.style.backgroundColor="red";
            compscore++;


        }else if (userChoice === "rock" && compchoice === "scissor"  ) 
        {
            console.log("user win");
            msg.innerHTML=" User Win , your rock won on scissor"
            msg.style.backgroundColor="green";
            userscore++;

        }else if (userChoice === "paper" && compchoice === "scissor"  ) 
        {
            console.log("computer win");
            msg.innerHTML=" computer win , scissor won on your paper "
            msg.style.backgroundColor="red";
            compscore++;

        }else if (userChoice === "paper" && compchoice === "rock"  ) 
        {
            console.log("user win");
            msg.innerHTML=" User Win , your paper won on rock"
            msg.style.backgroundColor="green";
            userscore++;

        }else if (userChoice === "scissor" && compchoice === "rock"  ) 
        {
            console.log("computer win");
            msg.innerHTML= "computer Win , rock won on your scissor "
            msg.style.backgroundColor="red";
            
            compscore++;

        }else  
        {
            console.log("user win");
            msg.innerHTML=" User Win , your scissor won on paper"
            msg.style.backgroundColor="green";
            userscore++;
        }
        Userscore.innerHTML=userscore;
        Compscore.innerHTML=compscore;

    }

}

choices.forEach ( (choice)=> {
    console.log(choice);
    choice.addEventListener("click" , () =>{
        const userChoice = choice.getAttribute("id");
        console.log("cliked" ,userChoice);
        playGame(userChoice);

    })

});