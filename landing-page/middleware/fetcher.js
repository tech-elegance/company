
import { request } from "graphql-request";

const fetcher = (query) => request("http://13.229.87.195/graphql", query);

export default fetcher;