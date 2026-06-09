
import "./styles.css";
import type { LayoutProps } from "akanjs/client";


export const head = (
  <>
    <title>asd</title>
    <link rel="icon" href="/favicon.ico" />
  </>
);

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {children}
    </>
  );
}
  