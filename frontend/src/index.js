import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App';
import Header from './components/header';
import Footer from './components/footer';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Register from './components/register';
import Login from './components/login';
import Logout from './components/logout';
import SinglePage from './components/singlePage';


const theme = createTheme({});

const root = ReactDOM.createRoot(document.getElementById('root'));

const routing = (
  <ThemeProvider theme={theme}>
    <Router>
      <React.StrictMode>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/post/:slug" element={<SinglePage />} />
        </Routes>
        <Footer />
      </React.StrictMode>
    </Router>
  </ThemeProvider>
);

root.render(routing);

// Eğer uygulamanızın çevrimdışı çalışmasını ve daha hızlı yüklenmesini istiyorsanız, aşağıdaki kodu kullanabilirsiniz.
// unregister() yerine register() yapabilirsiniz. Ancak, bu bazı riskler içerir.
// Daha fazla bilgi için: https://bit.ly/CRA-PWA
serviceWorker.unregister();
