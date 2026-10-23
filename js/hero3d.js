// adaptado do exemplo oficial three.js: webgl_clipping
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

const canvas = document.getElementById('hero-canvas');
if (canvas) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
  camera.position.set(0, 0, 3.2);

  scene.add(new THREE.AmbientLight(0xffffff, 0.6));
  const spot = new THREE.SpotLight(0xffffff, 60);
  spot.position.set(-2, 3, 4);
  scene.add(spot);

  // tres planos de corte formando um prisma ao redor do objeto
  const planes = [
    //new THREE.Plane(new THREE.Vector3(1, 0, 0), 0.4),
    //new THREE.Plane(new THREE.Vector3(0, -1, 0), 0.4),
    new THREE.Plane(new THREE.Vector3(0, 0, -1), 0.4),
  ];

  const material = new THREE.MeshPhongMaterial({
    color: 0x67ff41, shininess: 90, side: THREE.DoubleSide,
    clippingPlanes: planes, clipShadows: true, wireframe: true
  });
  const knot = new THREE.Mesh(new THREE.TorusKnotGeometry(0.85, 0.28, 200, 24), material);
  scene.add(knot);

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  const size = canvas.clientWidth;
  renderer.setSize(size, size);
  renderer.localClippingEnabled = true;

  let t = 0;
  (function animate() {
    requestAnimationFrame(animate);
    t += 0.01;
    knot.rotation.x += 0.000075;
    knot.rotation.y += 0.0001;
    planes[0].constant = 0.4 + Math.sin(t) * 0.25;
    renderer.render(scene, camera);
  })();
}