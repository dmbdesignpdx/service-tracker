import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";

import { DEFAULT_GOAL } from "@/constants/main";

export const goalAtom = atom(DEFAULT_GOAL);
export const paceAtom = atom(get => Math.ceil(get(goalAtom) / 7.5));
export const countAtom = atomWithReset(0);
