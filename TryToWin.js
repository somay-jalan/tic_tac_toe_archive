const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))



async function typerwriter(speed){
    document.getElementById("rules").style.opacity=1;
    var element=document.getElementById("rules").innerHTML
    document.getElementById("rules").innerHTML=""
    for(let i=0;i<element.length;i++){
        document.getElementById("rules").innerHTML=element.substring(0,i+1)+'<cursor aria-hidden="true"></cursor>'
        var randSpeed=speed+(Math.random()-0.5)*speed
        // console.log(randSpeed)
        await sleep(randSpeed);
        
    }
    document.getElementById("rules").innerHTML=element.substring(0,element.length+1)
    document.getElementById("rulesText").style.opacity=1;
    var element=document.getElementById("rulesText").innerHTML
    document.getElementById("rulesText").innerHTML=""
    for(let i=0;i<element.length;i++){
        document.getElementById("rulesText").innerHTML=element.substring(0,i+1)+'<cursor aria-hidden="true"></cursor>'
        var randSpeed=speed+(Math.random()-0.5)*speed
        // console.log(randSpeed)
        await sleep(randSpeed);
        
    }
}

function startAnimation(){
    document.getElementById("TryToWinFont").style.animation="fadeoutAniamtion 1s forwards";
    

    setTimeout(function(){
        // document.getElementById("TryToWinFont").remove()
        document.getElementById("Startgame").style.display="block";
        document.getElementById("LetComputerStart").style.display="block";
    },1000)
    // document.getElementById("LetComputerStart").style.transition="0.4s";

    setTimeout(function(){
        typerwriter(50)
    },1000)
}

function playerStart(){
    document.getElementById("Startgame").style.animation="fadeoutAniamtion 1s forwards";
    document.getElementById("LetComputerStart").style.animation="fadeoutAniamtion 1s forwards";
    setTimeout(function(){
        document.getElementById("Startgame").remove()
        document.getElementById("LetComputerStart").remove()        
        document.getElementById("TryToWinFont").innerHTML="YOUR TURN"
        document.getElementById("TryToWinFont").style.animation="fadeinAniamtion 1s forwards";
        document.getElementById("Try to win").style.cursor="pointer";
    },1000)
    gameMechanics(0)

}

function gameMechanics(turn){
    document.addEventListener("click",tictactoeclicked,true)
}

function tictactoeclicked(event){
    var xOffset=0
    var yOffset=0
    // console.log(event.x)
    // console.log(event.y)
    var dimentions=document.getElementById('TicTacToe').getBoundingClientRect()
    // console.log(dimentions)
    if(event.x>=dimentions.left && event.x<=dimentions.left+dimentions.width/3){
        xOffset=16.66
        // console.log("1,4,7")
        if (event.y>=dimentions.top && event.y<=dimentions.top+dimentions.height/3) {
            yOffset=16.66
            console.log("1")
        }else if (event.y>dimentions.top+dimentions.height/3 && event.y<=dimentions.top+dimentions.height*2/3){
            yOffset=50
            console.log("4")
        }else if (event.y>dimentions.top+dimentions.height*2/3 && event.y<=dimentions.top+dimentions.height) 
            yOffset=83.33
            console.log("7")
    }else if (event.x>dimentions.left+dimentions.width/3 && event.x<=dimentions.left+dimentions.width*2/3){
        xOffset=50
        // console.log("2,5,8")
        if (event.y>=dimentions.top && event.y<=dimentions.top+dimentions.height/3){
            yOffset=16.66
            console.log("2")
        }else if (event.y>dimentions.top+dimentions.height/3 && event.y<=dimentions.top+dimentions.height*2/3){
            yOffset=50
            console.log("5")
        }else if (event.y>dimentions.top+dimentions.height*2/3 && event.y<=dimentions.top+dimentions.height) 
            yOffset=83.33
            console.log("8")
    }else if (event.x>dimentions.left+dimentions.width*2/3 && event.x<=dimentions.left+dimentions.width){
        xOffset=83.33
        // console.log("3,6,9")
        if (event.y>=dimentions.top && event.y<=dimentions.top+dimentions.height/3){
            yOffset=16.66
            console.log("3")
        }else if (event.y>dimentions.top+dimentions.height/3 && event.y<=dimentions.top+dimentions.height*2/3){
            yOffset=50
            console.log("6")
        }else if (event.y>dimentions.top+dimentions.height*2/3 && event.y<=dimentions.top+dimentions.height) 
            yOffset=83.33
            console.log("9")
    }
    var svgCross = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    var line1Cross = document.createElementNS("http://www.w3.org/2000/svg", 'line');
    var line2Cross = document.createElementNS("http://www.w3.org/2000/svg", 'line');
    svgCross.setAttribute("aria-hidden","true");
    svgCross.setAttribute('viewbox', '0 0 20% 20%');
    svgCross.setAttribute('width', '20%');
    svgCross.setAttribute('height', '20%');
    line1Cross.setAttribute("x1","0")
    line1Cross.setAttribute("y1","0")
    line1Cross.setAttribute("x2","100%")
    line1Cross.setAttribute("y2","100%")
    line1Cross.setAttribute('stroke', '#FAEBD7');
    line2Cross.setAttribute("x1","0")
    line2Cross.setAttribute("y1","100%")
    line2Cross.setAttribute("x2","100%")
    line2Cross.setAttribute("y2","0")
    line2Cross.setAttribute('stroke', '#FAEBD7');
    svgCross.appendChild(line1Cross)
    svgCross.appendChild(line2Cross)
    console.log(xOffset,yOffset)
    var svg = document.getElementById('SvgContainer'); 
    var NewCross = svgCross;
    NewCross.style.marginTop=String(yOffset-10)+"%"
    NewCross.style.marginLeft=String(xOffset-10)+"%"
    NewCross.style.position="absolute"
    svg.appendChild(NewCross)
    console.log(svg)
    // console.log(event)
}
