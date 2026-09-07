"use client";

// Theirs
import { useAtomValue, useSetAtom } from "jotai";
import { Plus } from "lucide-react";

// Ours
import { controllerAtom, countAtom, paceAtom, runningAtom } from "@/atoms";
import { Button } from "@/components/ui/button";
import { Label } from "@/data/content";

export function FloatingActionButton() {
  const pace = useAtomValue(paceAtom);
  const running = useAtomValue(runningAtom);
  const setCount = useSetAtom(countAtom);
  const dispatch = useSetAtom(controllerAtom);

  function addCount() {
    setCount(state => {
      const nextState = state + 1;
      const nextRound = nextState % pace === 0;

      if (nextRound) dispatch("add");

      return nextState;
    });
  }

  return (
    <Button
      className="fixed bottom-10 right-10 z-10 rounded-full w-14 h-14"
      type="button"
      onClick={addCount}
      disabled={!running}
    >
      <span className="sr-only">{Label.ADD}</span>
      <Plus aria-hidden="true" />
    </Button>
  );
}
