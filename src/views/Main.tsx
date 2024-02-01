import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    useLoaderData
} from 'react-router-dom';

const router = createBrowserRouter([
    {
        id: 'root',
        path: '/',
        loader: () => ({ message: "Hello Data Router" }),
        Component() {
            let data = useLoaderData() as { message: string };
            return <h1>{data.message}</h1>
        }
    }
]);

export default function Main() {
    return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
};