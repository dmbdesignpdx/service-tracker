import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/data/content";

export function OpenButton() {
  return (
    <Button
      className="fixed top-6 right-6 z-10 rounded-full size-12"
      type="button"
      variant="ghost"
      aria-label={Label.OPEN}
    >
      <Settings aria-hidden="true" />
    </Button>
  );
}

export function SaveButton(action: () => void, disabled: string) {
  return (
    <Button
      onClick={action}
      type="button"
      disabled={!disabled.trim()}
    >
      {Label.SAVE}
    </Button>
  );
}

export function CloseButton() {
  return (
    <Button
      type="button"
      variant="ghost"
    >
      {Label.CLOSE}
    </Button>
  );
}
