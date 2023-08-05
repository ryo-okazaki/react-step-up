import {PrimaryButton} from "../atoms/buttons/PrimaryButton.jsx";

export const SearchInput = () => {
  return (
    <div>
      <input placeholder='検索条件を入力' />
      <PrimaryButton>検索</PrimaryButton>
    </div>
  )
}