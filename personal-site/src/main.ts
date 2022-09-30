import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 
  window.innerWidth / window.innerHeight, 0.1, 1000);

  // Rendered
const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Geometry
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

camera.position.z = 5;

const animate = () => {
  requestAnimationFrame(animate)
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  controls.update();
  renderer.render(scene, camera)
}
animate();
