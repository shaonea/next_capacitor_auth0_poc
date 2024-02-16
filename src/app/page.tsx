import styles from "./page.module.css";
import { } from "@auth0/nextjs-auth0";
import Link from 'next/link'

import Login from "./login"
import Logout from "./logout"
import ProfileClient from "./profile-client/page"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p><Login/></p>
        <p><Logout/></p>
        <p><Link href="/embededlogin">Embedded Login</Link></p>
        {/* <p><LoginEmbed/></p> */}
        <ProfileClient/>
      </div>
    </main>
  );
}
