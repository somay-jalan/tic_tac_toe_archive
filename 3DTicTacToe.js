import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoundedBoxGeometry } from './RoundedBoxGeometry.js';

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


scene.fog = new THREE.Fog( 0x000000, 0.1, 4.5 );

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setClearColor( 0x000000, 0 );
const controls = new OrbitControls( camera, renderer.domElement );

var container = document.getElementById('3dTicTacToeConatiner');
var w = container.offsetWidth;
var h = container.offsetHeight;
renderer.setSize(w, h);
container.appendChild(renderer.domElement);
renderer.domElement.id = '3dGame';


camera.position.set( 0,0,3.25 ); 
camera.lookAt( 0, 0, 0 );
controls.update();
const pointerMove = new THREE.Vector2();
const pointerClick = new THREE.Vector2();

let INTERSECTED;
var turn;
let raycaster = new THREE.Raycaster();
let vertexes=[]
let gameArray;

for(let i=-1;i<2;i++){
    for(let j=-1;j<2;j++){
        for(let k=-1;k<2;k++){
            const geometry = new THREE.SphereGeometry( 0.05 );
            const material = new THREE.MeshBasicMaterial( { color: 0xFAEBD7,transparent:true,opacity:0.75} );
            const sphere = new THREE.Mesh( geometry, material );
            sphere.position.x=i
            sphere.position.y=j
            sphere.position.z=k
            scene.add( sphere );
            vertexes.push(sphere)

        }
    }
}

function check_exist(i, j, k) {
    if ((0 <= i && i <= 2) && (0 <= j && j <= 2) && (0 <= k && k <= 2)) {
        return true
    }
    else {
        return false
    }
}


function check_cube(gameArray, turn) {
    var exists = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                if (gameArray[i][j][k] == turn) {
                    if (check_exist(i + 1, j, k)) {
                        if (gameArray[i + 1][j][k] == turn) {
                            if (check_exist(i + 2, j, k)) {
                                if (gameArray[i + 2][j][k] == turn) {
                                    exists.push([i, j, k])
                                    exists.push([(i + 2), j, k])
                                }
                            }
                        }
                    }
                    if (check_exist(i, j + 1, k)) {
                        if (gameArray[i][j + 1][k] == turn) {
                            if (check_exist(i, j + 2, k)) {
                                if (gameArray[i][j + 2][k] == turn) {
                                    exists.push([i, j, k])
                                    exists.push([i, (j + 2), k])
                                }
                            }
                        }
                    }
                    if (check_exist(i, j, k + 1)) {
                        if (gameArray[i][j][k + 1] == turn) {
                            if (check_exist(i, j, k + 2)) {
                                if (gameArray[i][j][k + 2] == turn) {
                                    exists.push([i, j, k])
                                    exists.push([i, j, (k + 2)])
                                }
                            }
                        }
                    }
                    if (check_exist(i + 1, j + 1, k)) {
                        if (gameArray[i + 1][j + 1][k] == turn) {
                            if (check_exist(i + 2, j + 2, k)) {
                                if (gameArray[i + 2][j + 2][k] == turn) {
                                    exists.push([i, j, k])
                                    exists.push([(i + 2), (j + 2), k])
                                }
                            }
                        }
                    }
                    if (check_exist(i + 1, j, k + 1)) {
                        if (gameArray[i + 1][j][k + 1] == turn) {
                            if (check_exist(i + 2, j, k + 2)) {
                                if (gameArray[i + 2][j][k + 2] == turn) {
                                    exists.push([i, j, k])
                                    exists.push([(i + 2), j, (k + 2)])
                                }
                            }
                        }
                    }
                    if (check_exist(i, j + 1, k + 1)) {
                        if (gameArray[i][j + 1][k + 1] == turn) {
                            if (check_exist(i, j + 2, k + 2)) {
                                if (gameArray[i][j + 2][k + 2] == turn) {
                                    exists.push([i, j, k])
                                    exists.push([i, (j + 2), (k + 2)])
                                }
                            }
                        }
                    }
                    if (check_exist(i + 1, j - 1, k)) {
                        if (gameArray[i + 1][j - 1][k] == turn) {
                            if (check_exist(i + 2, j - 2, k)) {
                                if (gameArray[i + 2][j - 2][k] == turn) {
                                    exists.push([i, j, k])
                                    exists.push([(i + 2), (j - 2), k])
                                }
                            }
                        }
                    }
                    if (check_exist(i + 1, j, k - 1)) {
                        if (gameArray[i + 1][j][k - 1] == turn) {
                            if (check_exist(i + 2, j, k - 2)) {
                                if (gameArray[i + 2][j][k - 2] == turn) {
                                    exists.push([i, j, k])
                                    exists.push([(i + 2), j, (k - 2)])
                                }
                            }
                        }
                    }
                    if (check_exist(i, j + 1, k - 1)) {
                        if (gameArray[i][j + 1][k - 1] == turn) {
                            if (check_exist(i, j + 2, k - 2)) {
                                if (gameArray[i][j + 2][k - 2] == turn) {
                                    exists.push([i, j, k])
                                    exists.push([i, (j + 2), (k - 2)])
                                }
                            }
                        }
                    }
                    if (check_exist(i + 1, j + 1, k + 1)) {
                        if (gameArray[i + 1][j + 1][k + 1] == turn) {
                            if (check_exist(i + 2, j + 2, k + 2)) {
                                if (gameArray[i + 2][j + 2][k + 2] == turn) {
                                    exists.push([i, j, k])
                                    exists.push([(i + 2), (j + 2), (k + 2)])
                                }
                            }
                        }
                    }
                    if (check_exist(i + 1, j - 1, k + 1)) {
                        if (gameArray[i + 1][j - 1][k + 1] == turn) {
                            if (check_exist(i + 2, j - 2, k + 2)) {
                                if (gameArray[i + 2][j - 2][k + 2] == turn) {
                                    exists.push([i, j, k])
                                    exists.push([(i + 2), (j - 2), (k + 2)])
                                }
                            }
                        }
                    }
                    if (check_exist(i + 1, j + 1, k - 1)) {
                        if (gameArray[i + 1][j + 1][k - 1] == turn) {
                            if (check_exist(i + 2, j + 2, k - 2)) {
                                if (gameArray[i + 2][j + 2][k - 2] == turn) {
                                    exists.push([i, j, k])
                                    exists.push([(i + 2), (j + 2), (k - 2)])
                                }
                            }
                        }
                    }
                    if (check_exist(i - 1, j + 1, k + 1)) {
                        if (gameArray[i - 1][j + 1][k + 1] == turn) {
                            if (check_exist(i - 2, j + 2, k + 2)) {
                                if (gameArray[i - 2][j + 2][k + 2] == turn) {
                                    exists.push([i, j, k])
                                    exists.push([(i - 2), (j + 2), (k + 2)])
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(exists)
    return (exists)
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
    document.getElementById("3dTicTacToeFont").style.animation="fadeoutAniamtion 1s forwards";
    setTimeout(function(){
        // document.getElementById("TryToWinFont").remove()
        document.getElementById("Single Player").style.display="block";
        document.getElementById("Double Player").style.display="block";
        document.getElementById("Play Online").style.width="0%";
        document.getElementById("Play Online").style.padding="0%";
        document.getElementById("Play Online").style.border="0";
        document.getElementById("Play Online").innerHTML="";
        document.getElementById("Play Online").style.display="block";
    },1000)
    // document.getElementById("LetComputerStart").style.transition="0.4s";

    setTimeout(function(){
        typerwriter(50)
    },1000)
}

function animate() {
    
	requestAnimationFrame( animate );
    resize()
    controls.update();
    fogChange()
	renderer.render( scene, camera );
}

function fogChange(){
    if(scene.fog.far<10){
        scene.fog.far+=0.02
    }
}

function hoverCheck(){
    raycaster.setFromCamera( pointerMove, camera );
    const intersects = raycaster.intersectObjects( vertexes, false );
    for ( let i = 0; i < intersects.length; i ++ ) {
        const position=intersects[i].object.position
        if(gameArray[position.z+1][position.y+1][position.x+1]==null){
            if(intersects[ i ].object.geometry.type=="SphereGeometry"){
                intersects[ i ].object.material.color.set( 0xff9966 );
                intersects[ i ].object.material.opacity=( 1 );
            }
        }
        
	}    
    renderer.render( scene, camera );
}

function colorNormal(){
    let children = vertexes
    for ( let i = 0; i < children.length; i ++ ) {
		children[ i ].material.color.set( 0xFAEBD7 );
        children[ i ].material.opacity=( 0.75 );
	} 
    // console.log(children)
}

function resize() {
    var container = document.getElementById('3dTicTacToeConatiner');
    var w = container.offsetWidth;
    var h = container.offsetHeight;
    var min=Math.min(w,h)
    renderer.setSize(min, min);
    const canvas = renderer.domElement
    camera.aspect = canvas.clientWidth/canvas.clientHeight
    camera.updateProjectionMatrix()
}

function singlePlayerClick(){
    document.getElementById("Single Player").style.width='50%'
    document.getElementById("Double Player").style.width="50%";
    document.getElementById("Play Online").style.width="0%";
    document.getElementById("Play Online").style.padding="0%";
    document.getElementById("Play Online").style.border="0";
    document.getElementById("Play Online").innerHTML="";
    document.getElementById("Single Player").innerHTML='Start the Game'
    document.getElementById("Double Player").innerHTML="Let Computer Start";
    document.getElementById("Single Player").removeEventListener('click',singlePlayerClick)
    document.getElementById("Double Player").removeEventListener('click',DoublePlayerClick)
    document.getElementById("Single Player").addEventListener('click',PlayerTurn)
    document.getElementById("Double Player").addEventListener('click',computerTurn)
    turn=0
    gameArray=[[[null,null,null],[null,null,null],[null,null,null]],[[null,null,null],[null,null,null],[null,null,null]],[[null,null,null],[null,null,null],[null,null,null]]]

}

function DoublePlayerClick(){
    document.getElementById("Single Player").style.width='33.33%'
    document.getElementById("Double Player").style.width="33.33%";
    document.getElementById("Play Online").style.width="33.34%";
    document.getElementById("Play Online").style.padding="0.9vw 0.52vw";
    document.getElementById("Play Online").style.border="0.13vw dashed #ff9966";
    document.getElementById("Single Player").removeEventListener('click',singlePlayerClick)
    document.getElementById("Double Player").removeEventListener('click',DoublePlayerClick)
    document.getElementById("Single Player").innerHTML='Restart';
    document.getElementById("Double Player").innerHTML='Main Menu';
    document.getElementById("Play Online").innerHTML="Home Page";
    document.getElementById("Single Player").addEventListener('click',RestartDoublePlayer)
    document.getElementById("Double Player").addEventListener('click',MainMenu)
    document.getElementById("Play Online").addEventListener('click',HomePage)
    turn=0
    gameArray=[[[null,null,null],[null,null,null],[null,null,null]],[[null,null,null],[null,null,null],[null,null,null]],[[null,null,null],[null,null,null],[null,null,null]]]
    DoublePlayerPlay()
}

function DoublePlayerPlay(){
    document.getElementById("3dGame").addEventListener( 'mousemove', onPointerMove );
    document.getElementById("3dGame").addEventListener( 'click', onMouseClickDoublePlayer,{once:true} );
    if(turn==0){
        document.getElementById("3dTicTacToeFont").innerHTML="Player 1 Turn";
        document.getElementById("3dTicTacToeFont").style.animation="fadeinAniamtion 1s forwards";
    }else{
        document.getElementById("3dTicTacToeFont").innerHTML="Player 2 Turn";
        document.getElementById("3dTicTacToeFont").style.animation="fadeinAniamtion 1s forwards";
    }
}



function PlayerTurn(){
    document.getElementById("3dTicTacToeFont").innerHTML="Your Turn";
    document.getElementById("3dTicTacToeFont").style.animation="fadeinAniamtion 1s forwards";
    document.getElementById("Single Player").style.width='33.33%'
    document.getElementById("Double Player").style.width="33.33%";
    document.getElementById("Play Online").style.width="33.34%";
    document.getElementById("Play Online").innerHTML="Home Page";
    document.getElementById("Single Player").innerHTML='Restart';
    document.getElementById("Double Player").innerHTML='Main Menu';
    document.getElementById("Play Online").style.padding="0.9vw 0.52vw";
    document.getElementById("Play Online").style.border="0.13vw dashed #ff9966";
    document.getElementById("Single Player").removeEventListener('click',PlayerTurn)
    document.getElementById("Double Player").removeEventListener('click',computerTurn)

    document.getElementById("Single Player").addEventListener('click',RestartSinglePlayer)
    document.getElementById("Double Player").addEventListener('click',MainMenu)
    document.getElementById("Play Online").addEventListener('click',HomePage)

    document.getElementById("3dGame").addEventListener( 'mousemove', onPointerMove );
    document.getElementById("3dGame").addEventListener( 'click', onMouseClickSinglePlayer,{once:true} );
    

}

animate();
startAnimation()
document.getElementById("Single Player").addEventListener('click',singlePlayerClick)
document.getElementById("Double Player").addEventListener('click',DoublePlayerClick)

function onPointerMove( event ) {
    pointerMove.x = ( (event.clientX-document.getElementById("3dGame").getBoundingClientRect().left) / document.getElementById("3dGame").offsetWidth) * 2 - 1;
    pointerMove.y = - ( (event.clientY-document.getElementById("3dGame").getBoundingClientRect().top) / document.getElementById("3dGame").offsetHeight ) * 2 + 1;
    colorNormal()
    hoverCheck()
}

function onMouseClickSinglePlayer( event ) {
    pointerClick.x = ( (event.clientX-document.getElementById("3dGame").getBoundingClientRect().left) / document.getElementById("3dGame").offsetWidth) * 2 - 1;
    pointerClick.y = - ( (event.clientY-document.getElementById("3dGame").getBoundingClientRect().top) / document.getElementById("3dGame").offsetHeight ) * 2 + 1;
    MouseClickSinglePlayer()
}

function onMouseClickDoublePlayer(event){
    pointerClick.x = ( (event.clientX-document.getElementById("3dGame").getBoundingClientRect().left) / document.getElementById("3dGame").offsetWidth) * 2 - 1;
    pointerClick.y = - ( (event.clientY-document.getElementById("3dGame").getBoundingClientRect().top) / document.getElementById("3dGame").offsetHeight ) * 2 + 1;
    MouseClickDoublePlayer()
}

async function MouseClickSinglePlayer(){
    console.log(gameArray)
    raycaster.setFromCamera( pointerClick, camera );
    const intersects = raycaster.intersectObjects(vertexes); 
    if(intersects.length>0){
        const position=intersects[intersects.length-1].object.position
        if(gameArray[position.z+1][position.y+1][position.x+1]==null){
            gameArray[position.z+1][position.y+1][position.x+1]=turn
            if(turn==0){
                const geometry = new RoundedBoxGeometry( 0.05, 0.05, 0.05,1,50 );
                const material = new THREE.MeshBasicMaterial( { color: 0xFAEBD7,transparent:true,opacity:0.75, wireframe:true} );
                const sphere = new THREE.Mesh( geometry, material );
                sphere.position.x=position.x
                sphere.position.y=position.y
                sphere.position.z=position.z
                scene.add( sphere );
                let radius=1.05
                let check=0.05
                while(check<0.65){
                    sphere.scale.x*=radius
                    sphere.scale.y*=radius
                    sphere.scale.z*=radius
                    check*=radius
                    await sleep(15)
                }  
                var exists=check_cube(gameArray,turn)
                turn=1

                if(exists.length==0){
                    computerTurn()
                }else{
                    document.getElementById("3dTicTacToeFont").innerHTML="You Won";

                    for(let i=0;i<exists.length;i+=2){
                        const material = new THREE.LineBasicMaterial({ color: 0xFAEBD7 , linewidth:5,opacity:0.75});
                        const points = [];
                        points.push( new THREE.Vector3( exists[i][2]-1,exists[i][1]-1,exists[i][0]-1 ) );
                        points.push( new THREE.Vector3( exists[i+1][2]-1,exists[i+1][1]-1,exists[i+1][0]-1 ) );
                        const geometry = new THREE.BufferGeometry().setFromPoints( points );
                        
                        const line = new THREE.Line( geometry, material );
                        scene.add( line );                
                    }
                }
            }else{
                var geometry = new RoundedBoxGeometry( 0.05, 0.15, 0.15,0.5,50 );
                var material = new THREE.MeshBasicMaterial( { color: 0xFAEBD7,transparent:true,opacity:0.75 ,wireframe:true} );
                var cube1 = new THREE.Mesh( geometry, material );
                cube1.rotation.z=Math.PI/4
                cube1.position.x=position.x
                cube1.position.y=position.y
                cube1.position.z=position.z
                scene.add( cube1 );
                geometry = new RoundedBoxGeometry( 0.05, 0.15, 0.15,0.5,50 );
                material = new THREE.MeshBasicMaterial( { color: 0xFAEBD7,transparent:true,opacity:0.75 ,wireframe:true} );
                var cube2 = new THREE.Mesh( geometry, material );
                cube2.rotation.z=Math.PI/2+Math.PI/4
                cube2.position.x=position.x
                cube2.position.y=position.y
                cube2.position.z=position.z
                scene.add( cube2 );
                let radius=1.05
                let check=0.05
                while(check<0.85){
                    cube1.scale.x*=radius
                    cube2.scale.x*=radius
                    check*=radius
                    await sleep(15)
                } 
                var exists=check_cube(gameArray,turn)
                turn=0

                if(exists.length==0){
                    computerTurn()
                }else{
                    document.getElementById("3dTicTacToeFont").innerHTML="You Won";

                    for(let i=0;i<exists.length;i+=2){
                        const material = new THREE.LineBasicMaterial({ color: 0xFAEBD7 , linewidth:5,opacity:0.75});
                        const points = [];
                        points.push( new THREE.Vector3( exists[i][2]-1,exists[i][1]-1,exists[i][0]-1 ) );
                        points.push( new THREE.Vector3( exists[i+1][2]-1,exists[i+1][1]-1,exists[i+1][0]-1 ) );
                        
                        const geometry = new THREE.BufferGeometry().setFromPoints( points );
                        
                        const line = new THREE.Line( geometry, material );
                        scene.add( line );                
                    }
                }
            }
        }else{
            document.getElementById("3dGame").addEventListener( 'click', onMouseClickSinglePlayer,{once:true} );
        }
    }else{
        document.getElementById("3dGame").addEventListener( 'click', onMouseClickSinglePlayer,{once:true} );

    }
}

async function MouseClickDoublePlayer(){
    console.log(gameArray)
    raycaster.setFromCamera( pointerClick, camera );
    const intersects = raycaster.intersectObjects(vertexes); 
    if(intersects.length>0){
        const position=intersects[intersects.length-1].object.position
        if(gameArray[position.z+1][position.y+1][position.x+1]==null){
            gameArray[position.z+1][position.y+1][position.x+1]=turn
            if(turn==0){
                const geometry = new RoundedBoxGeometry( 0.05, 0.05, 0.05,1,50 );
                const material = new THREE.MeshBasicMaterial( { color: 0xFAEBD7,transparent:true,opacity:0.75, wireframe:true} );
                const sphere = new THREE.Mesh( geometry, material );
                sphere.position.x=position.x
                sphere.position.y=position.y
                sphere.position.z=position.z
                scene.add( sphere );
                let radius=1.05
                let check=0.05
                while(check<0.65){
                    sphere.scale.x*=radius
                    sphere.scale.y*=radius
                    sphere.scale.z*=radius
                    check*=radius
                    await sleep(15)
                }  
                var exists=check_cube(gameArray,turn)
                turn=1

                if(exists.length==0){
                    DoublePlayerPlay()
                }else{
                    document.getElementById("3dTicTacToeFont").innerHTML="Player 1 Won";

                    for(let i=0;i<exists.length;i+=2){
                        const material = new THREE.LineBasicMaterial({ color: 0xFAEBD7 , linewidth:5,opacity:0.75});
                        const points = [];
                        points.push( new THREE.Vector3( exists[i][2]-1,exists[i][1]-1,exists[i][0]-1 ) );
                        points.push( new THREE.Vector3( exists[i+1][2]-1,exists[i+1][1]-1,exists[i+1][0]-1 ) );
                        const geometry = new THREE.BufferGeometry().setFromPoints( points );
                        
                        const line = new THREE.Line( geometry, material );
                        scene.add( line );                
                    }
                }
            }else{
                var geometry = new RoundedBoxGeometry( 0.05, 0.15, 0.15,0.5,50 );
                var material = new THREE.MeshBasicMaterial( { color: 0xFAEBD7,transparent:true,opacity:0.75 ,wireframe:true} );
                var cube1 = new THREE.Mesh( geometry, material );
                cube1.rotation.z=Math.PI/4
                cube1.position.x=position.x
                cube1.position.y=position.y
                cube1.position.z=position.z
                scene.add( cube1 );
                geometry = new RoundedBoxGeometry( 0.05, 0.15, 0.15,0.5,50 );
                material = new THREE.MeshBasicMaterial( { color: 0xFAEBD7,transparent:true,opacity:0.75 ,wireframe:true} );
                var cube2 = new THREE.Mesh( geometry, material );
                cube2.rotation.z=Math.PI/2+Math.PI/4
                cube2.position.x=position.x
                cube2.position.y=position.y
                cube2.position.z=position.z
                scene.add( cube2 );
                let radius=1.05
                let check=0.05
                while(check<0.85){
                    cube1.scale.x*=radius
                    cube2.scale.x*=radius
                    check*=radius
                    await sleep(15)
                } 
                var exists=check_cube(gameArray,turn)
                turn=0

                if(exists.length==0){
                    DoublePlayerPlay()
                }else{
                    document.getElementById("3dTicTacToeFont").innerHTML="Player 2 Won";

                    for(let i=0;i<exists.length;i+=2){
                        const material = new THREE.LineBasicMaterial({ color: 0xFAEBD7 , linewidth:5,opacity:0.75});
                        const points = [];
                        points.push( new THREE.Vector3( exists[i][2]-1,exists[i][1]-1,exists[i][0]-1 ) );
                        points.push( new THREE.Vector3( exists[i+1][2]-1,exists[i+1][1]-1,exists[i+1][0]-1 ) );
                        
                        const geometry = new THREE.BufferGeometry().setFromPoints( points );
                        
                        const line = new THREE.Line( geometry, material );
                        scene.add( line );                
                    }
                }
            }
        }else{
            document.getElementById("3dGame").addEventListener( 'click', onMouseClickDoublePlayer,{once:true} );
        }
    }else{
        document.getElementById("3dGame").addEventListener( 'click', onMouseClickDoublePlayer,{once:true} );

    }
}

async function computerTurn(){
    document.getElementById("Play Online").innerHTML="Home Page";
    document.getElementById("Single Player").innerHTML='Restart';
    document.getElementById("Double Player").innerHTML='Main Menu';
    document.getElementById("Single Player").style.width='33%'
    document.getElementById("Double Player").style.width="33%";
    document.getElementById("Play Online").style.width="33%";
    document.getElementById("Play Online").style.padding="0.9vw 0.52vw";
    document.getElementById("Play Online").style.border="0.13vw dashed #ff9966";
    document.getElementById("Single Player").removeEventListener('click',PlayerTurn)
    document.getElementById("Double Player").removeEventListener('click',computerTurn)

    document.getElementById("Single Player").addEventListener('click',RestartSinglePlayer)
    document.getElementById("Double Player").addEventListener('click',MainMenu)
    document.getElementById("Play Online").addEventListener('click',HomePage)

    document.getElementById("3dTicTacToeFont").innerHTML="Computer Turn";
    document.getElementById("3dTicTacToeFont").style.animation="fadeinAniamtion 1s forwards";

    let emptyPositionCheck=0
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            for(let k=0;k<3;k++){
                if(gameArray[i][j][k]==null){
                    emptyPositionCheck=1
                }
            }
        }
    }
    if(emptyPositionCheck==0){
        console.log("gameEnd")
        return
    }
    let x;
    let y;
    let z;
    while(true){
        let i=Math.floor(Math.random() * 3);
        let j=Math.floor(Math.random() * 3);
        let k=Math.floor(Math.random() * 3);
        if(gameArray[k][j][i]==null){
            x=i
            y=j
            z=k
            break
        }
    }
    gameArray[z][y][x]=turn
    if(turn==0){
        const geometry = new RoundedBoxGeometry( 0.05, 0.05, 0.05,1,50 );
        const material = new THREE.MeshBasicMaterial( { color: 0xFAEBD7,transparent:true,opacity:0.75, wireframe:true} );
        const sphere = new THREE.Mesh( geometry, material );
        sphere.position.x=x-1
        sphere.position.y=y-1
        sphere.position.z=z-1
        scene.add( sphere );
        let radius=1.05
        let check=0.05
        while(check<0.65){
            sphere.scale.x*=radius
            sphere.scale.y*=radius
            sphere.scale.z*=radius
            check*=radius
            await sleep(15)
        }  
        var exists=check_cube(gameArray,turn)
        turn=1
        if(exists.length==0){
            PlayerTurn()
        }else{
            document.getElementById("3dTicTacToeFont").innerHTML="Computer Won";
            for(let i=0;i<exists.length;i+=2){
                const material = new THREE.LineBasicMaterial({ color: 0xFAEBD7 , linewidth:5,opacity:0.75});
                const points = [];
                points.push( new THREE.Vector3( exists[i][2]-1,exists[i][1]-1,exists[i][0]-1 ) );
                points.push( new THREE.Vector3( exists[i+1][2]-1,exists[i+1][1]-1,exists[i+1][0]-1 ) );
                
                const geometry = new THREE.BufferGeometry().setFromPoints( points );
                
                const line = new THREE.Line( geometry, material );
                scene.add( line );                
            }
        }   
    }else{
        var geometry = new RoundedBoxGeometry( 0.05, 0.15, 0.15,0.5,50 );
        var material = new THREE.MeshBasicMaterial( { color: 0xFAEBD7,transparent:true,opacity:0.75 ,wireframe:true} );
        var cube1 = new THREE.Mesh( geometry, material );
        cube1.rotation.z=Math.PI/4
        cube1.position.x=x-1
        cube1.position.y=y-1
        cube1.position.z=z-1
        scene.add( cube1 );
        geometry = new RoundedBoxGeometry( 0.05, 0.15, 0.15,0.5,50 );
        material = new THREE.MeshBasicMaterial( { color: 0xFAEBD7,transparent:true,opacity:0.75 ,wireframe:true} );
        var cube2 = new THREE.Mesh( geometry, material );
        cube2.rotation.z=Math.PI/2+Math.PI/4
        cube2.position.x=x-1
        cube2.position.y=y-1
        cube2.position.z=z-1
        scene.add( cube2 );
        let radius=1.05
        let check=0.05
        while(check<0.85){
            cube1.scale.x*=radius
            cube2.scale.x*=radius
            check*=radius
            await sleep(15)
        } 
        var exists=check_cube(gameArray,turn)
        turn=0
        if(exists.length==0){
            PlayerTurn()
        }else{
            document.getElementById("3dTicTacToeFont").innerHTML="Computer Won";
            for(let i=0;i<exists.length;i=i+2){
                const material = new THREE.LineBasicMaterial({ color: 0xFAEBD7 , linewidth:5,opacity:0.75});
                const points = [];
                points.push( new THREE.Vector3( exists[i][2]-1,exists[i][1]-1,exists[i][0]-1 ) );
                points.push( new THREE.Vector3( exists[i+1][2]-1,exists[i+1][1]-1,exists[i+1][0]-1 ) );
                // points.push( new THREE.Vector3( -1,-1,-1 ) );
                // points.push( new THREE.Vector3( 1,1,1) );
                
                const geometry = new THREE.BufferGeometry().setFromPoints( points );
                const line = new THREE.Line( geometry, material );
                scene.add( line );                
            }
        }
    }

}

function RestartSinglePlayer(){
    document.getElementById("Single Player").removeEventListener('click',RestartSinglePlayer)
    document.getElementById("Double Player").removeEventListener('click',MainMenu)
    document.getElementById("Play Online").removeEventListener('click',HomePage)
    document.getElementById("3dGame").removeEventListener( 'mousemove', onPointerMove );
    document.getElementById("3dGame").removeEventListener( 'click', onMouseClickSinglePlayer );
    document.getElementById("3dTicTacToeFont").style.animation="fadeoutAniamtion 1s forwards";

    while (scene.children.length){
        scene.remove(scene.children[0]);
    }
    vertexes=[]
    for(let i=-1;i<2;i++){
        for(let j=-1;j<2;j++){
            for(let k=-1;k<2;k++){
                const geometry = new THREE.SphereGeometry( 0.05 );
                const material = new THREE.MeshBasicMaterial( { color: 0xFAEBD7,transparent:true,opacity:0.75} );
                const sphere = new THREE.Mesh( geometry, material );
                sphere.position.x=i
                sphere.position.y=j
                sphere.position.z=k
                scene.add( sphere );
                vertexes.push(sphere)
    
            }
        }
    }
    singlePlayerClick()
}

function RestartDoublePlayer(){
    document.getElementById("Single Player").removeEventListener('click',RestartDoublePlayer)
    document.getElementById("Double Player").removeEventListener('click',MainMenu)
    document.getElementById("Play Online").removeEventListener('click',HomePage)
    document.getElementById("3dGame").removeEventListener( 'mousemove', onPointerMove );
    document.getElementById("3dGame").removeEventListener( 'click', onMouseClickDoublePlayer );
    document.getElementById("3dTicTacToeFont").style.animation="fadeoutAniamtion 1s forwards";

    while (scene.children.length){
        scene.remove(scene.children[0]);
    }
    vertexes=[]
    for(let i=-1;i<2;i++){
        for(let j=-1;j<2;j++){
            for(let k=-1;k<2;k++){
                const geometry = new THREE.SphereGeometry( 0.05 );
                const material = new THREE.MeshBasicMaterial( { color: 0xFAEBD7,transparent:true,opacity:0.75} );
                const sphere = new THREE.Mesh( geometry, material );
                sphere.position.x=i
                sphere.position.y=j
                sphere.position.z=k
                scene.add( sphere );
                vertexes.push(sphere)
    
            }
        }
    }
    DoublePlayerClick()
}

function MainMenu(){
    document.getElementById("Single Player").removeEventListener('click',RestartSinglePlayer)
    document.getElementById("Single Player").removeEventListener('click',RestartDoublePlayer)

    document.getElementById("Double Player").removeEventListener('click',MainMenu)
    document.getElementById("Play Online").removeEventListener('click',HomePage)
    
    document.getElementById("3dGame").removeEventListener( 'mousemove', onPointerMove );
    document.getElementById("3dGame").removeEventListener( 'click', onMouseClickSinglePlayer );
    document.getElementById("3dGame").removeEventListener( 'click', onMouseClickDoublePlayer );

    document.getElementById("3dTicTacToeFont").style.animation="fadeoutAniamtion 1s forwards";

    while (scene.children.length){
        scene.remove(scene.children[0]);
    }
    vertexes=[]
    for(let i=-1;i<2;i++){
        for(let j=-1;j<2;j++){
            for(let k=-1;k<2;k++){
                const geometry = new THREE.SphereGeometry( 0.05 );
                const material = new THREE.MeshBasicMaterial( { color: 0xFAEBD7,transparent:true,opacity:0.75} );
                const sphere = new THREE.Mesh( geometry, material );
                sphere.position.x=i
                sphere.position.y=j
                sphere.position.z=k
                scene.add( sphere );
                vertexes.push(sphere)
    
            }
        }
    }
    document.getElementById("Single Player").style.width='50%'
    document.getElementById("Double Player").style.width="50%";
    document.getElementById("Play Online").style.width="0%";
    document.getElementById("Play Online").style.padding="0%";
    document.getElementById("Play Online").style.border="0";
    document.getElementById("Play Online").innerHTML="";
    document.getElementById("Single Player").innerHTML='Single Player';
    document.getElementById("Double Player").innerHTML='Double Player';

    document.getElementById("Single Player").addEventListener('click',singlePlayerClick)
    document.getElementById("Double Player").addEventListener('click',DoublePlayerClick)



}

function HomePage(){
    window.location.href="/index.html"
}