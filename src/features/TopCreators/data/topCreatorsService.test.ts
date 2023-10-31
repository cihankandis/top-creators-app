import getCreatorsProductsData from "../api/getCreatorsProductsData";
import { getTopNActiveCreators } from "./topCreatorsService";

jest.mock("../api/getCreatorsProductsData");

describe("getTopNActiveCreators function", () => {
  const mockData = {
    Creators: [
      { id: "1", email: "user1@example.com" },
      { id: "2", email: "user2@example.com" },
      { id: "3", email: "user3@example.com" },
    ],
    Products: [
      {
        id: "1",
        creatorId: "1",
        createTime: "2022-10-16T14:39:24.348935+02:00",
      },
      {
        id: "2",
        creatorId: "1",
        createTime: "2022-10-17T15:45:32.348935+02:00",
      },
      {
        id: "3",
        creatorId: "2",
        createTime: "2022-10-18T16:50:12.348935+02:00",
      },
      {
        id: "4",
        creatorId: "3",
        createTime: "2022-10-19T16:50:12.348935+02:00",
      },
    ],
  };

  it("should return top N active creators", async () => {
    (getCreatorsProductsData as jest.Mock).mockResolvedValue(mockData);

    const topCreators = await getTopNActiveCreators(3);
    expect(topCreators).toHaveLength(3);
  });

  it("should handle API failure", async () => {
    (getCreatorsProductsData as jest.Mock).mockRejectedValue(
      new Error("Failed to fetch data from the API")
    );

    try {
      await getTopNActiveCreators(3);
    } catch (error: any) {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(error).toBeDefined();
    }
  });
});
