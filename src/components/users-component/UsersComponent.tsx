import React, {useEffect, useState} from 'react';
import UserComponent from "../user-component/UserComponent";
import {IUser} from "../../models/IUser";
import {getAllUsers, getPostsOfUserById} from "../../services/api.service";
import {IPost} from "../../models/IPost";
import PostsComponent from "../posts-component/PostsComponent";
import './users-component.css'

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        getAllUsers().then((value: IUser[]) => {
            setUsers([...value]);
        });
    }, []);

    const getPosts = (id: number) => {
        getPostsOfUserById(id).then(posts => setPosts([...posts]));
    }

    return (
        <div>
            <h2>Users</h2>
            <div className="wrap-users">
                {
                    users.map((user) => (
                        <UserComponent
                            key={user.id}
                            user={user}
                            getPosts={getPosts}
                        />))
                }
            </div>
            <h2>Posts</h2>
            <div>
                <PostsComponent posts={posts}/>
            </div>
        </div>
    );
};

export default UsersComponent;