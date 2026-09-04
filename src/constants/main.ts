export const DEFAULT_GOAL = 120;
export const SECOND = 1000;
export const HOUR = SECOND * 60 * 60;
export const INIT_COUNT = 0;

export const TimeAllotted = {
  START: HOUR,
  get WARN() {
    return Math.floor(this.START * 0.3333);
  },
  get LATE() {
    return Math.floor(this.START * 0.1666);
  },
};

export enum TimeColor {
  GOOD = "text-good",
  WARN = "text-warning",
  BAD = "text-destructive",
}
