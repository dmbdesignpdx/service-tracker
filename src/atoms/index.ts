import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";

import { DEFAULT_GOAL, TimeAllotted } from "@/constants/main";

export const goalAtom = atom(DEFAULT_GOAL);
export const countAtom = atomWithReset(0);
export const runningAtom = atom(false);
export const timeAtom = atomWithReset(TimeAllotted.START);
