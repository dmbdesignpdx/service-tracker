import { atom } from "jotai";

import { goalAtom } from "./goalAtom";

export const paceAtom = atom(get => {
  const goal = get(goalAtom);

  return Math.ceil(goal / 7.5);
});
