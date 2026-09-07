// Theirs
import { atomEffect } from "jotai-effect";

// Ours
import { millisecondsAtom, runningAtom, totalAtom } from "./timer";

export const countdownEffect = atomEffect((get, set) => {
  const running = get(runningAtom);
  let frameId: number;

  function animate() {
    if (running) {
      set(millisecondsAtom, Math.max(0, get(totalAtom) - Date.now()));

      frameId = requestAnimationFrame(animate);
    }
  }

  if (running) {
    frameId = requestAnimationFrame(animate);
  }

  return () => void cancelAnimationFrame(frameId);
});
