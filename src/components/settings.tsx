"use client";

// Theirs
import { useAtom } from "jotai";
import { type ChangeEvent, useState } from "react";

// Ours
import { goalAtom } from "@/atoms";
import { CloseButton, OpenButton, SaveButton } from "@/components/buttons";
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
import { toast } from "@/components/ui/toast";
import { Copy } from "@/data/content";

export function UserSettings() {
  const [value, setValue] = useState("");
  const [goal, setGoal] = useAtom(goalAtom);

  function updateValue(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function updateGoal() {
    if (value) {
      const num = Number(value);

      if (num >= 100) setGoal(num);
      else setGoal(100);

      toast.add({
        type: "success",
        title: "Goal updated!",
        timeout: 4000,
      });

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
              onChange={updateValue}
            />
          </Field>
        </div>
        <DrawerFooter>
          <DrawerClose render={SaveButton(updateGoal, value)} />
          <DrawerClose render={CloseButton()} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
