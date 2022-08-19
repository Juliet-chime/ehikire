import PostItemProps from "./postItemType";
import "./style.css";

function PostItem({ id, name, currency }: PostItemProps) {
  return (
    <div className="post">
      <small>{id}</small>
      <h1>{name}</h1>
      <p>{currency}</p>
    </div>
  );
}

export default PostItem;
