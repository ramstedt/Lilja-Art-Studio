import "@/styles/globals.css";
import "@/components/Navbar/Navbar.css";
import Layout from "@/components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
