import * as React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { PrimaryInput } from "../src/components/PrimaryInput";

afterEach(cleanup);

describe("<PrimaryInput />", () => {
  it("should render the current input content", () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText, getByTestId } = render(
      <PrimaryInput
        value="item1"
        placeholder="first input"
        className="-bottom-0"
        onChange={handleChange}
      />
    );

    const input = getByTestId("primary-input");

    fireEvent.change(input, { target: { value: "item2" } });
    fireEvent.change(input, { target: { value: "item3" } });

    expect(getByPlaceholderText("first input")).toBeTruthy();
    expect(input.classList.contains("-bottom-0")).toBe(true);
    expect(handleChange).toHaveBeenCalledTimes(2);
  });
});
