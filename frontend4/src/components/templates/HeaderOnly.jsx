import {Header} from "../atoms/layout/Header.jsx";

export const HeaderOnly = (props) => {
  const {children} = props;

  return (
    <>
      <Header />
      {children}
    </>
  )
}