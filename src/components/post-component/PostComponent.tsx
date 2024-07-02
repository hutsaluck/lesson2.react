import React, {FC} from 'react';
import './post-component.css'
import {IPost} from "../../models/IPost";

interface IProps {
    post: IPost
}

const UserComponent: FC<IProps> = ({post}) => {
    return (
        <div className="post-item">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default UserComponent;