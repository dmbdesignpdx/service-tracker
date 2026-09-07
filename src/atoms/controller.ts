// Theirs
import { atom } from "jotai";
import { RESET } from "jotai/utils";

// Ours
import { HOUR } from "@/constants/main";
import { countAtom } from "./counter";
import { millisecondsAtom, runningAtom, totalAtom } from "./timer";

type ControllerAction = "start" | "stop" | "add";

export const controllerAtom = atom(null, (get, set, action: ControllerAction) => {
  switch (action) {
    case "start": {
      set(runningAtom, true);
      set(totalAtom, Date.now() + HOUR);

      break;
    }
    case "stop": {
      set(runningAtom, false);
      set(millisecondsAtom, RESET);
      set(countAtom, RESET);

      break;
    }
    case "add": {
      const total = get(totalAtom);

      set(totalAtom, total + HOUR);

      break;
    }
    default: {
      throw new Error(`Unknown action: ${action}`);
    }
  }
});
