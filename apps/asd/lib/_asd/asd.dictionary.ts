
import { serviceDictionary } from "akanjs/dictionary";

import type { AsdEndpoint } from "./asd.signal";

export const dictionary = serviceDictionary(["en", "ko"])
  .endpoint<AsdEndpoint>((fn) => ({}))
  .translate({});
