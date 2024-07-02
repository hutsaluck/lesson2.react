import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
import './posts-component.css'
import PostComponent from "../post-component/PostComponent";

interface IProps {
    posts: IPost[]
}

const PostsComponent: FC<IProps> = ({posts}) => {
    return (
        <div className="wrap-posts">
            {
                posts.map(post => <PostComponent key={post.id} post={post} />)
            }
        </div>
    );
};

export default PostsComponent

