// Theirs
import { describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { createStore, Provider } from "jotai";

// Ours
import { countAtom, runningAtom } from "@/atoms";
import { FloatingActionButton } from "@/components/fab";
import { INIT_COUNT } from "@/constants/main";
import { Label } from "@/data/content";

async function getButton() {
  return await screen.findByRole("button", { name: Label.ADD });
}

describe("FloatingActionButton", () => {
  test("renders its default content and state", async () => {
    render(<FloatingActionButton />);

    const button = await getButton();

    expect(button).toBeDisabled();
  });

  test("increases count when enabled", async () => {
    const store = createStore();

    store.set(runningAtom, true);

    render(
      <Provider store={store}>
        <FloatingActionButton />
      </Provider>,
    );

    const button = await getButton();

    expect(button).not.toBeDisabled();
    expect(store.get(countAtom)).toBe(INIT_COUNT);

    await user.click(button);

    expect(store.get(countAtom)).toBe(INIT_COUNT + 1);
  });
});
