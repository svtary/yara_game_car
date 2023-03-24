import { useTrimesh } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useEffect } from "react";

export function Ramp() {
  const result = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "/models/ramp.glb"
  );
  // const colorMap = useLoader(
  //   TextureLoader,
  //   process.env.PUBLIC_URL + "/textures/track.png"
  //   // process.env.PUBLIC_URL + "/textures/terrain_roughness.jpg"
  // );

  // useEffect(() => {
  //   colorMap.anisotropy = 16;
  // }, [colorMap]);

  const geometry = result.scene.children[0].geometry;
  console.log("ramp", geometry);

  const vertices = geometry.attributes.position.array;
  const indices = geometry.index.array;
  console.log("vertices", vertices);
  console.log("indice", indices);

  const [ref] = useTrimesh(
    () => ({
      args: [vertices, indices],
      mass: 0,
      type: "Static",
    }),
    useRef(null)
  );

  // return (
  //   <>
  //     {/* <mesh geometry={geometry} position={(5, 5, 0)} rotation={(0, 0, 0)}> */}
  //     <mesh geometry={geometry}>
  //       <meshBasicMaterial toneMapped={false} map={colorMap} />
  //     </mesh>
  //   </>
  // );
}
