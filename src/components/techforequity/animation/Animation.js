import '../../../app.scss';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import {
  Canvas,
  extend,
  useFrame,
  useLoader,
  useThree,
} from 'react-three-fiber';
import { Suspense, useCallback, useMemo, useRef, useEffect } from 'react';
import { everest, everest_max, everest_min } from './data';

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
      autoRotate={true}
      autoRotateSpeed={-0.3}
    />
  );
}

function Points() {
  const bufferRef = useRef();

  useEffect(() => {
    //
  });

  const height = 1;
  let points = useMemo(() => {
    let points = [];
    let x, y, z;

    for (let i = 0; i < everest.length; i++) {
      x = everest[i][0] * 1.6;
      y = everest[i][1] * 1.5-12;
      z = everest[i][2] * 1.6;
      points.push(x, (y - everest_min * 2) * height, z);
    }

    return new Float32Array(points);
  }, [height]);

  useFrame(() => {
    const points = bufferRef.current.array;

    for (let i = 1; i < points.length; i += 3) {
      //points[i] += heights[i] / 100;
    }

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
      camera={{ position: [195, 165, 0], fov: 55 }}>
      <Suspense fallback={null}>
        <Points />
      </Suspense>
      <CameraControls />
    </Canvas>
  );
}

function App() {
  return (
    <div className="animation">
      <Suspense fallback={<div>Loading...</div>}>
        <AnimationCanvas />
      </Suspense>
    </div>
  );
}

export default App;
