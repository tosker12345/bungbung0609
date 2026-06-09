
import { endpoint, internal } from "akanjs/signal";

import * as srv from "../srv";

export class AsdInternal extends internal(srv.asd, () => ({})) {}

export class AsdEndpoint extends endpoint(srv.asd, () => ({})) {}
  