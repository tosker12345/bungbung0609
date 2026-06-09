
import { serve } from "akanjs/service";

export class AsdService extends serve("asd" as const, { serverMode: "batch" }, () => ({})) {}
