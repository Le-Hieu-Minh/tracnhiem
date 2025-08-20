import LayoutDefault from "../Layout/LayoutDefault";
import Home from '../Page/Home'
import Answer from '../Page/Answer'
import Topic from '../Page/Topic'
import Login from "../Page/Login";
import Register from "../Page/Register";
import PrivateRouter from "../Components/PricateRouter";
import Quiz from '../Page/Quiz';
import Result from '../Page/Result';
import Logout from "../Page/Logout";

export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "Register",
        element: <Register />
      },
      {
        path: "logout",
        element: <Logout />
      },
      {
        element: <PrivateRouter />,
        children: [
          {
            path: "topic",
            element: <Topic />
          },
          {
            path: "answer",
            element: <Answer />
          },
          {
            path: "result/:id",
            element: <Result />
          },
          {
            path: "quiz/:id",
            element: <Quiz />
          },
        ]
      },
    ]
  }
];

