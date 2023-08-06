import {TodoType} from "./types/todo";

export const Todo = (
  props: Pick<TodoType, "userId" | "title" | "completed">
  // props: Omit<TodoType, "id">
) => {
  const {title, userId, completed = false} = props;
  const completedMark = completed ? "[完]" : "[未]";

  return <p>{`${completedMark} ${title}  ユーザー:${userId}`}</p>
}