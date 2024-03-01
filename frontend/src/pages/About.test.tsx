import { cleanup, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import About from "./About";

afterEach(cleanup);

it("renders", () => {
  render(
    <BrowserRouter>
      <About />
    </BrowserRouter>,
  );
});
