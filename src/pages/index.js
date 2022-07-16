/* import { Auth0Provider } from "@auth0/auth0-react";
import { useRouter } from "next/router"; */
import { App } from "../layout/App";

function Home() {
  console.log(process.env.NEXT_PUBLIC_AUTH0_DOMAIN);
  console.log(process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID)
  return (
    <>
      <App />
    </>
  );
}

export default Home;