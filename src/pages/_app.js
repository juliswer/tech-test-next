import "../styles/globals.css";
import Layout from "../layout/Layout";
import { UserProvider } from "@auth0/nextjs-auth0";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {

  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
        <Toaster />
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
