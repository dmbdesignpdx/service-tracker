// Ours
import { StartStopButton } from "@/components/control";
import { CountDisplay } from "@/components/count";
import { FloatingActionButton } from "@/components/fab";
import { UserSettings } from "@/components/settings";
import { TimeDisplay } from "@/components/time";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-10">
      <UserSettings />
      <StartStopButton />
      <TimeDisplay />
      <CountDisplay />
      <FloatingActionButton />
    </div>
  );
}
