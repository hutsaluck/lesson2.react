import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import './user-component.css'

interface IProps {
    user: IUser
    getPosts: (id:number) => void
}

const UserComponent: FC<IProps> = ({user, getPosts}) => {
    return (
        <div className="user-item">
            <h3>{user.id}. {user.name}</h3>
            <button onClick={() => getPosts(user.id)}>show posts of this user</button>
        </div>
    );
};

export default UserComponent;