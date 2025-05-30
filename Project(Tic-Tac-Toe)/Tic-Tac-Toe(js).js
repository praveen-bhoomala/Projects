let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let turn0=true;
let gameState = ["", "", "", "", "", "", "", "", ""];
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
function checkWinner(){
    for (let pattern of winPatterns){
        const [a,b,c] = pattern;
        if (gameState[a] &&gameState[a] ===gameState[b] && gameState[a] ===gameState[c]) {
            return gameState[a];
        }
    }
    return null;
}
function updateBox(index){
    if(gameState[index]=== ""){
        gameState[index]=turn0 ?"X":"O";
        boxes[index].textContent =gameState[index];

        if(gameState[index] ==="X") {
            boxes[index].style.color = "red"; 
            boxes[index].style.color = "blue";
        }


        const winner =checkWinner();
        if(winner){
            alert(`${winner} wins!`);
            return;
        }
        turn0 = !turn0; 
    }
}
boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        updateBox(index);
    });
});
resetbtn.addEventListener("click",() =>{
    gameState = ["", "", "", "", "", "", "", "", ""];
    boxes.forEach((box) =>{
        box.textContent = "";
    });
    turn0 =true;
});