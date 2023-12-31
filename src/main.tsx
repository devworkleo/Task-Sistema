import { createBrowserRouter, RouterProvider } from "react-router-dom"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.ts'

const router = createBrowserRouter([
  { path: '/', element: <App />, errorElement: <>Erro</>, children: [
    { path: '/', element: <App /> },
  ] }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
