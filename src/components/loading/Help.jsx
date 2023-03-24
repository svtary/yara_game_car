import { useEffect } from "react";
import { HTMLAttributes } from "react";
import { useStore } from "../../store/Store";
import { Footer } from "./Footer";
import { Routes, Route, Link } from "react-router-dom";

import "../../style/style.css";

const controlOptions = [
  { keys: ["W"], action: "Forward" },
  { keys: ["A"], action: "Left" },
  { keys: ["D"], action: "Right" },
  { keys: ["S"], action: "Backward" },
  { keys: ["R"], action: "Reset" },
  { keys: ["K"], action: "Swap Camera" },
  { keys: ["I"], action: "Help" },

  // { keys: ["Space"], action: "Drift" },
  // { keys: ["Shift"], action: "Turbo Boost" },
  // { keys: ["H"], action: "Honk" },
  // { keys: ["M"], action: "Map" },
  // { keys: ["C"], action: "Toggle Camera" },
  // { keys: ["R"], action: "Reset" },
  // { keys: ["."], action: "Editor" },
  // { keys: ["U"], action: "Toggle Mute" },
  // { keys: ["I"], action: "Help" },
  // { keys: ["L"], action: "Leaderboards" },
];

export function Help() {
  const [set, help, sound] = useStore((state) => [
    state.set,
    state.help,
    state.sound,
  ]);
  return (
    <>
      <div className={`${sound ? "sound" : "nosound"}`}></div>
      <div className="help">
        {!help && <button onClick={() => set({ help: true })}>i</button>}
        <div className={`popup ${help ? "open" : ""}`}>
          <button className="popup-close" onClick={() => set({ help: false })}>
            i
          </button>
          <div className="popup-content">
            <Keys />
          </div>
        </div>
      </div>
    </>
  );
}

export function Keys(props) {
  const setReady = useStore((state) => state.setReady);
  useEffect(() => {
    setTimeout(() => console.log("你好!"), 4000);
    // return setReady(true);
  }, []);
  return (
    <>
      <div className={`fullscreen bg}`}>
        <div className="stack">
          <div {...props}>
            <div
              className="BT popup-item popup-item-keys"
              style={{ paddingBottom: "-20px" }}
            >
              WELCOME TO YARA'S METAVERSE
            </div>
            {controlOptions.map(({ keys, action }) => (
              <div className="popup-item" key={action}>
                <div>{action}</div>
                <div className="popup-item-keys">
                  {keys.map((key) => (
                    <span className="popup-item-key" key={key}>
                      <span>{key}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <div className=" popup-item-key">
              {/* <button className="cstar" onClick={setReady}>
                click to start
              </button> */}
              {/* <a
                href="#"
                className="cstar"
                onClick={setReady}
                style={{ color: "white", textAlign: "center" }}
              >
                click to start
              </a> */}
              <nav>
                <Link
                  to="/game"
                  className="cstar"
                  onClick={setReady}
                  style={{ color: "white", textAlign: "center" }}
                >
                  click to start
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
