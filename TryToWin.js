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
    },1000)
    var TicTacToeArray=[[null,null,null],[null,null,null],[null,null,null]]
    playerTurn(1,TicTacToeArray)
}

function computerTurn(turn,TicTacToeArray){
    setTimeout(() => {
        document.getElementById("TryToWinFont").innerHTML="COMPUTER TURN"
        document.getElementById("TryToWinFont").style.animation="fadeinAniamtion 1s forwards";
        document.getElementById("Try to win").style.cursor="defualt";
    }, 1000);
    
    console.log(TicTacToeArray)
    let chooseArray=[16.66,50,83.33]
    let xOffset=0
    let yOffset=0
    let binaryCheck=0
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(TicTacToeArray[i][j]==null){
                binaryCheck=1 
            }
        }
    }
    if(binaryCheck==0){
        console.log("issuee")
        return
    }
    while(true){
        let xOffsetTemp=chooseArray[(Math.floor(Math.random() * chooseArray.length))]
        let yOffsetTemp=chooseArray[(Math.floor(Math.random() * chooseArray.length))]
        if(TicTacToeArray[Math.floor(yOffsetTemp/33.33)][Math.floor(xOffsetTemp/33.33)]!=null){
            continue
        }else{
            TicTacToeArray[Math.floor(yOffsetTemp/33.33)][Math.floor(xOffsetTemp/33.33)]=turn
            xOffset=xOffsetTemp
            yOffset=yOffsetTemp
            break
        }
    }
    if(turn == 0 && xOffset!=0 && yOffset!=0){
        let svgCross = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        let line1Cross = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        let line2Cross = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        svgCross.setAttribute("aria-hidden","true");
        svgCross.setAttribute('viewbox', '0 0 20% 20%');
        svgCross.setAttribute('width', '20%');
        svgCross.setAttribute('height', '20%');
        line1Cross.setAttribute("x1","0")
        line1Cross.setAttribute("y1","0")
        line1Cross.setAttribute("x2","100%")
        line1Cross.setAttribute("y2","100%")
        line1Cross.setAttribute('stroke', '#FAEBD7');
        line1Cross.setAttribute('stroke-width', '2');
        line2Cross.setAttribute("x1","0")
        line2Cross.setAttribute("y1","100%")
        line2Cross.setAttribute("x2","100%")
        line2Cross.setAttribute("y2","0")
        line2Cross.setAttribute('stroke', '#FAEBD7');
        line2Cross.setAttribute('stroke-width', '2');
        svgCross.appendChild(line1Cross)
        svgCross.appendChild(line2Cross)
        // console.log(xOffset,yOffset)
        let SvgContainer = document.getElementById('SvgContainer'); 
        let NewCross = svgCross;
        NewCross.style.marginTop=String(yOffset-10)+"%"
        NewCross.style.marginLeft=String(xOffset-10)+"%"
        NewCross.style.position="absolute"
        SvgContainer.appendChild(NewCross)
        playerTurn(1,TicTacToeArray)
        return 
        // console.log(svg)
    }
    if(turn == 1 && xOffset!=0 && yOffset!=0){
        let svgCircle = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        let circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        svgCircle.setAttribute("aria-hidden","true");
        svgCircle.setAttribute('viewbox', '0 0 % 20%');
        svgCircle.setAttribute('width', '20%');
        svgCircle.setAttribute('height', '20%');
        svgCircle.setAttribute('fill', 'none');
        circle.setAttribute("r","49%")
        circle.setAttribute("cx","50%")
        circle.setAttribute("cy","50%")
        circle.setAttribute('stroke', '#FAEBD7');
        circle.setAttribute('stroke-width', '2');

        svgCircle.appendChild(circle)
        // console.log(xOffset,yOffset)
        let SvgContainer = document.getElementById('SvgContainer'); 
        let NewCircle = svgCircle;
        NewCircle.style.marginTop=String(yOffset-10)+"%"
        NewCircle.style.marginLeft=String(xOffset-10)+"%"
        NewCircle.style.position="absolute"
        SvgContainer.appendChild(NewCircle)
        playerTurn(0,TicTacToeArray)
        return
        // console.log(svg)
    }
}

function playerTurn(turn,TicTacToeArray){
    setTimeout(() => {
        document.getElementById("TryToWinFont").innerHTML="YOUR TURN"
        document.getElementById("TryToWinFont").style.animation="fadeinAniamtion 1s forwards";
        document.getElementById("Try to win").style.cursor="pointer";
    }, 1000);
    
    console.log(TicTacToeArray)
    document.addEventListener("click",(event)=>tictactoeclicked(turn,TicTacToeArray,event),{once:true})
}

function tictactoeclicked(turn,TicTacToeArray,event){
    let xOffset=0
    let yOffset=0
    // console.log(event.x)
    // console.log(event.y)
    let dimentions=document.getElementById('TicTacToe').getBoundingClientRect()
    // console.log(dimentions)
    if(event.x>=dimentions.left && event.x<=dimentions.left+dimentions.width/3){
        xOffset=16.66
        // console.log("1,4,7")
        if (event.y>=dimentions.top && event.y<=dimentions.top+dimentions.height/3) {
            yOffset=16.66
            // console.log("1")
        }else if (event.y>dimentions.top+dimentions.height/3 && event.y<=dimentions.top+dimentions.height*2/3){
            yOffset=50
            // console.log("4")
        }else if (event.y>dimentions.top+dimentions.height*2/3 && event.y<=dimentions.top+dimentions.height) 
            yOffset=83.33
            // console.log("7")
    }else if (event.x>dimentions.left+dimentions.width/3 && event.x<=dimentions.left+dimentions.width*2/3){
        xOffset=50
        // console.log("2,5,8")
        if (event.y>=dimentions.top && event.y<=dimentions.top+dimentions.height/3){
            yOffset=16.66
            // console.log("2")
        }else if (event.y>dimentions.top+dimentions.height/3 && event.y<=dimentions.top+dimentions.height*2/3){
            yOffset=50
            // console.log("5")
        }else if (event.y>dimentions.top+dimentions.height*2/3 && event.y<=dimentions.top+dimentions.height) 
            yOffset=83.33
            // console.log("8")
    }else if (event.x>dimentions.left+dimentions.width*2/3 && event.x<=dimentions.left+dimentions.width){
        xOffset=83.33
        // console.log("3,6,9")
        if (event.y>=dimentions.top && event.y<=dimentions.top+dimentions.height/3){
            yOffset=16.66
            // console.log("3")
        }else if (event.y>dimentions.top+dimentions.height/3 && event.y<=dimentions.top+dimentions.height*2/3){
            yOffset=50
            // console.log("6")
        }else if (event.y>dimentions.top+dimentions.height*2/3 && event.y<=dimentions.top+dimentions.height) 
            yOffset=83.33
            // console.log("9")
    }
    if(yOffset!=0 && xOffset!=0){
        if(TicTacToeArray[Math.floor(yOffset/33.33)][Math.floor(xOffset/33.33)]!=null){
            document.addEventListener("click",(event)=>tictactoeclicked(turn,TicTacToeArray,event),{once:true})
            return
        }else{
            TicTacToeArray[Math.floor(yOffset/33.33)][Math.floor(xOffset/33.33)]=turn
        }
    }
    if(turn == 0 && xOffset!=0 && yOffset!=0){
        let svgCross = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        let line1Cross = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        let line2Cross = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        svgCross.setAttribute("aria-hidden","true");
        svgCross.setAttribute('viewbox', '0 0 20% 20%');
        svgCross.setAttribute('width', '20%');
        svgCross.setAttribute('height', '20%');
        line1Cross.setAttribute("x1","0")
        line1Cross.setAttribute("y1","0")
        line1Cross.setAttribute("x2","100%")
        line1Cross.setAttribute("y2","100%")
        line1Cross.setAttribute('stroke', '#FAEBD7');
        line1Cross.setAttribute('stroke-width', '2');
        line2Cross.setAttribute("x1","0")
        line2Cross.setAttribute("y1","100%")
        line2Cross.setAttribute("x2","100%")
        line2Cross.setAttribute("y2","0")
        line2Cross.setAttribute('stroke', '#FAEBD7');
        line2Cross.setAttribute('stroke-width', '2');
        svgCross.appendChild(line1Cross)
        svgCross.appendChild(line2Cross)
        // console.log(xOffset,yOffset)
        let SvgContainer = document.getElementById('SvgContainer'); 
        let NewCross = svgCross;
        NewCross.style.marginTop=String(yOffset-10)+"%"
        NewCross.style.marginLeft=String(xOffset-10)+"%"
        NewCross.style.position="absolute"
        SvgContainer.appendChild(NewCross)
        computerTurn(1,TicTacToeArray)
        return 
        // console.log(svg)
    }
    if(turn == 1 && xOffset!=0 && yOffset!=0){
        let svgCircle = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        let circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        svgCircle.setAttribute("aria-hidden","true");
        svgCircle.setAttribute('viewbox', '0 0 % 20%');
        svgCircle.setAttribute('width', '20%');
        svgCircle.setAttribute('height', '20%');
        svgCircle.setAttribute('fill', 'none');
        circle.setAttribute("r","49%")
        circle.setAttribute("cx","50%")
        circle.setAttribute("cy","50%")
        circle.setAttribute('stroke', '#FAEBD7');
        svgCircle.appendChild(circle)
        // console.log(xOffset,yOffset)
        let SvgContainer = document.getElementById('SvgContainer'); 
        let NewCircle = svgCircle;
        NewCircle.style.marginTop=String(yOffset-10)+"%"
        NewCircle.style.marginLeft=String(xOffset-10)+"%"
        NewCircle.style.position="absolute"
        SvgContainer.appendChild(NewCircle)
        computerTurn(0,TicTacToeArray)
        return
        // console.log(svg)
    }
    document.addEventListener("click",(event)=>tictactoeclicked(turn,TicTacToeArray,event),{once:true})
    // console.log(event)
}
