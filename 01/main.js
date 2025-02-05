import * as THREE from 'three';
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const loader = new GLTFLoader();

loader.load(
  "birdsA_eagle.gltf",
  "quadruped_bear.gltf",
  "birds_raven.gltf",
  function (gltf) {
    scene.add(gltf.scene);
    
  },
  undefined,
  function (error) {
    console.error(error);
  }
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene,camera);

}
// I followed the docs for THREE.js but I still could not get the gtlf file to render. :(
window.onload = function() {
animate();
}