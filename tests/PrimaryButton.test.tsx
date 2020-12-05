import * as React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { PrimaryButton } from "../src/components/PrimaryButton";

afterEach(cleanup);

describe("<PrimaryButton />", () => {
  it("renders the correct content", () => {
    const handleSubmit = jest.fn();
    const { getByTestId } = render(
      <PrimaryButton
        children="vivek"
        onClick={handleSubmit}
        className="-bottom-11"
      />
    );
    const btn = getByTestId("primary-btn");

    fireEvent.click(btn);
    fireEvent.click(btn);

    expect(btn).not.toBeNull();
    expect(btn.innerHTML).toBe("vivek");
    expect(btn.classList.contains("bg-blue-600")).toBe(true);
    expect(handleSubmit).toBeCalledTimes(2);
  });
});
