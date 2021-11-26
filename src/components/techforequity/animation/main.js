window.addEventListener('load', initialize);

function initialize() {
  // Initialize scene
  const scene = new THREE.Scene();

  // Initialize camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );

  // Initialize renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('cnv'),
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0xffffff, 0);

  // Initialize light and grid
  const ambientLight = new THREE.AmbientLight(0xffffff);
  scene.add(ambientLight);
  const gridHelper = new THREE.GridHelper(200, 50);
  //scene.add(gridHelper);

  const geometry = new THREE.BufferGeometry();
  let min = 1000000;
  let max = -1000000;
  let point_width = Math.sqrt(everest.length);
  const points = [],
    heights = [];
  let x, y, z;

  // define local average
  for (let i = 0; i < everest.length; i++) {
    x = everest[i][0];
    y = everest[i][1];
    z = everest[i][2];
    if (y < min) min = y;
    if (y > max) max = y;
  }
  for (let i = 0; i < everest.length; i++) {
    x = everest[i][0] * 2;
    y = everest[i][1];
    z = everest[i][2];
    heights.push(x, y - min, z);
    points.push(x, 0, z);

    // x += 1;
    // if (i > 0 && i < everest.length - 1) {
    //   y = (y + everest[i - 1][1] + everest[i + 1][1]) / 3;
    //   z = (z + everest[i - 1][2] + everest[i + 1][2]) / 3;
    // }
    // points.push(x, y - min, z);
  }

  function easeOutQuad(t) {
    return t * (2 - t);
  }
  let up = true;
  let updateShapes = () => {
    for (let i = 1; i < points.length; i+=3) {
        points[i] += heights[i] / 100;
    }
    if (points[1] >= heights[1] || points[1] <= 0) {  
      up = !up;
    }

    const vertices = new Float32Array(points);
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.2 });
    const mesh = new THREE.Points(geometry, material);
    scene.add(mesh);
    return;
  };

  const vertices = new Float32Array(points);
  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.2 });
  const mesh = new THREE.Points(geometry, material);
  scene.add(mesh);

  renderer.render(scene, camera);

  camera.position.x = 0;
  camera.position.y = 125;
  camera.position.z = 175;

  camera.rotation.x = -0.3;
  camera.rotation.y = 0;
  camera.rotation.z = 0;

  (function () {
    function animate() {
      window.requestAnimationFrame(animate);
      updateShapes();
      renderer.render(scene, camera);
    }
    animate();
  })();
}
