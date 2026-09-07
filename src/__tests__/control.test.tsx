// Theirs
import { describe, expect, test } from "bun:test";
import { act, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { createStore, Provider } from "jotai";

// Ours
import { millisecondsAtom, runningAtom } from "@/atoms";
import { StartStopButton } from "@/components/control";
import { HOUR, SECOND } from "@/constants/main";
import { Label } from "@/data/content";

describe("StartStopButton", () => {
  test("renders its default content and state", async () => {
    render(<StartStopButton />);

    await screen.findByRole("button", { name: Label.START });
  });

  test("toggles the countdown for the timer", async () => {
    const store = createStore();

    render(
      <Provider store={store}>
        <StartStopButton />
      </Provider>,
    );

    const button = await screen.findByRole("button");

    expect(button).not.toBeDisabled();
    expect(button).toHaveTextContent(Label.START);
    expect(store.get(runningAtom)).toBe(false);
    expect(store.get(millisecondsAtom)).toBe(HOUR);

    await user.click(button);

    expect(button).toHaveTextContent(Label.END);
    expect(store.get(runningAtom)).toBe(true);

    act(() => {
      setTimeout(() => {
        expect(store.get(millisecondsAtom)).toBeLessThan(HOUR);
      }, SECOND);
    });
  });
});
