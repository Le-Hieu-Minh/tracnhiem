
import { getLogin } from "../../Service/LoginService";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux"
import { checkLogin } from "../../action/login";
import './login.css'
function Login() {


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    const result = await getLogin(email, password);

    console.log(result);


    if (result.length > 0) {
      console.log(result);

      Cookies.set("id", result[0].id, { expires: 1 });
      Cookies.set("fullName", result[0].fullName, { expires: 1 });
      Cookies.set("email", result[0].email, { expires: 1 });
      Cookies.set("token", result[0].token, { expires: 1 });
      Cookies.set("islg", "true", { expires: 1 });
      dispatch(checkLogin(true));
      navigate("/");
    } else {
      alert("sai tai khoan mk hoac tao tai khoan moi");
    }
  }

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit} >
          <h2>Login</h2>
          <div>
            <input type="email" placeholder="Nhap mail" />
          </div>
          <div>
            <input type="password" placeholder="Nhap password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  )
}
export default Login;