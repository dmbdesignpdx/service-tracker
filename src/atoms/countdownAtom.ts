import { atomEffect } from "jotai-effect";
import { diffAtom } from "./diffAtom";
import { endAtom } from "./endAtom";
import { runningAtom } from "./runningAtom";

export const countdownEffectAtom = atomEffect((get, set) => {
  const isRunning: boolean = get(runningAtom);
  let frameId: number;

  function animate() {
    if (isRunning) {
      const end: number = get(endAtom);

      set(diffAtom, Math.max(0, end - Date.now()));

      frameId = requestAnimationFrame(animate);
    }
  }

  if (isRunning) {
    frameId = requestAnimationFrame(animate);
  }

  return () => cancelAnimationFrame(frameId);
});
