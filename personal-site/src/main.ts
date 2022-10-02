import './style.css'
import * as THREE from 'three';
import { FlyControls } from 'three/examples/jsm/controls/FlyControls';

// Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 
  window.innerWidth / window.innerHeight, 0.1, 1000);

  // Renderer
const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Geometry
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial({color: 0xffffff});

const cubes: THREE.Mesh[] = []
// Add cubes throughout the scene

const createCube = (x :number, y: number, z: number) => {
  const cube = new THREE.Mesh( geometry, material );
  cube.position.set(x, y, z)
  scene.add( cube );
  cubes.push(cube);
}

const createCubeField = () => {
  for(let i = -100; i < 100; i+=10){
    for(let j = -100; j < 100; j+=10) {
      for(let k = 0; k > -200; k-=10) {
        createCube(i, j, k);
      }
    }
  }
}

createCubeField();

const flyingControls = new FlyControls(camera, renderer.domElement);
flyingControls.dragToLook = false;
flyingControls.rollSpeed = 0.003;
flyingControls.movementSpeed = 0.5;

camera.position.z = 10;

const animate = () => {
  requestAnimationFrame(animate)
  cubes.forEach(cube => {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  })
  flyingControls.update(1);
  renderer.render(scene, camera)
}
animate();
