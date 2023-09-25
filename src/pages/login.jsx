import { Route, Routes } from 'react-router-dom';
import { NonLayoutRoutes, LayoutRoutes } from './routes/index';
import Layout from './layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // started new repo Muhammad/Error-Handling-React
  return (
    <>
      <ToastContainer />
      <Routes>
        {NonLayoutRoutes.map((elem) => (
          <Route path={elem.path} element={elem.element} />
        ))}

        <Route element={<Layout />}>
          {LayoutRoutes.map((elem) => (
            <Route path={elem.path} element={elem.element} />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;
