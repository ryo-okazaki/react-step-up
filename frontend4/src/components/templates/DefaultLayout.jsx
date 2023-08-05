import {Header} from "../atoms/layout/Header.jsx";
import {Footer} from "../atoms/layout/Footer.jsx";

export const DefaultLayout = (props) => {
  const {children} = props;

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}