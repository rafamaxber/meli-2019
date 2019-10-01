import axios from 'axios';
import req from "supertest";
import server from '../app';

jest.mock('axios')

test("[GET] /api/items?q=notebooks", async () => {
  const users = [{name: 'Bob'}];
  const resp = { data: users };
  axios.get.mockImplementation(() => Promise.resolve(resp))

  const res = await req(server).get("/api/items?q=notebooks");
  expect(res.text).toBe("Hello ts-node!");
});
