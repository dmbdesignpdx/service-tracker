// Ours
import { Control } from "@/components/control";
import { CountDisplay } from "@/components/count";
import { FloatingActionButton } from "@/components/fab";
import { Settings } from "@/components/settings";
import { TimeDisplay } from "@/components/time";

export default function Home() {
  return (
    <main className="grid place-items-center h-screen w-screen relative">
      <div className="flex flex-col items-center gap-8">
        <Settings />
        <Control />
        <TimeDisplay />
        <CountDisplay />
        <FloatingActionButton />
      </div>
    </main>
  );
}
