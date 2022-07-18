// ? Import Base Styles
import "../styles/globals.css";

// ? Import Animate Styles
import "animate.css";

// ? Import Hooks from auth0-next
import { UserProvider } from "@auth0/nextjs-auth0";

// ? Import Toaster component to initialize the librarie on the app
import { Toaster } from "react-hot-toast";

// ? Import Layout
import Layout from "../layout/Layout";

// * App
function MyApp({ Component, pageProps }) {
  // * Render App
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
