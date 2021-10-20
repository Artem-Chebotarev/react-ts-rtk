import React, { FC } from 'react';
import { postAPI } from '../services/PostService';
import { PostItem } from './PostItem';

export const PostContainer2: FC = () => {
    const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(10);

    return (
        <div className="post__list">
            {/* {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>Произошла ошибка при загрузке</h1>}
            {
                posts && posts.map(elem =>
                    <PostItem key={elem.id} post={elem} />
                )
            } */}
        </div>
    );
}
