import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { ReactNode } from "react";
import styles from "./Layout.module.scss";

export function PageNav() {
  return (
    <nav className={styles["page-nav"]}>
      <Link href="/">Auto Robot</Link>
      <ConnectButton />
    </nav>
  );
}

export function PageFooter() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/darkXmo/d5-next"
        rel="noopener noreferrer"
        target="_blank"
      >
        This Project is powered by Xmo
      </a>
    </footer>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      <PageNav></PageNav>
      <main>{children}</main>
      <PageFooter></PageFooter>
    </div>
  );
}
