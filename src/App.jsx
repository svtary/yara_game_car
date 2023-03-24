import React, { Component, Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { Car } from "./components/car/Car";
import { Ground } from "./components/environment/Ground";
import { Track } from "./components/environment/Track_ori";
import { Lights } from "./components/environment/Lights";
import { Boxes } from "./components/environment/Boxes";
import { Person } from "./components/character/Person_gltf";
import { Archi } from "./components/environment/Archi";
import { useStore } from "./store/Store";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { Rings } from "./components/environment/Rings";
import { Orancar } from "./components/car/Orancar";
// import { Footer } from "@pmndrs/branding";
import { useProgress } from "@react-three/drei";
import { Keys } from "./components/loading/Help";
import { Loading } from "./components/loading/Loading";
// import { createContext } from "react";
// export const LoadingContext = createContext();

export function App() {
  const [firstPerson, setFirstPerson] = useState(false);
  const [cameraPosition, setCameraPosition] = useState([-6, 3.9, 6.21]);
  const ready = useStore((state) => state.ready);
  // const setReady = useStore((state) => state.setReady);

  useEffect(() => {
    function keydownHandler(e) {
      if (e.key == "k") {
        // random is necessary to trigger a state change
        if (firstPerson)
          // setCameraPosition([-6, 3.9, 6.21 + Math.random() * 0.01]);
          setCameraPosition([-6, 3.9, 6.21 + Math.random() * 0.01]);

        setFirstPerson(!firstPerson);
      }
    }
    console.log("ready", ready);
    window.addEventListener("keydown", keydownHandler);
    return () => window.removeEventListener("keydown", keydownHandler);
  }, [firstPerson]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Keys style={{ paddingBottom: 20 }} />}
        ></Route>
        <Route
          path="/game"
          element={
            <>
              {ready && (
                <Suspense
                  fallback={
                    <>
                      <Loading />
                    </>
                  }
                >
                  <>
                    <Canvas>
                      <Physics broadphase="SAP" gravity={[0, -2.6, 0]}>
                        <>
                          <PerspectiveCamera
                            makeDefault
                            position={cameraPosition}
                            fov={40}
                          />
                          {!firstPerson && (
                            <OrbitControls target={[-2.64, -0.71, 0.03]} />
                          )}
                          <Ground />
                          <Lights />

                          <Track />
                          <Boxes />
                          <Person />
                          <Rings />
                          <Car firstPerson={firstPerson} />
                          <Archi />
                          <Orancar />
                        </>
                      </Physics>
                    </Canvas>
                  </>
                </Suspense>
              )}
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}
