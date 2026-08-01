"use client";

// Theirs
import { useAtomValue } from "jotai";

// Ours
import { countAtom, goalAtom } from "@/atoms";

export function CountDisplay() {
  const goal = useAtomValue(goalAtom);
  const amount = Math.ceil(goal / 7.5);
  const count = useAtomValue(countAtom);

  return (
    <>
      <p className="text-7xl trim">{count}</p>
      <div className="text-center text-muted-foreground">
        <p>Goal: {goal}</p>
        <p>({amount} an hour)</p>
      </div>
    </>
  );
}
