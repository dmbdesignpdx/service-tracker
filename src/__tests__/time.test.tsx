// Theirs
import { describe, expect, test } from "bun:test";
import { act, render, screen } from "@testing-library/react";
import { createStore, Provider } from "jotai";

// Ours
import { millisecondsAtom } from "@/atoms";
import { TimeDisplay } from "@/components/time";
import { TimeColor } from "@/constants/main";
import { TestID } from "@/constants/tests";

function minutes(value: number) {
  return 1000 * 60 * value;
}

describe("TimeDisplay", () => {
  test("renders its content", async () => {
    render(<TimeDisplay />);

    const time = await screen.findByTestId(TestID.TIMER);

    expect(time).toHaveTextContent("1:00:00");
  });

  test("renders the time and its colors correctly", async () => {
    const store = createStore();

    store.set(millisecondsAtom, minutes(30));

    render(
      <Provider store={store}>
        <TimeDisplay />
      </Provider>,
    );

    const time = await screen.findByTestId(TestID.TIMER);

    expect(time).toHaveTextContent("0:30:00");
    expect(time).toHaveClass(TimeColor.GOOD);

    act(() => {
      store.set(millisecondsAtom, minutes(15));
    });

    expect(time).toHaveTextContent("0:15:00");
    expect(time).toHaveClass(TimeColor.WARN);

    act(() => {
      store.set(millisecondsAtom, minutes(7.5));
    });

    expect(time).toHaveTextContent("0:07:30");
    expect(time).toHaveClass(TimeColor.BAD);
  });
});
