import { combineReducers } from "redux";
import PostsReducer from "./reducer_posts";
import CommentsReducer from "./reducer_comments";
import UserReducer from "./reducer_user";

const rootReducer = combineReducers({
  posts: PostsReducer,
  comments: CommentsReducer,
  user: UserReducer
});

export default rootReducer;
