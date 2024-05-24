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
let raycaster = new THREE.Raycaster();
let vertexes=[]
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
    const intersects = raycaster.intersectObjects( scene.children, false );
    for ( let i = 0; i < intersects.length; i ++ ) {
        if(intersects[ i ].object.geometry.type=="SphereGeometry"){
            intersects[ i ].object.material.color.set( 0xff9966 );
            intersects[ i ].object.material.opacity=( 1 );
        }
	}    
    renderer.render( scene, camera );
}

function colorNormal(){
    let children = scene.children
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


function singlePlayerClick(event){
    document.getElementById("Single Player").style.width='50%'
    document.getElementById("Double Player").style.width="50%";
    document.getElementById("Play Online").style.width="0%";
    document.getElementById("Play Online").style.padding="0%";
    document.getElementById("Play Online").style.border="0";
    document.getElementById("Play Online").innerHTML="";
    document.getElementById("Single Player").innerHTML='Start the Game'
    document.getElementById("Double Player").innerHTML="Let Computer Start";
    document.getElementById("Single Player").addEventListener('click',PlayerStart)


}

function PlayerStart(){
    document.getElementById("3dGame").addEventListener( 'mousemove', onPointerMove );
    document.getElementById("3dGame").addEventListener( 'click', onMouseClick );


}


animate();
startAnimation()
document.getElementById("Single Player").addEventListener('click',singlePlayerClick)


function onPointerMove( event ) {
    pointerMove.x = ( (event.clientX-document.getElementById("3dGame").getBoundingClientRect().left) / document.getElementById("3dGame").offsetWidth) * 2 - 1;
    pointerMove.y = - ( (event.clientY-document.getElementById("3dGame").getBoundingClientRect().top) / document.getElementById("3dGame").offsetHeight ) * 2 + 1;
    colorNormal()
    hoverCheck()
}

function onMouseClick( event ) {
    pointerClick.x = ( (event.clientX-document.getElementById("3dGame").getBoundingClientRect().left) / document.getElementById("3dGame").offsetWidth) * 2 - 1;
    pointerClick.y = - ( (event.clientY-document.getElementById("3dGame").getBoundingClientRect().top) / document.getElementById("3dGame").offsetHeight ) * 2 + 1;
    MouseClickCheck()
}
var turn =0
async function MouseClickCheck(){
    raycaster.setFromCamera( pointerClick, camera );
    const intersects = raycaster.intersectObjects(vertexes); 
    if(intersects.length>0){
        const position=intersects[intersects.length-1].object.position
        console.log(intersects)
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
            while(check<0.75){
                sphere.scale.x*=radius
                sphere.scale.y*=radius
                sphere.scale.z*=radius
                check*=radius
                await sleep(15)
            }  
            turn =1 
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
            while(check<1){
                cube1.scale.x*=radius
                cube2.scale.x*=radius
                check*=radius
                await sleep(15)
            } 
            turn =0
        }
    }
}