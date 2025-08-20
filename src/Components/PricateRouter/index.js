import { Outlet, Navigate } from "react-router-dom";


function PrivateRouter() {
  const isLogin = true;
  return (
    <>
      {isLogin ? (<Outlet />) : (<Navigate to="/login" />)}
    </>
  );
}
export default PrivateRouter;