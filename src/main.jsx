import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, HashRouter } from 'react-router-dom';
import App from './App.jsx'
import QuizGeral from './Pages/Quiz/QuizGeral/QuizGeral.jsx';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';
import PagePrincipal from './Pages/PagePrincipal/PagePrincipal.jsx';
import PageEmail from './Pages/PageEmail/PageEmail.jsx';
import PercaPeso from './Pages/PercaPeso/PercaPeso.jsx';
import PagePlano from './Pages/PagePlano/PagePlano.jsx';
import TermosDeUso from './Pages/TermosDeUso/TermosDeUso.jsx';
import Politicas from './Pages/Politicas/Politicas.jsx';
import Avaliacoes from './Pages/Avaliacoes/Avaliacoes.jsx';

const suaurl = 'quiz_react_dietas'

const router = createBrowserRouter([
  {
    path:`/${suaurl}/`,
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: `/${suaurl}/quiz`,
    element: <QuizGeral />
  },
  {
    path: `/${suaurl}/quiz/:genero/:page`,
    element: <QuizGeral />
  },
  {
    path: `/${suaurl}/quiz/:genero/mainpage`,
    element: <PagePrincipal />
  },
  {
    path: `/${suaurl}/quiz/:genero/emailpage`,
    element: <PageEmail />
  },
  {
    path: `/${suaurl}/quiz/:genero/percapeso`,
    element: <PercaPeso />
  },
  {
    path: `/${suaurl}/quiz/:genero/plano`,
    element: <PagePlano />
  },
  {
    path: `/${suaurl}/termos`,
    element: <TermosDeUso />
  },
  {
    path: `/${suaurl}/politicas`,
    element: <Politicas />
  },
  {
    path: `/${suaurl}/avaliacoes`,
    element: <Avaliacoes />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  </HashRouter>,
)

export default suaurl