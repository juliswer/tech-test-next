import { Auth0Provider } from "@auth0/auth0-react";
import { useRouter } from "next/router";

import App from "../layout/App";

function Home() {
  const Auth0Domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN;
  const Auth0ClientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID;

  const router = useRouter();
  
  return (
    <Auth0Provider
      domain={Auth0Domain}
      clientId={Auth0ClientId}
      redirectUri={router.pathname}
    >
      <App />
    </Auth0Provider>
  );
}

export default Home;
