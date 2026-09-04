import { atom } from "jotai";
import { RESET } from "jotai/utils";
import { HOUR } from "@/constants/main";
import { countAtom } from "./countAtom";
import { diffAtom } from "./diffAtom";
import { endAtom } from "./endAtom";
import { runningAtom } from "./runningAtom";

type ControllerAction = "start" | "stop" | "add";

export const controllerAtom = atom(null, (get, set, action: ControllerAction) => {
  switch (action) {
    case "start": {
      set(runningAtom, true);
      set(endAtom, Date.now() + HOUR);

      break;
    }
    case "stop": {
      set(runningAtom, false);
      set(diffAtom, RESET);
      set(countAtom, RESET);

      break;
    }
    case "add": {
      const end: number = get(endAtom);

      if (end) set(endAtom, end + HOUR);

      break;
    }
    default: {
      throw new Error(`Unknown action: ${action}`);
    }
  }
});
