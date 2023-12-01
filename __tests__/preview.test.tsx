/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import Preview from "../src/pages/components/Preview";
import { ContentItem } from "src/interfaces/content.interface";
import "@testing-library/jest-dom";

describe("Preview Component", () => {
  it("Shows the default content", () => {
    const defaultContent: ContentItem = {
      title: "Custom Title",
      description: "Custom desc",
      btnVal: "click",
    };

    const { queryByRole } = render(<Preview content={defaultContent} />);
    expect(queryByRole("heading")).toHaveTextContent(defaultContent.title);
  });
});
