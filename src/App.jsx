import { Route, Routes } from 'react-router-dom';
import { NonLayoutRoutes, LayoutRoutes } from './routes/index';
import Layout from './layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ErrorBoundary } from 'react-error-boundary';
import FetchingError from './components/FetchingError';
import handleError from './components/HandleError';

function App() {
  // started new repo Muhammad/Error-Handling-React
  return (
    <>
      <ToastContainer />
      <ErrorBoundary FallbackComponent={FetchingError} onError={handleError} >
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
      </ErrorBoundary>
    </>
  );
}

export default App;
