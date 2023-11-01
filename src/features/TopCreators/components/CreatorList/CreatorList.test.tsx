import React from "react";
import { render, screen } from "@testing-library/react";
import CreatorList from "./CreatorList";

const mockedTopCreators = [
  {
    user: { id: "1", email: "john@example.com" },
    productCount: 5,
    mostRecentProduct: {
      id: "p1",
      creatorId: "1",
      createTime: "2023-10-31T12:00:00",
    },
  },
  {
    user: { id: "2", email: "jane@example.com" },
    productCount: 8,
    mostRecentProduct: null,
  },
];

describe("CreatorList Component", () => {
  test("renders CreatorList with top creators data", () => {
    render(<CreatorList topCreators={mockedTopCreators} />);

    expect(screen.getByText("Creator: john@example.com")).toBeInTheDocument();
    expect(screen.getByText("Product count: 5")).toBeInTheDocument();
    expect(screen.getByText("Latest update:")).toBeInTheDocument();
  });

  test("renders no data message if topCreators is null", () => {
    render(<CreatorList topCreators={null} />);
    expect(screen.getByText("No creators available.")).toBeInTheDocument();
  });

  test("renders no data message if topCreators array is empty", () => {
    render(<CreatorList topCreators={[]} />);
    expect(screen.getByText("No creators available.")).toBeInTheDocument();
  });

  test("renders correct number of ListItems and Dividers", () => {
    render(<CreatorList topCreators={mockedTopCreators} />);
    const listItems = screen.getAllByRole("listitem");
    const dividers = screen.getAllByRole("separator");

    expect(listItems.length).toBe(mockedTopCreators.length);
    expect(dividers.length).toBe(mockedTopCreators.length - 1);
  });
});
