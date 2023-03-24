import React, { useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import { AnimationMixer, AnimationClip, Clock } from "three";

// based on "Chevrolet Corvette (C7)" (https://sketchfab.com/3d-models/chevrolet-corvette-c7-2b509d1bce104224b147c81757f6f43a)
// by Martin Trafas (https://sketchfab.com/Bexxie) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
export function Person() {
  //   const {actions}=useAnimations(animations,group);
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "models/person/scene.gltf"
  );

  let mesh;
  const mixer = new AnimationMixer(gltf.scene);
  console.log("mixer", mixer);
  const { animations } = gltf;
  console.log("animations", animations);
  const clip = AnimationClip.findByName(animations, "Main");
  console.log("clip", clip);
  const action = mixer.clipAction(clip);
  console.log("action", action);
  action.timeScale = 1;
  action.play();

  useEffect(() => {
    console.log("gltf", gltf);
    gltf.scene.scale.set(0.003, 0.003, 0.003);
    gltf.scene.position.set(0, 0, 4);
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
  }, [gltf]);
  var clock = new Clock();
  useFrame(() => {
    mixer.update(clock.getDelta());
  });

  return <primitive object={gltf.scene} />;
}
