const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
var totalturnCount=0


function gameEndCheck(TicTacToeArray){
    let svgEnd = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgEnd.setAttribute("aria-hidden","true");
    svgEnd.setAttribute('viewbox', '0 0 100% 100%');
    svgEnd.setAttribute('width', '100%');
    svgEnd.setAttribute('height', '100%');
    let lineCheck=0
    if(TicTacToeArray[0][0]==TicTacToeArray[0][1] && TicTacToeArray[0][0]==TicTacToeArray[0][2] && TicTacToeArray[0][0]!=null){
        let line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        line.setAttribute("x1","0%")
        line.setAttribute("y1","16.66%")
        line.setAttribute("x2","100%")
        line.setAttribute("y2","16.66%")
        line.setAttribute('stroke', '#FAEBD7');
        line.setAttribute('stroke-width', '2');
        svgEnd.appendChild(line)
        lineCheck=1
    }
    if(TicTacToeArray[0][0]==TicTacToeArray[1][1] && TicTacToeArray[0][0]==TicTacToeArray[2][2] && TicTacToeArray[0][0]!=null){
        let line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        line.setAttribute("x1","0%")
        line.setAttribute("y1","0%")
        line.setAttribute("x2","100%")
        line.setAttribute("y2","100%")
        line.setAttribute('stroke', '#FAEBD7');
        line.setAttribute('stroke-width', '2');
        svgEnd.appendChild(line)
        lineCheck=1
    }
    if(TicTacToeArray[0][0]==TicTacToeArray[1][0] && TicTacToeArray[0][0]==TicTacToeArray[2][0] && TicTacToeArray[0][0]!=null){
        let line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        line.setAttribute("x1","16.66%")
        line.setAttribute("y1","0%")
        line.setAttribute("x2","16.66%")
        line.setAttribute("y2","100%")
        line.setAttribute('stroke', '#FAEBD7');
        line.setAttribute('stroke-width', '2');
        svgEnd.appendChild(line)
        lineCheck=1
    }
    if(TicTacToeArray[0][2]==TicTacToeArray[1][2] && TicTacToeArray[0][2]==TicTacToeArray[2][2] && TicTacToeArray[0][2]!=null){
        let line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        line.setAttribute("x1","83.34%")
        line.setAttribute("y1","0%")
        line.setAttribute("x2","83.34%")
        line.setAttribute("y2","100%")
        line.setAttribute('stroke', '#FAEBD7');
        line.setAttribute('stroke-width', '2');
        svgEnd.appendChild(line)
        lineCheck=1
    }
    if(TicTacToeArray[0][2]==TicTacToeArray[1][1] && TicTacToeArray[0][2]==TicTacToeArray[2][0] && TicTacToeArray[0][2]!=null){
        let line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        line.setAttribute("x1","100%")
        line.setAttribute("y1","0%")
        line.setAttribute("x2","0%")
        line.setAttribute("y2","100%")
        line.setAttribute('stroke', '#FAEBD7');
        line.setAttribute('stroke-width', '2');
        svgEnd.appendChild(line)
        lineCheck=1
    }
    if(TicTacToeArray[0][1]==TicTacToeArray[1][1] && TicTacToeArray[0][1]==TicTacToeArray[2][1] && TicTacToeArray[0][1]!=null){
        let line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        line.setAttribute("x1","50%")
        line.setAttribute("y1","0%")
        line.setAttribute("x2","50%")
        line.setAttribute("y2","100%")
        line.setAttribute('stroke', '#FAEBD7');
        line.setAttribute('stroke-width', '2');
        svgEnd.appendChild(line)
        lineCheck=1
    }
    if(TicTacToeArray[1][0]==TicTacToeArray[1][1] && TicTacToeArray[1][0]==TicTacToeArray[1][2] && TicTacToeArray[1][0]!=null){
        let line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        line.setAttribute("x1","0%")
        line.setAttribute("y1","50%")
        line.setAttribute("x2","100%")
        line.setAttribute("y2","50%")
        line.setAttribute('stroke', '#FAEBD7');
        line.setAttribute('stroke-width', '2');
        svgEnd.appendChild(line)
        lineCheck=1
    }
    if(TicTacToeArray[2][0]==TicTacToeArray[2][1] && TicTacToeArray[2][0]==TicTacToeArray[2][2] && TicTacToeArray[2][0]!=null){
        let line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        line.setAttribute("x1","0%")
        line.setAttribute("y1","83.34%")
        line.setAttribute("x2","100%")
        line.setAttribute("y2","83.34%")
        line.setAttribute('stroke', '#FAEBD7');
        line.setAttribute('stroke-width', '2');
        svgEnd.appendChild(line)
        lineCheck=1
    }
    if(lineCheck==1){
        let SvgContainer = document.getElementById('SvgContainer'); 
        svgEnd.style.position="absolute"
        SvgContainer.appendChild(svgEnd)
        return "Win"
    }else{
        let binaryCheck=0
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                if(TicTacToeArray[i][j]==null){
                    binaryCheck=1 
                }
            }
        }
        if(binaryCheck==0){
            return "Draw"
        }else{
            return "gameNotEnd"
        }
    }

}

var svgClickAbort = new AbortController();


function gameEndFunc(){
    document.getElementById("Startgame").innerHTML="Restart";
    document.getElementById("Startgame").onclick=gameRestart;
    document.getElementById("LetComputerStart").innerHTML="Go Back";
    document.getElementById("LetComputerStart").onclick=goBack;
    document.getElementById("Startgame").style.visibility = 'visible'
    document.getElementById("LetComputerStart").style.visibility = 'visible'
    document.getElementById("LetComputerStart").style.animation="fadeinAniamtion 1s forwards";
    document.getElementById("Startgame").style.animation="fadeinAniamtion 1s forwards";
}

function gameRestart(){
    svgClickAbort.abort()
    totalturnCount=0
    document.getElementById("TryToWinFont").style.animation="fadeoutAniamtion 1s forwards";
    let tictactoeimage=document.getElementById("TicTacToe")
    let SvgContainer = document.getElementById("SvgContainer");
    let child = SvgContainer.lastElementChild;
    while (child) {
        SvgContainer.removeChild(child);
        child = SvgContainer.lastElementChild;
    }
    SvgContainer.appendChild(tictactoeimage)
    document.getElementById("Startgame").innerHTML="Start The Game";
    document.getElementById("Startgame").onclick=StartPlayer;
    document.getElementById("LetComputerStart").innerHTML="Let Computer Start";
    document.getElementById("LetComputerStart").onclick=StartComputer;
}

function goBack(){
    window.location.href="/index.html"  
}

function checkIfLineForm(TicTacToeArray,turn){
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(TicTacToeArray[i][j]==null){
                let TicTacToeArrayCopy=JSON.parse(JSON.stringify(TicTacToeArray));
                TicTacToeArrayCopy[i][j]=turn
                if(TicTacToeArrayCopy[0][0]==TicTacToeArrayCopy[0][1] && TicTacToeArrayCopy[0][0]==TicTacToeArrayCopy[0][2] && TicTacToeArrayCopy[0][0]!=null){
                    return [i,j]
                }
                if(TicTacToeArrayCopy[0][0]==TicTacToeArrayCopy[1][1] && TicTacToeArrayCopy[0][0]==TicTacToeArrayCopy[2][2] && TicTacToeArrayCopy[0][0]!=null){
                    return [i,j]
                }
                if(TicTacToeArrayCopy[0][0]==TicTacToeArrayCopy[1][0] && TicTacToeArrayCopy[0][0]==TicTacToeArrayCopy[2][0] && TicTacToeArrayCopy[0][0]!=null){
                    return [i,j]
                }
                if(TicTacToeArrayCopy[0][2]==TicTacToeArrayCopy[1][2] && TicTacToeArrayCopy[0][2]==TicTacToeArrayCopy[2][2] && TicTacToeArrayCopy[0][2]!=null){
                    return [i,j]
                }
                if(TicTacToeArrayCopy[0][2]==TicTacToeArrayCopy[1][1] && TicTacToeArrayCopy[0][2]==TicTacToeArrayCopy[2][0] && TicTacToeArrayCopy[0][2]!=null){
                    return [i,j]
                }
                if(TicTacToeArrayCopy[0][1]==TicTacToeArrayCopy[1][1] && TicTacToeArrayCopy[0][1]==TicTacToeArrayCopy[2][1] && TicTacToeArrayCopy[0][1]!=null){
                    return [i,j]
                }
                if(TicTacToeArrayCopy[1][0]==TicTacToeArrayCopy[1][1] && TicTacToeArrayCopy[1][0]==TicTacToeArrayCopy[1][2] && TicTacToeArrayCopy[1][0]!=null){
                    return [i,j]
                }
                if(TicTacToeArrayCopy[2][0]==TicTacToeArrayCopy[2][1] && TicTacToeArrayCopy[2][0]==TicTacToeArrayCopy[2][2] && TicTacToeArrayCopy[2][0]!=null){
                    return [i,j]
                }
            }
        }
    }
    return [null,null]
}

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

function StartPlayer(){
    document.getElementById("Startgame").innerHTML="Restart";
    document.getElementById("Startgame").onclick=gameRestart;
    document.getElementById("LetComputerStart").innerHTML="Go Back";
    document.getElementById("LetComputerStart").onclick=goBack;
    var TicTacToeArray=[[null,null,null],[null,null,null],[null,null,null]]
    playerTurn(0,TicTacToeArray)
    
}

function StartComputer(){
    document.getElementById("Startgame").innerHTML="Restart";
    document.getElementById("Startgame").onclick=gameRestart;
    document.getElementById("LetComputerStart").innerHTML="Go Back";
    document.getElementById("LetComputerStart").onclick=goBack;
    var TicTacToeArray=[[null,null,null],[null,null,null],[null,null,null]]
    computerTurn(0,TicTacToeArray)
}

function computerTurn(turn,TicTacToeArray){
    totalturnCount+=1
    document.getElementById("TryToWinFont").innerHTML="COMPUTER TURN"
    document.getElementById("TryToWinFont").style.animation="fadeinAniamtion 1s forwards";
    document.getElementById("Try to win").style.cursor="defualt";
    console.log(TicTacToeArray)
    let chooseArray=[16.66,50,83.34]
    let xOffset=0
    let yOffset=0
    // let binaryCheck=0
    // for(let i=0;i<3;i++){
    //     for(let j=0;j<3;j++){
    //         if(TicTacToeArray[i][j]==null){
    //             binaryCheck=1 
    //         }
    //     }
    // }
    // if(binaryCheck==0){
    //     console.log("issuee")
    //     return
    // }
    while(true){
        let xOffsetTemp=chooseArray[(Math.floor(Math.random() * chooseArray.length))]
        let yOffsetTemp=chooseArray[(Math.floor(Math.random() * chooseArray.length))]
        if(TicTacToeArray[Math.floor(yOffsetTemp/33.33)][Math.floor(xOffsetTemp/33.33)]!=null){
            continue
        }else{
            xOffset=xOffsetTemp
            yOffset=yOffsetTemp
            break
        }
    }
    if(totalturnCount==1){
        xOffset=16.66
        yOffset=16.66
    }
    if(totalturnCount==3){
        if(TicTacToeArray[0][1]==1-turn || TicTacToeArray[0][2]==1-turn || TicTacToeArray[1][2]==1-turn || TicTacToeArray[2][2]==1-turn){
            xOffset=16.66
            yOffset=83.34
        }
        if(TicTacToeArray[1][0]==1-turn || TicTacToeArray[2][0]==1-turn || TicTacToeArray[2][1]==1-turn){
            yOffset=16.66
            xOffset=83.34
        }if(TicTacToeArray[1][1]==1-turn){
            yOffset=83.34
            xOffset=83.34
        }
    }
    if(totalturnCount==5){
        yOffset=83.34
        xOffset=83.34
    }

    if(totalturnCount==2){
        if(TicTacToeArray[1][1]==1-turn){
            xOffset=16.66
            yOffset=16.66
        }else{
            xOffset=50
            yOffset=50
        }
    }
    if(totalturnCount==4){
        if((TicTacToeArray[0][0]==1-turn && TicTacToeArray[1][2]==1-turn) || (TicTacToeArray[0][2]==1-turn && TicTacToeArray[1][0]==1-turn) || (TicTacToeArray[0][0]==1-turn && TicTacToeArray[2][2]==1-turn) || (TicTacToeArray[0][2]==1-turn && TicTacToeArray[2][0]==1-turn)){
            xOffset=50
            yOffset=16.66
        }
        if((TicTacToeArray[0][0]==1-turn && TicTacToeArray[2][1]==1-turn) || (TicTacToeArray[2][0]==1-turn && TicTacToeArray[0][1]==1-turn)){
            xOffset=16.66
            yOffset=50
        }
        if((TicTacToeArray[2][0]==1-turn && TicTacToeArray[1][2]==1-turn) || (TicTacToeArray[2][2]==1-turn && TicTacToeArray[1][0]==1-turn)){
            xOffset=50
            yOffset=83.34
        }
        if((TicTacToeArray[0][2]==1-turn && TicTacToeArray[2][1]==1-turn) || (TicTacToeArray[2][2]==1-turn && TicTacToeArray[0][1]==1-turn)){
            xOffset=83.34
            yOffset=50
        }
        if((TicTacToeArray[0][1]==1-turn && TicTacToeArray[2][1]==1-turn) || (TicTacToeArray[1][0]==1-turn && TicTacToeArray[1][2]==1-turn) || (TicTacToeArray[0][1]==1-turn && TicTacToeArray[1][0]==1-turn) || (TicTacToeArray[0][1]==1-turn && TicTacToeArray[1][2]==1-turn) || (TicTacToeArray[1][0]==1-turn && TicTacToeArray[2][1]==1-turn)){
            xOffset=16.66
            yOffset=16.66
        }
        if((TicTacToeArray[1][2]==1-turn && TicTacToeArray[2][1]==1-turn)){
            xOffset=83.34
            yOffset=83.34
        }
        
    }
    if(totalturnCount==6){
        if((TicTacToeArray[0][0]==1-turn && TicTacToeArray[1][2]==1-turn && TicTacToeArray[2][1]==1-turn) || (TicTacToeArray[2][0]==1-turn && TicTacToeArray[0][1]==1-turn && TicTacToeArray[1][2]==1-turn)){
            xOffset=83.34
            yOffset=16.66
        }
        if((TicTacToeArray[0][2]==1-turn && TicTacToeArray[1][0]==1-turn && TicTacToeArray[2][1]==1-turn) || (TicTacToeArray[2][2]==1-turn && TicTacToeArray[1][0]==1-turn && TicTacToeArray[0][1]==1-turn) ){
            xOffset=16.66
            yOffset=16.66
        }
        if((TicTacToeArray[0][0]==1-turn && TicTacToeArray[2][1]==1-turn && TicTacToeArray[2][0]==1-turn)){
            xOffset=16.66
            yOffset=83.34
        }
    }

    var [i,j]=checkIfLineForm(TicTacToeArray,1-turn)
    if(i!=null && j!=null){
        xOffset=j*33.34+16.66
        yOffset=i*33.34+16.66
    }

    [i,j]=checkIfLineForm(TicTacToeArray,turn)
    if(i!=null && j!=null){
        xOffset=j*33.34+16.66
        yOffset=i*33.34+16.66
    }


    TicTacToeArray[Math.floor(yOffset/33.33)][Math.floor(xOffset/33.33)]=turn
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
        let gameEnd=gameEndCheck(TicTacToeArray)
        // console.log(gameEnd)
        if(gameEnd=="gameNotEnd"){
            playerTurn(1,TicTacToeArray)
        }else{
            if(gameEnd=="Win"){
                document.getElementById("TryToWinFont").innerHTML="COMPUTER WINS"
            }else if(gameEnd=="Draw"){
                document.getElementById("TryToWinFont").innerHTML="DRAW"
            }
            gameEndFunc(gameEnd)
        }
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
        let gameEnd=gameEndCheck(TicTacToeArray)
        // console.log(gameEnd)
        if(gameEnd=="gameNotEnd"){
            playerTurn(0,TicTacToeArray)
        }else{
            if(gameEnd=="Win"){
                document.getElementById("TryToWinFont").innerHTML="COMPUTER WINS"
            }else if(gameEnd=="Draw"){
                document.getElementById("TryToWinFont").innerHTML="DRAW"
            }
            gameEndFunc(gameEnd)
        }
        // console.log(svg)
    }
}

function playerTurn(turn,TicTacToeArray){
    totalturnCount+=1
    document.getElementById("TryToWinFont").innerHTML="YOUR TURN"
    document.getElementById("TryToWinFont").style.animation="fadeinAniamtion 1s forwards";
    document.getElementById("Try to win").style.cursor="pointer";
    console.log(TicTacToeArray)
    let svg=document.getElementById("TicTacToe")
    svgClickAbort=new AbortController()
    svg.addEventListener("click",(event)=>tictactoeclicked(turn,TicTacToeArray,event),{once:true, signal:svgClickAbort.signal})
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
            yOffset=83.34
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
            yOffset=83.34
            // console.log("8")
    }else if (event.x>dimentions.left+dimentions.width*2/3 && event.x<=dimentions.left+dimentions.width){
        xOffset=83.34
        // console.log("3,6,9")
        if (event.y>=dimentions.top && event.y<=dimentions.top+dimentions.height/3){
            yOffset=16.66
            // console.log("3")
        }else if (event.y>dimentions.top+dimentions.height/3 && event.y<=dimentions.top+dimentions.height*2/3){
            yOffset=50
            // console.log("6")
        }else if (event.y>dimentions.top+dimentions.height*2/3 && event.y<=dimentions.top+dimentions.height) 
            yOffset=83.34
            // console.log("9")
    }
    if(yOffset!=0 && xOffset!=0){
        if(TicTacToeArray[Math.floor(yOffset/33.33)][Math.floor(xOffset/33.33)]!=null){
            let svg=document.getElementById("TicTacToe")
            svg.addEventListener("click",(event)=>tictactoeclicked(turn,TicTacToeArray,event),{once:true})
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
        let gameEnd=gameEndCheck(TicTacToeArray)
        // console.log(gameEnd)
        // playerTurn(0,TicTacToeArray)
        if(gameEnd=="gameNotEnd"){
            computerTurn(1,TicTacToeArray)
        }else{
            if(gameEnd=="Win"){
                document.getElementById("TryToWinFont").innerHTML="YOU WIN"
            }else if(gameEnd=="Draw"){
                document.getElementById("TryToWinFont").innerHTML="DRAW"
            }
            gameEndFunc(gameEnd)
        }
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
        let gameEnd=gameEndCheck(TicTacToeArray)
        // console.log(gameEnd)
        // playerTurn(0,TicTacToeArray)
        if(gameEnd=="gameNotEnd"){
            computerTurn(0,TicTacToeArray)
        }else{
            if(gameEnd=="Win"){
                document.getElementById("TryToWinFont").innerHTML="YOU WIN"
            }else if(gameEnd=="Draw"){
                document.getElementById("TryToWinFont").innerHTML="DRAW"
            }
            gameEndFunc(gameEnd)
        }
        return
        // console.log(svg)
    }
    let svg=document.getElementById("TicTacToe")
    svg.addEventListener("click",(event)=>tictactoeclicked(turn,TicTacToeArray,event),{once:true})
    // console.log(event)
}
