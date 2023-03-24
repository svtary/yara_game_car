import { useProgress } from "@react-three/drei";
import { useState, useEffect } from "react";

import { useStore } from "../../store/Store";
import "../../style/style.css";

export function Loading() {
  const { progress } = useProgress();
  const ready = useStore((state) => state.ready);
  const setReady = useStore((state) => state.setReady);
  console.log("i am in loader");
  console.log("progress", progress.toFixed());
  console.log("setrr", ready);
  useEffect(() => {
    // console.log("setrr", ready);
    if (progress.toFixed() === 100) {
      return () => setReady(true);
    }
  }, [ready]);

  return (
    <>
      <div className="App bg">
        {/* <button className=" stack bg popup-item BT">
          WELCOME TO YARA'S METAVERSE
        </button> */}
        <div className="w-100 h-100 d-flex align-items-center pageWrap">
          <div className="w-100 d-flex align-items-center loadingWrap border ">
            <div className="w-100 ">
              <div
                className="popup-item popup-item-keys popup-item-key"
                style={{ width: progress.toFixed() + "%", height: "100px" }}
              >
                <div style={{ fontSize: "12px" }}> {progress.toFixed()}%</div>
              </div>
              <div className="w-100 d-flex justify-content-center"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
