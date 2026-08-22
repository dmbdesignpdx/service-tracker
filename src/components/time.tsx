"use client";

// Theirs
import { useAtomValue } from "jotai";

// Ours
import { timeAtom } from "@/atoms";
import { TimeAllotted, TimeColor } from "@/constants/main";
import { TestID } from "@/constants/tests";
import { formatTime } from "@/lib/time";
import { cn } from "@/lib/utils";

export function TimeDisplay() {
  const time = useAtomValue(timeAtom);

  const { hour, minute, second } = formatTime(time);

  function setStatusColor() {
    switch (true) {
      case time > TimeAllotted.WARN:
        return TimeColor.GOOD;
      case time > TimeAllotted.LATE:
        return TimeColor.WARN;
      default:
        return TimeColor.BAD;
    }
  }

  return (
    <p
      className={cn(setStatusColor(), "font-mono text-5xl font-semibold tabular-nums trim")}
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
