import Layout from "../layout/Layout";
import "../styles/globals.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  const Auth0Domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN;
  const Auth0ClientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID;

  return (
    <Auth0Provider
      domain={Auth0Domain}
      clientId={Auth0ClientId}
      redirectUri="/"
    >
      <Layout>
        <Component {...pageProps} />
        <Toaster />
      </Layout>
    </Auth0Provider>
  );
}

export default MyApp;
