import {PrimaryButton} from "../atoms/buttons/PrimaryButton.jsx";
import {Input} from "../atoms/input/Input.jsx";

export const SearchInput = () => {
  return (
    <div>
      <Input placeholder='検索条件を入力' />
      <PrimaryButton>検索</PrimaryButton>
    </div>
  )
}