import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../pages/Error';
import Index from '../pages/Index';
import StreamingPage from '../pages/StreamingPage';
import StreamsPage from '../pages/StreamsPage';

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
                        path: "streams",
                        element: <StreamsPage />
                    },
                    {
                        path: "streams/:streamId",
                        element: <StreamingPage />
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
