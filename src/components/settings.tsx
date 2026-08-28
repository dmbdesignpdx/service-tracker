"use client";

// Theirs
import { useAtom } from "jotai";
import { Settings, X } from "lucide-react";
import { useState } from "react";

// Ours
import { goalAtom } from "@/atoms";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Copy, Label } from "@/data/content";

function OpenButton() {
  return (
    <Button
      className="fixed top-8 right-8 z-10 rounded-full size-12"
      type="button"
      variant="ghost"
      aria-label={Label.OPEN}
    >
      <Settings aria-hidden="true" />
    </Button>
  );
}
function CloseButton() {
  return (
    <Button
      type="button"
      variant="ghost"
      aria-label={Label.CLOSE}
    >
      <X aria-hidden="true" />
    </Button>
  );
}

export function UserSettings() {
  const [value, setValue] = useState("");
  const [goal, setGoal] = useAtom(goalAtom);

  function updateGoal() {
    if (value) {
      const num = Number(value);

      if (num >= 100) setGoal(num);
      else setGoal(100);

      setValue("");
    }
  }

  return (
    <Drawer
      swipeDirection="down"
      showSwipeHandle
    >
      <DrawerTrigger render={OpenButton()} />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{Copy.SETTINGS}</DrawerTitle>
        </DrawerHeader>
        <div className="p-4">
          <Field>
            <FieldLabel htmlFor="input-demo-api-key">{Copy.DAILY}</FieldLabel>
            <Input
              id="input-demo-api-key"
              type="number"
              placeholder={String(goal)}
              value={value}
              onChange={e => setValue(e.target.value)}
            />
          </Field>
        </div>
        <DrawerFooter>
          <Button
            onClick={updateGoal}
            type="button"
            disabled={!value.trim()}
          >
            {Label.SAVE}
          </Button>
          <DrawerClose render={CloseButton()} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
