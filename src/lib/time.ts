interface TimeReturn {
  hour: string;
  minute: string;
  second: string;
}

export function formatTime(milliseconds: number): TimeReturn {
  const seconds = Math.floor(milliseconds / 1000);
  const h = Math.floor(seconds / 3600);
  const mm = Math.floor((seconds % 3600) / 60);
  const ss = seconds % 60;

  return {
    hour: String(h),
    minute: String(mm).padStart(2, "0"),
    second: String(ss).padStart(2, "0"),
  };
}
