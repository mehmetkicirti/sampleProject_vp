import { createMemorySource, createHistory } from "@reach/router";

const source = createMemorySource("/");
export const history = createHistory(source);
export const navigate = history.navigate;