"use client";

// Theirs
import { useAtomValue } from "jotai";

// Ours
import { timeAtom } from "@/atoms";
import { TestID } from "@/constants/tests";
import { setStatusColor } from "@/lib/status";
import { cn } from "@/lib/utils";

export function TimeDisplay() {
  const { hour, minute, second, milliseconds } = useAtomValue(timeAtom);

  return (
    <p
      className={cn(
        setStatusColor(milliseconds),
        "contain-layout font-mono text-5xl font-semibold tabular-nums trim",
      )}
      data-testid={TestID.TIMER}
    >
      {hour}
      <span className="opacity-60">:</span>
      {minute}
      <span className="opacity-60">:</span>
      {second}
    </p>
  );
}
