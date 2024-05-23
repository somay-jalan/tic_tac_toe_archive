import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { RoundedBoxGeometry } from './RoundedBoxGeometry.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
scene.fog = new THREE.Fog( 0x000000, 0.1, 4 );

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setClearColor( 0x000000, 0 );

var container = document.getElementById('3dTicTacToeConatiner');
var w = container.offsetWidth;
var h = container.offsetHeight;
renderer.setSize(w, h);
container.appendChild(renderer.domElement);

const boom = new THREE.Group();
boom.add(camera);
scene.add(boom);
camera.position.set( 0,0,3.25 ); 
camera.lookAt( 0, 0, 0 );
var sphereCross=[]
for(let i=-1;i<2;i++){
    for(let j=-1;j<2;j++){
        for(let k=-1;k<2;k++){
            var random=Math.random()
            if(random<0.33){
                const geometry = new RoundedBoxGeometry( 0.5, 0.5, 0.5,1,50 );
                const material = new THREE.MeshBasicMaterial( { color: 0xFAEBD7,transparent:true,opacity:0.75} );
                const sphere = new THREE.Mesh( geometry, material );
                const edges = new THREE.EdgesGeometry( geometry ); 
                const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial( { color: 0xFAEBD7 } ) ); 
                line.position.set(i,j,k)
                sphere.position.x=i
                sphere.position.y=j
                sphere.position.z=k
                scene.add( sphere );
                scene.add( line );
                sphereCross.push(sphere,line)
            }else if(random<0.66){
                var geometry = new RoundedBoxGeometry( 0.5, 0.15, 0.15,0.5,50 );
                var material = new THREE.MeshBasicMaterial( { color: 0xFAEBD7,transparent:true,opacity:0.75} );
                var cube = new THREE.Mesh( geometry, material );
                var edges = new THREE.EdgesGeometry( geometry ); 
                var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial( { color: 0xFAEBD7 } ) ); 
                line.position.set(i,j,k)
                line.rotation.z=Math.PI/4
                cube.rotation.z=Math.PI/4
                cube.position.x=i
                cube.position.y=j
                cube.position.z=k
                scene.add( cube );
                scene.add( line );
                sphereCross.push(cube,line)
                geometry = new RoundedBoxGeometry( 0.5, 0.15, 0.15,0.5,50 );
                material = new THREE.MeshBasicMaterial( { color: 0xFAEBD7,transparent:true,opacity:0.75} );
                cube = new THREE.Mesh( geometry, material );
                edges = new THREE.EdgesGeometry( geometry ); 
                line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial( { color: 0xFAEBD7 } ) ); 
                line.position.set(i,j,k)
                line.rotation.z=Math.PI/2+Math.PI/4
                cube.rotation.z=Math.PI/2+Math.PI/4
                cube.position.x=i
                cube.position.y=j
                cube.position.z=k
                scene.add( cube );
                scene.add( line );
                sphereCross.push(cube,line)
            }

            geometry = new THREE.SphereGeometry( 0.05 );
            material = new THREE.MeshBasicMaterial( { color: 0xFAEBD7,transparent:true,opacity:0.75} );
            const sphere = new THREE.Mesh( geometry, material );
            edges = new THREE.EdgesGeometry( geometry ); 
            line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial( { color: 0xFAEBD7 } ) ); 
            line.position.set(i,j,k)
            sphere.position.x=i
            sphere.position.y=j
            sphere.position.z=k
            scene.add( sphere );
            scene.add( line );

        }
    }
}

// camera.position.z = 4;
// camera.position.x = 1.5;
// camera.position.y = 1.5;


let resized = false

function animate() {
    
	requestAnimationFrame( animate );
    resize()
    angleCheck()
	// cube.rotation.x += 0.01;
	// cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();


document.onmousemove=handleMouseMove

var xRotationNew=0
var xRotationOld=0

var yRotationNew=0
var yRotationOld=0
function angleCheck(){
    if (xRotationOld!=xRotationNew){
        xRotationOld=xRotationNew
    }
    if (yRotationOld!=yRotationNew){
        yRotationOld=yRotationNew
    }
    boom.rotation.x=(xRotationOld/document.body.clientWidth-0.5)*2*Math.PI;
    // camera.position.x=xRotationOld/document.body.clientWidth-0.5;
    boom.rotation.y=(yRotationOld/document.body.clientHeight-0.5)*2*Math.PI;
    boom.rotation.z=((yRotationOld+xRotationOld)/(document.body.clientHeight+document.body.clientWidth)-0.5)*2*Math.PI;

}

function handleMouseMove(event) {
    var eventDoc, doc, body;

    event = event || window.event; // IE-ism

    // If pageX/Y aren't available and clientX/Y are,
    // calculate pageX/Y - logic taken from jQuery.
    // (This is to support old IE)
    if (event.pageX == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;

        event.pageX = event.clientX +
            (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
            (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = event.clientY +
            (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
            (doc && doc.clientTop  || body && body.clientTop  || 0 );
    }
    xRotationNew=event.pageX
    yRotationNew=event.pageY

    // console.log(event.pageX,event.pageY)

    // Use event.pageX / event.pageY here
}



function resize() {
    resized = false
    var container = document.getElementById('3dTicTacToeConatiner');
    var w = container.offsetWidth;
    var h = container.offsetHeight;
    var min=Math.min(w,h)
    renderer.setSize(min, min);
    const canvas = renderer.domElement
    camera.aspect = canvas.clientWidth/canvas.clientHeight
    camera.updateProjectionMatrix()
}


var card3d = document.getElementById('3d');

card3d.addEventListener('click',TransitionTo3dTicTacToePage)


function TransitionTo3dTicTacToePage(Event){
    console.log("clicked")
    for(let element in sphereCross){
        // console.log(sphereCross[element])
        scene.remove(sphereCross[element])
    }
    document.onmousemove=null
    setTimeout(function(){
        
    },100)
    xRotationNew=document.body.clientWidth/2
    yRotationNew=document.body.clientHeight/2
    document.getElementById("Try to win").style.animation="fadeoutAniamtion 0.1s forwards";
    document.getElementById("weird").style.animation="fadeoutAniamtion 0.1s forwards";
    document.getElementById("typewriter").style.animation="fadeoutAniamtion 0.3s forwards";
    document.getElementById("3d").classList.remove("cardHover");
    document.getElementById("3d").style.width="45.57vw";
    document.getElementById("3d").style.height="94.2vh";
    document.getElementById("3d").style.top="2%";
    document.getElementById("3d").style.left="27.5%";
    document.getElementById("3d").style.position="fixed";
    document.getElementById("3dTicTacToeFont").style.fontSize="6vh";
    document.getElementById("3dTicTacToeFont").style.marginTop="3vh";
}
