import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Root'
import ErrorPage from './Components/Error'
import Contact from './Components/Contact'
import { getContactLoader, getContactsLoader } from './Loader/contactsloader'
import { createContactAction, deleteContactAction, editContactAction, updateContactFavorite } from './Actions/contactsaction'
import EditContact from './Components/Editcontact'
import Index from './Components'
import Loading from './Components/Loading'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getContactsLoader,
    action: createContactAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: '/contacts/:contactId',
            element: <Contact />,
            loader: getContactLoader,
            action: updateContactFavorite,

          }, {
            path: '/contacts/:contactId/edit',
            element: <EditContact />,
            loader: getContactLoader,
            action: editContactAction,
          }, {
            path: "contacts/:contactId/destroy",
            action: deleteContactAction,
            errorElement: <div>Opps! There was an error deleting the contact </div>
          },
        ],
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} fallbackElement={<Loading />} ></RouterProvider>
  </StrictMode>,
)
