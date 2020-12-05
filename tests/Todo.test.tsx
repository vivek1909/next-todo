import * as React from "react";
import { cleanup, render } from "@testing-library/react";
import { Todo } from "../src/containers/Todo";

afterEach(cleanup);
describe("<Todo />", () => {
  it("should render the correct content", () => {
    const mockTodo = { id: "1", title: "item1", active: false };
    const { getByTestId } = render(<Todo todo={mockTodo} />);

    expect(getByTestId("title").textContent).toBe("item1");
  });
});
