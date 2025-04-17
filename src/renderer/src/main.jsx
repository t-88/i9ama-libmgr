import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Books from './pages/books/Books';
import Users from './pages/users/Users';
import Admins from './pages/admins/Admins';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HashRouter>
    <Routes>

      <Route path="/" element={<App />}>
        <Route index element={<Books />} />
        <Route path="users" element={<Users />} />
        <Route path="admins" element={<Admins />} />
      </Route>
    </Routes>
  </HashRouter>
);
