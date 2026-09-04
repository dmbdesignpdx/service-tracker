"use client";

// Theirs
import { useAtomValue } from "jotai";

// Ours
import { diffAtom, formatAtom } from "@/atoms";
import { TimeAllotted, TimeColor } from "@/constants/main";
import { TestID } from "@/constants/tests";
import { cn } from "@/lib/utils";

export function TimeDisplay() {
  const diff = useAtomValue(diffAtom);
  const { hour, minute, second } = useAtomValue(formatAtom);

  function setStatusColor() {
    switch (true) {
      case diff > TimeAllotted.WARN:
        return TimeColor.GOOD;
      case diff > TimeAllotted.LATE:
        return TimeColor.WARN;
      default:
        return TimeColor.BAD;
    }
  }

  return (
    <p
      className={cn(
        setStatusColor(),
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
