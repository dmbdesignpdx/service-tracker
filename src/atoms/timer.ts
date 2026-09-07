import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";

import { HOUR } from "@/constants/main";
import { formatTime } from "@/lib/time";

export const millisecondsAtom = atomWithReset(HOUR);
export const totalAtom = atom(0);
export const runningAtom = atom(false);
export const timeAtom = atom(get => {
  const ms = get(millisecondsAtom);
  return {
    ...formatTime(ms),
    milliseconds: ms,
  };
});
