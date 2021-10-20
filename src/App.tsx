import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import './App.css';
import { PostContainer } from './components/PostContainer';
import { PostContainer2 } from './components/PostContainer2';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { IUser } from './models/IUser';
import { fetchUsers } from './redux/actionCreators/userAC';
import { userSlice } from './redux/reducers/userReducer/userSlice';

export const App: FC = () => {
  // const dispatch = useAppDispatch();
  // const { users, isLoading, error } = useAppSelector(state => state.userReducer);

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);

  return (
    <div className="App">
      {/* {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)} */}
      <div style={{ display: 'flex' }}>
        <PostContainer />
        <PostContainer2 />
      </div>
    </div>
  );
}
