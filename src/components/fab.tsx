"use client";

// Theirs
import { useAtomValue, useSetAtom } from "jotai";
import { Plus } from "lucide-react";

// Ours
import { countAtom, goalAtom, runningAtom, timeAtom } from "@/atoms";
import { Button } from "@/components/ui/button";
import { TimeAllotted } from "@/constants/main";
import { Label } from "@/data/content";

export function FloatingActionButton() {
  const goal = useAtomValue(goalAtom);
  const amount = Math.ceil(goal / 7.5);
  const setCount = useSetAtom(countAtom);
  const isRunning = useAtomValue(runningAtom);
  const setTime = useSetAtom(timeAtom);

  function addCount() {
    setCount(state => {
      const nextState = state + 1;
      const round = nextState % amount === 0;

      if (round) {
        setTime(state => state + TimeAllotted.START);
      }

      return nextState;
    });
  }

  return (
    <Button
      className="fixed bottom-10 right-10 z-10 rounded-full w-14 h-14"
      type="button"
      onClick={addCount}
      disabled={!isRunning}
    >
      <span className="sr-only">{Label.ADD}</span>
      <Plus aria-hidden="true" />
    </Button>
  );
}
