
import { request } from "graphql-request";

const fetcher = (query) => request("https://data.tech-elegance.com/graphql", query);

export default fetcher;