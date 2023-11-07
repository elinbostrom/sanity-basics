import * as blocks from "./blocks";
import * as documents from "./documents";
import * as objects from "./objects";

const schemas = [
  ...Object.values(blocks),
  ...Object.values(documents),
  ...Object.values(objects),
];

export default schemas;
