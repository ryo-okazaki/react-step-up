import {useParams} from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>UrlParameterです</h1>
      <p>パラメータは{id}です</p>
    </div>
  );
}