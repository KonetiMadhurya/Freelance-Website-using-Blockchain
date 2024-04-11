import "../styles/globals.css";
import {NavBar, Footer} from "../../components/compindex";

const MyApp = ({ Component, pageProps }) => {
   return (
   <div>
      <NavBar />
      <Footer />
      <Component {...pageProps} />
   </div>
   );
};
export default MyApp;