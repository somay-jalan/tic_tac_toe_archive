import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
scene.fog = new THREE.Fog( 0x000000, 0.1, 15 );

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setClearColor( 0x000000, 0 );

var container = document.getElementById('3dTicTacToeConatiner');
var w = container.offsetWidth;
var h = container.offsetHeight;
renderer.setSize(w, h);
container.appendChild(renderer.domElement);
for(let i=-1;i<2;i++){
    for(let j=-1;j<2;j++){
        for(let k=-1;k<2;k++){
            const geometry = new THREE.BoxGeometry( 0.5, 0.5, 0.5 );
            const material = new THREE.MeshBasicMaterial( { color: 0xFAEBD7,transparent:true,wireframe:true} );
            const cube = new THREE.Mesh( geometry, material );
            cube.position.x=i
            cube.position.y=j
            cube.position.z=k
            scene.add( cube );
        }
    }
}

camera.position.z = 4;
// camera.position.x = 1.5;
// camera.position.y = 1.5;


let resized = false

function animate() {
    
	requestAnimationFrame( animate );
    resize()
	// cube.rotation.x += 0.01;
	// cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();





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


