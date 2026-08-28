"use client";

// Theirs
import { useAtom, useSetAtom } from "jotai";
import { RESET } from "jotai/utils";
import { useRef } from "react";

// Ours
import { countAtom, runningAtom, timeAtom } from "@/atoms";
import { Button } from "@/components/ui/button";
import { SECOND } from "@/constants/main";
import { Label } from "@/data/content";

export function StartStopButton() {
  const setCount = useSetAtom(countAtom);
  const [isRunning, setIsRunning] = useAtom(runningAtom);
  const setTime = useSetAtom(timeAtom);
  const timer = useRef<NodeJS.Timeout>(null);

  function toggleTimer() {
    if (isRunning) {
      if (timer.current) clearTimeout(timer.current);
      setIsRunning(false);
      setTime(RESET);
      setCount(RESET);
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
    <Button
      type="button"
      onClick={toggleTimer}
      variant="secondary"
      size="lg"
    >
      {isRunning ? Label.END : Label.START}
    </Button>
  );
}
