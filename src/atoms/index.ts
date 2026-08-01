import { atom } from "jotai";

import { DEFAULT_GOAL, TimeAllotted } from "@/constants/main";

export const goalAtom = atom(DEFAULT_GOAL);
export const countAtom = atom(0);
export const runningAtom = atom(false);
export const timeAtom = atom(TimeAllotted.START);
