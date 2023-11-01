/* eslint-disable testing-library/no-wait-for-multiple-assertions */

import { render, waitFor, screen } from "@testing-library/react";
import { getTopNActiveCreators } from "../../data/topCreatorsService";
import TopCreators from "./TopCreators";

jest.mock("../../data/topCreatorsService");

const mockedCreators = [
  {
    id: 1,
    user: { email: "john@example.com" },
    productCount: 5,
    mostRecentProduct: { createTime: "2023-10-31T12:00:00" },
  },
  {
    id: 2,
    user: { email: "jane@example.com" },
    productCount: 8,
    mostRecentProduct: { createTime: "2023-10-30T09:30:00" },
  },
];

describe("TopCreators Component", () => {
  test("renders TopCreators component with fetched data", async () => {
    (getTopNActiveCreators as jest.Mock).mockResolvedValue(mockedCreators);

    render(<TopCreators maxTopCreators={3} />);

    await waitFor(() => {
      expect(getTopNActiveCreators).toHaveBeenCalledWith(3);
      expect(screen.getByText("Top 3 Active Creators")).toBeInTheDocument();
      expect(screen.getByText("Creator: john@example.com")).toBeInTheDocument();
      expect(screen.getByText("Product count: 5")).toBeInTheDocument();
    });
  });

  // test("renders loading state while fetching data", async () => {
  //   (getTopNActiveCreators as jest.Mock).mockResolvedValue(mockedCreators);

  //   render(<TopCreators maxTopCreators={3} />);

  //   expect(screen.getByText("Top 3 Active Creators")).toBeInTheDocument();
  //   expect(screen.getByText("Loading...")).toBeInTheDocument();
  // });
});
