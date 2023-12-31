/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/pages/index";

// Integration test
describe("Home Page", () => {
  it("Preview Title changes when title input changes", () => {
    const {} = render(<Home />);
    const previewTitleElement = screen.getByRole("heading");
    const editorTitleInputElement = screen.getByLabelText("Title");
    const NEW_TITLE = "new title";

    fireEvent.change(editorTitleInputElement as Element, {
      target: { value: NEW_TITLE },
    });

    expect(previewTitleElement).toHaveTextContent(NEW_TITLE);
  });
});
