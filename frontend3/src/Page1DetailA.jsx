import {useLocation} from "react-router-dom";

export const Page1DetailA = () => {
  const {state} = useLocation();
  console.log(state);
  // ボタンクリック(JSでの遷移)の場合、stateは渡していない
  return (
    <div>
      <h1>Page1DetailAです</h1>
    </div>
  );
}