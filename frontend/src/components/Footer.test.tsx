import { cleanup, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";

afterEach(cleanup);

it("renders", () => {
  render(
    <BrowserRouter>
      <Footer darkMode={false} handleDarkModeChange={() => {}} />
    </BrowserRouter>,
  );
});
