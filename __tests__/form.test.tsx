/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";

import { ContentItem } from "@/interfaces/content.interface";
import "@testing-library/jest-dom";
import EditorForm from "@/pages/components/EditorForm";

describe("Editor Form Component", () => {
  const defaultContent: ContentItem = {
    title: "Custom Title",
    description: "Custom desc",
    btnVal: "click",
  };
  it("Gets the default content as value", () => {
    const { queryByLabelText } = render(
      <EditorForm
        isDrawerOpened={false}
        isBigScreen={true}
        onClose={() => {}}
        content={defaultContent}
        onChange={() => {}}
      />
    );

    expect(queryByLabelText("Title")).toHaveDisplayValue(defaultContent.title);
    expect(queryByLabelText("Description")).toHaveDisplayValue(
      defaultContent.description
    );
    expect(queryByLabelText("Button Value")).toHaveDisplayValue(
      defaultContent.btnVal
    );
  });

  it("Calls the props' onChange Fn on change", () => {
    const handleChange = jest.fn();
    const {} = render(
      <EditorForm
        isDrawerOpened={false}
        isBigScreen={true}
        onClose={() => {}}
        content={defaultContent}
        onChange={handleChange}
      />
    );

    fireEvent.change(
      screen.getByTestId("titleInput").querySelector("input") as Element,
      { target: { value: "some text" } }
    );

    expect(handleChange).toBeCalled();
  });
});
