import { atom } from "jotai";

import { diffAtom } from "./diffAtom";

export const formatAtom = atom(get => {
  const diff: number = get(diffAtom);
  const seconds: number = Math.floor(diff / 1000);
  const h: number = Math.floor(seconds / 3600);
  const mm: number = Math.floor((seconds % 3600) / 60);
  const ss: number = seconds % 60;

  return {
    hour: String(h),
    minute: String(mm).padStart(2, "0"),
    second: String(ss).padStart(2, "0"),
  };
});
