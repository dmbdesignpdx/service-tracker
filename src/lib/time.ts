interface TimeReturn {
  hour: string;
  minute: string;
  second: string;
}

export function formatTime(milliseconds: number): TimeReturn {
  const hours = Math.floor(milliseconds / 3600);
  const minutes = Math.floor((milliseconds % 3600) / 60);
  const seconds = milliseconds % 60;

  return {
    hour: String(hours).padStart(1, "0"),
    minute: String(minutes).padStart(2, "0"),
    second: String(seconds).padStart(2, "0"),
  };
}
