// Theirs
import { describe, expect, test } from "bun:test";
import { act, render, screen } from "@testing-library/react";
import { createStore, Provider } from "jotai";

// Ours
import { countAtom } from "@/atoms";
import { CountDisplay } from "@/components/count";
import { DEFAULT_GOAL } from "@/constants/main";
import { Copy } from "@/data/content";

const totalRegex = new RegExp(Copy.TOTAL);
const goalRegex = new RegExp(Copy.GOAL);
const paceRegex = new RegExp(Copy.PACE);

describe("CountDisplay", () => {
  test("renders its content", async () => {
    render(<CountDisplay />);

    const goal = await screen.findByText(goalRegex);
    await screen.findByText(totalRegex);
    await screen.findByText(paceRegex);

    expect(goal).toHaveTextContent(String(DEFAULT_GOAL));
  });

  test("increments its `count`", async () => {
    const store = createStore();

    render(
      <Provider store={store}>
        <CountDisplay />
      </Provider>,
    );

    const total = (await screen.findByText(totalRegex)).parentElement;

    expect(total).toHaveTextContent("0");

    act(() => {
      store.set(countAtom, 1);
    });

    expect(total).toHaveTextContent("1");
  });
});
