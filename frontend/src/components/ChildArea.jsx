import {memo} from "react";

const style = {
  width: '100%',
  height: '200px',
  backgroundColor: 'khaki',
}

export const ChildArea = memo((props) => {
  const {open, onClickClose} = props;

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log('aaa');
  })

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  )
});

// memoは、propsが変更されない限り再レンダリングしないという意味
// 複数コンポーネントを抱える or 肥大化が予想されるコンポーネントはmemo化した方が良い