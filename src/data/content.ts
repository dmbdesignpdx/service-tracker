export const Copy = {
  TOTAL: "Total",
  GOAL: "Goal",
  PACE: "an hour",
  SETTINGS: "Settings",
  get DAILY() {
    return `Daily ${this.GOAL}`;
  },
};

export const Label = {
  ADD: "Add Count",
  START: "Start",
  END: "End",
  SAVE: "Save Settings",
  OPEN: "Open Settings",
  CLOSE: "Close",
};
