"use client";

// Theirs
import { useAtomValue } from "jotai";

// Ours
import { countAtom, goalAtom, paceAtom } from "@/atoms";
import { Copy } from "@/data/content";

export function CountDisplay() {
  const count = useAtomValue(countAtom);
  const goal = useAtomValue(goalAtom);
  const pace = useAtomValue(paceAtom);

  return (
    <>
      <p className="contain-layout font-bold text-7xl trim">
        <span className="sr-only">{Copy.TOTAL}: </span>
        {count}
      </p>
      <div className="text-center text-muted-foreground">
        <p>
          {Copy.GOAL}: {goal}
        </p>
        <p>
          ({pace} {Copy.PACE})
        </p>
      </div>
    </>
  );
}
