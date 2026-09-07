import { TimeAllotted, TimeColor } from "@/constants/main";

export function setStatusColor(ms: number) {
  switch (true) {
    case ms > TimeAllotted.WARN:
      return TimeColor.GOOD;
    case ms > TimeAllotted.LATE:
      return TimeColor.WARN;
    default:
      return TimeColor.BAD;
  }
}
