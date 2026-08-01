"use client";

// Theirs
import { useAtomValue } from "jotai";

// Ours
import { timeAtom } from "@/atoms";
import { TimeAllotted } from "@/constants/main";
import { formatTime } from "@/lib/time";
import { cn } from "@/lib/utils";

export function TimeDisplay() {
  const time = useAtomValue(timeAtom);

  const { hour, minute, second } = formatTime(time);

  function setStatusColor() {
    switch (true) {
      case time > TimeAllotted.WARN:
        return "text-good";
      case time > TimeAllotted.LATE:
        return "text-warning";
      default:
        return "text-destructive";
    }
  }

  return (
    <p className={cn(setStatusColor(), "font-mono text-5xl font-semibold tabular-nums trim")}>
      {hour}
      <span className="opacity-60">:</span>
      {minute}
      <span className="opacity-60">:</span>
      {second}
    </p>
  );
}
