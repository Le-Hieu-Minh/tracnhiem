import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../action/login";
function Logout() {



  const isLogin = useSelector(state => state.loginReducer)
  console.log(isLogin);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {

    Cookies.remove('id')
    Cookies.remove('fullName')
    Cookies.remove('email')
    Cookies.remove('token')
    dispatch(checkLogin(false))
    navigate("/login");
  }, [isLogin])

  return (
    <>


    </>
  )
}
export default Logout;