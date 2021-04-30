import * as THREE from '../../node_modules/three/build/three.module.js'

// Initialization
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500)
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);
camera.position.z = 10;

const scene = new THREE.Scene();

// Make the cube
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshPhongMaterial({ color: 0xFFFFFF, shininess: 0});
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

// Make light source
const light = new THREE.DirectionalLight(0xFFFFFF, 0.7);
light.position.set(-1, 2, 4);
scene.add(light);

// Render the cube
function render() {
    renderer.render(scene, camera);
    
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    requestAnimationFrame(render)
}
requestAnimationFrame(render)
