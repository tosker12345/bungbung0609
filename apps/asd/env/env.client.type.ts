
import type { ClientEnv } from "akanjs/base";

export type AppClientEnv = ClientEnv & {
  cloudflare?: {
    siteKey: string;
  };
};
  