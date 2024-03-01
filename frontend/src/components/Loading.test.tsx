import { cleanup, render } from "@testing-library/react";
import Loading from "./Loading";

afterEach(cleanup);

it("renders", () => {
  const { queryByText } = render(<Loading />);
  expect(queryByText(/loading/i)).toBeTruthy();
});
