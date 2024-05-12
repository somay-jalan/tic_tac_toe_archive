const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
async function typerwriter(speed){
    document.getElementById("typewriter").style.opacity=1;
    var element=document.getElementById("typewriter").innerHTML
    document.getElementById("typewriter").innerHTML=""
    console.log(element);
    for(let i=0;i<element.length;i++){
        document.getElementById("typewriter").innerHTML=element.substring(0,i+1)+'<cursor aria-hidden="true"></cursor>'
        var randSpeed=speed+(Math.random()-0.5)*speed
        // console.log(randSpeed)
        await sleep(randSpeed);
        
    }
}


