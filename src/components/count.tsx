"use client";

// Theirs
import { useAtomValue } from "jotai";

// Ours
import { countAtom, goalAtom } from "@/atoms";
import { Copy } from "@/data/content";

export function CountDisplay() {
  const count: number = useAtomValue(countAtom);
  const goal: number = useAtomValue(goalAtom);
  const amount: number = Math.ceil(goal / 7.5);

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
          ({amount} {Copy.PACE})
        </p>
      </div>
    </>
  );
}
