import React, { FC, useEffect, useState } from 'react';
import { IPost } from '../models/IPost';
import { postAPI } from '../services/PostService';
import { PostItem } from './PostItem';

export const PostContainer: FC = () => {
    const [limit, setLimit] = useState<number>(100);

    // const { data: posts, error, isLoading, refetch } = postAPI.useFetchAllPostsQuery(limit, {
    //     pollingInterval: 1000 // автоматические обновление (отправка запроса) каждые 1000 мсек
    // });

    const { data: posts, error, isLoading, refetch } = postAPI.useFetchAllPostsQuery(limit)
    const [createPost, { error: createError, isLoading: createLoading }] = postAPI.useCreatePostMutation();
    const [updatePost, { }] = postAPI.useUpdatePostMutation();
    const [deletePost, { }] = postAPI.useDeletePostMutation();

    useEffect(() => {
        // setTimeout(() => {
        //     setLimit(3);
        // }, 1000);
    }, []);

    const handleCreate = async () => {
        const title = prompt('');
        await createPost({ title, body: title } as IPost);
    }

    const handleRemove = (elem: IPost) => {
        deletePost(elem);
    }

    const handleUpdate = (elem: IPost) => {
        updatePost(elem);
    }

    return (
        <div className="post__list">
            {/* <button onClick={() => refetch()}>REFETCH</button> */}
            <button onClick={handleCreate}>Add new post</button>
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>Произошла ошибка при загрузке</h1>}
            {
                posts && posts.map(elem =>
                    <PostItem remove={handleRemove} update={handleUpdate} key={elem.id} post={elem} />
                )
            }
        </div>
    );
}
