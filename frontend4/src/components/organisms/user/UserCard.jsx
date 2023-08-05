import styled from "styled-components";

export const UserCard = () => {
  return (
    <div>
      <img height={160} width={160} src='https://source.unsplash.com/ZCHj_2lJP00' alt="プロフィール" />
      <p>名前</p>
      <Sdl>
        <dt>メール</dt>
        <dd>dummy@example.com</dd>
        <dt>TEL</dt>
        <dd>01234567890</dd>
        <dt>会社名</dt>
        <dd>ダミー株式会社</dd>
        <dt>Webサイト</dt>
        <dd>example.com</dd>
      </Sdl>
    </div>
  )
}

const Sdl = styled.dl`
  text-align: left;
  margin-bottom: 0;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
  }
`
