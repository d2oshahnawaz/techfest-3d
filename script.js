const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({
antialias:true,
alpha:true
});

renderer.setSize(500,500);

document
.getElementById("canvas-container")
.appendChild(renderer.domElement);

const geometry =
new THREE.SphereGeometry(2,64,64);

const material =
new THREE.MeshStandardMaterial({
color:0x00ffff,
wireframe:true
});

const sphere =
new THREE.Mesh(geometry,material);

scene.add(sphere);

const light =
new THREE.PointLight(0xffffff,2);

light.position.set(5,5,5);

scene.add(light);

camera.position.z=5;

function animate(){

requestAnimationFrame(animate);

sphere.rotation.y += 0.01;
sphere.rotation.x += 0.005;

renderer.render(scene,camera);
}

animate();

window.addEventListener("resize",()=>{

camera.aspect =
window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(500,500);

});
