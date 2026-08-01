"use client";

/**
 * @todo Separate these controls.
 */

// Theirs
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { Plus } from "lucide-react";
import { useRef } from "react";

// Ours
import { countAtom, goalAtom, runningAtom, timeAtom } from "@/atoms";
import { Button } from "@/components/ui/button";
import { SECOND, TimeAllotted } from "@/constants/main";

export function Controls() {
  const goal = useAtomValue(goalAtom);
  const amount = Math.ceil(goal / 7.5);
  const setCount = useSetAtom(countAtom);
  const [isRunning, setIsRunning] = useAtom(runningAtom);
  const setTime = useSetAtom(timeAtom);
  const timer = useRef<NodeJS.Timeout>(null);

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

  function toggleTimer() {
    if (isRunning) {
      if (timer.current) clearTimeout(timer.current);
      setIsRunning(false);
      setTime(TimeAllotted.START);
      setCount(0);
    } else {
      timer.current = setInterval(() => {
        setTime(prev => {
          if (prev > 0) return prev - 1;
          return prev;
        });
      }, SECOND);

      setIsRunning(true);
    }
  }

  return (
    <>
      <Button
        type="button"
        onClick={toggleTimer}
        variant="secondary"
        size="lg"
      >
        {isRunning ? "End" : "Start"}
      </Button>
      <Button
        type="button"
        onClick={addCount}
        disabled={!isRunning}
        className="fixed bottom-10 right-10 z-10 rounded-full w-14 h-14"
      >
        <Plus />
      </Button>
    </>
  );
}
