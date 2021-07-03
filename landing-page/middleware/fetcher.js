
import { request } from "graphql-request";

const fetcher = (query) => request("http://localhost:4000/graphql", query);

export default fetcher;