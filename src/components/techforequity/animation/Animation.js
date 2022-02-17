import '../../../app.scss';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Canvas, extend, useFrame, useThree } from 'react-three-fiber';
import { Suspense, useState, useMemo, useRef, useEffect } from 'react';
import { everest, everest_min } from './new_data';

extend({ OrbitControls });

function CameraControls() {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  const controlsRef = useRef();
  useFrame(() => controlsRef.current.update());

  return (
    <orbitControls
      ref={controlsRef}
      args={[camera, domElement]}
      autoRotate={false}
    />
  );
}

function Points() {
  const bufferRef = useRef();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    //camera.position.set();
  });

  let points = useMemo(() => {
    let points = [];
    let x, y, z;

    for (let i = 0; i < everest.length; i++) {
      x = everest[i][0] * 2;
      y = everest[i][1] * 2.6 - 42;
      z = everest[i][2] * 2;
      if (x > 10) points.push(x, (y - everest_min * 2) * height, z);
    }

    return new Float32Array(points);
  }, [height]);

  useFrame(() => {
    setHeight(Math.min(1, height + 0.008));
    bufferRef.current.needsUpdate = true;
  });

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={bufferRef}
          attachObject={['attributes', 'position']}
          array={points}
          count={points.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        attach="material"
        //map={imgTex}
        color={0x2f3e4e}
        size={0.5}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  );
}

function AnimationCanvas() {
  return (
    <Canvas
      colorManagement={false}
      camera={{ position: [375, 40, 0], fov: 36 }}>
      <Suspense fallback={null}>
        <Points />
      </Suspense>
      {/*<CameraControls />*/}
    </Canvas>
  );
}

function App() {
  return (
    <div className="animation">
      <div className="typing-text">
        <h1>Athabasca Glacier: [52.1897° N, 117.2578° W]</h1>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <AnimationCanvas />
      </Suspense>
    </div>
  );
}

export default App;
