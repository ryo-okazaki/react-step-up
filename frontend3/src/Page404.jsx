import {Link} from "react-router-dom";

export const Page404 = () => {
  return (
    <div>
      <h1> ページが見つかりませんでした。</h1>
      <h2><Link to="/">Topに戻る</Link></h2>
    </div>
  )
}