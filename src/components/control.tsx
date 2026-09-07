"use client";

// Theirs
import { useAtom, useAtomValue, useSetAtom } from "jotai";

// Ours
import { controllerAtom, countdownEffect, runningAtom } from "@/atoms";
import { Button } from "@/components/ui/button";
import { Label } from "@/data/content";

export function StartStopButton() {
  const running = useAtomValue(runningAtom);
  const dispatch = useSetAtom(controllerAtom);

  useAtom(countdownEffect);

  function toggleTimer() {
    if (running) dispatch("stop");
    else dispatch("start");
  }

  return (
    <Button
      type="button"
      onClick={toggleTimer}
      variant="secondary"
      size="lg"
    >
      {running ? Label.END : Label.START}
    </Button>
  );
}
