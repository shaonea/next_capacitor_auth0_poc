import styles from "./page.module.css";
import { } from "@auth0/nextjs-auth0";

import Login from "./login"
import Logout from "./logout"
import ProfileClient from "./profile-client/page"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p><Login/></p>
        <p><Logout/></p>
        <ProfileClient/>
      </div>
    </main>
  );
}
