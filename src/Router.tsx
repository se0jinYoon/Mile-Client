import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GroupFeed from './pages/groupFeed/GroupFeed';
import Login from './pages/login/Login';
import Main from './pages/main/Main';
import PostDetail from './pages/postDetail/PostDetail';
import PostEditor from './pages/postEditor/PostEditor';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/group/:groupId" element={<GroupFeed />} />
        <Route path="/detail/:groupId" element={<PostDetail />} />
        <Route path="/edit/:groupId" element={<PostEditor />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<div>Error Page</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;