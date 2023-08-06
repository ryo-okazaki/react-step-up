import {TodoType} from "./types/todo";
import {FC} from "react";

// export const Todo = (
//   props: Pick<TodoType, "userId" | "title" | "completed">
//   // props: Omit<TodoType, "id">
// ) => {
  export const Todo: FC<Pick<TodoType, "userId" | "title" | "completed">> = (props) => {
  const {title, userId, completed = false} = props;
  const completedMark = completed ? "[完]" : "[未]";

  return <p>{`${completedMark} ${title}  ユーザー:${userId}`}</p>
}