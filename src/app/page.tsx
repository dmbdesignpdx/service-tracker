// Ours
import { Controls } from "@/components/controls";
import { CountDisplay } from "@/components/count";
import { TimeDisplay } from "@/components/time";

export default function Home() {
  return (
    <main className="grid place-items-center h-screen w-screen relative">
      <div className="flex flex-col items-center gap-8">
        <Controls />
        <TimeDisplay />
        <CountDisplay />
      </div>
    </main>
  );
}
