let boxes=document.getElementsByClassName('box');
let turn="X";
let gameover=false;
let image=document.querySelector(".image").getElementsByTagName("img")[0];
const changeTurn=()=>{
    return turn==="X"?"O":"X"
}
const checkWin=()=>{
    let boxtext=document.getElementsByClassName("boxtext");
    let wins=[
        [0,1,2,-20,5,0],
        [3,4,5,-20,15,0],
        [6,7,8,-20,25,0],
        [0,3,6,-30,15,90],
        [1,4,7,-20,15,90],
        [2,5,8,-10,15,90],
        [0,4,8,-19,16,45],
        [2,4,6,-19,15,135]
    ]
    wins.forEach(element => {
        if((boxtext[element[0]].innerText===boxtext[element[1]].innerText) && (boxtext[element[0]].innerText===boxtext[element[2]].innerText) && (boxtext[element[1]].innerText!=="")){
        document.getElementsByClassName("line")[0].style.transform=`translate(${element[3]}vw,${element[4]}vw) rotate(${element[5]}deg)`;
        document.getElementsByClassName("line")[0].style.width="25vw";
        document.getElementsByClassName("line")[0].style.height="3px";
        gameover=true;
        }
        })
}
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener('click',()=>{
        if(boxtext.innerText===""){
            boxtext.innerText= turn;
            turn= changeTurn();
            checkWin();
            if(!gameover){
                document.getElementsByClassName("Info")[0].innerText=turn+"  turn";
            }
            else{
            turn=changeTurn();
            document.getElementsByClassName("Info")[0].innerText=turn+" won"+"click reset to play again";
            image.style.width="60px";
        }
        }
    })
})
let button=document.getElementById("reset");
button.addEventListener('click',()=>
{
    let boxtext=document.getElementsByClassName("boxtext");
    image.style.width="0";
    turn="X";
    gameover=false;
    document.querySelector(".line").style.width="0";
    Array.from(boxtext).forEach(e=>{
        e.innerText=""
        document.getElementsByClassName("Info")[0].innerText=turn+"  turn";
    })
})