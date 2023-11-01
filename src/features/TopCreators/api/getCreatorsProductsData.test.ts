import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {
  getCreatorsProductsData,
  CreatorsProductsData,
} from "./getCreatorsProductsData";
import axiosInstance from "../../../interceptors/axiosInstance";

const mockData: CreatorsProductsData = {
  Creators: [
    { id: "1", email: "user1@example.com" },
    { id: "2", email: "user2@example.com" },
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
  ],
};

describe("getCreatorsProductsData function", () => {
  it("fetches data successfully", async () => {
    const mock = new MockAdapter(axiosInstance);
    mock.onGet().reply(200, mockData);

    const result = await getCreatorsProductsData();

    expect(result).toEqual(mockData);
  });

  it("handles errors properly", async () => {
    const mock = new MockAdapter(axios);
    mock.onGet().reply(404);

    try {
      await getCreatorsProductsData();
      expect(true).toBe(false);
    } catch (error: any) {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(error.message).toBeDefined();
    }
  });
});
