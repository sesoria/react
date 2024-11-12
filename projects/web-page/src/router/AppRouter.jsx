import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../pages/Error';
import Index from '../pages/Index';
import StreamPage from '../pages/StreamPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    { index: true, element: <Index /> },
                    {
                        path: "streams/:streamId",
                        element: <StreamPage />
                    },
                    {
                        path: "videos/:videoId",
                        element: <div>Aqui van un videito</div>,
                    },
                ],
            }]
    }
]);

export default router;
