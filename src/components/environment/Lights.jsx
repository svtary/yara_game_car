import React, { useRef } from 'react';

export function Lights() {
  const lightRef = useRef();
  // useHelper(lightRef,DirectionalLightHelper,5,"red");

  return (
    <>
      {/* <ambientLight intensity={0.1} /> */}
      {/*   <directionalLight
        ref={lightRef}
        position={[0, 10, 10]}
        intensity={0.1}
        castShadow
      /> */}
      <hemisphereLight args={['#FF4500', '#00FF00', 1]} />

      <spotLight
        color={[1, 0.4, 0.5]}
        // color={[0,0,0]}
        intensity={2}
        angle={2}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={2}
      />
      <spotLight
        color={[0.2, 0.1, 1]}
        // color={[0,0,0]}
        intensity={2}
        angle={3.5}
        penumbra={0.8} //伴影
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={2}
      />
    </>
  );
}
