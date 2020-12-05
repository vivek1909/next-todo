import * as React from "react";
import { cleanup, render } from "@testing-library/react";
import { TodoForm } from "../src/containers/TodoForm";

afterEach(cleanup);
describe("<TodoForm />", () => {
  it("should render the correct content", () => {
    const { getByText } = render(<TodoForm />);
  });
});
