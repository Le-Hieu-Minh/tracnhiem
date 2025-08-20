import "./LayoutDefalt.scss";
import { Outlet, NavLink, Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";


function LayoutDefault() {
  const token = Cookies.get("token");
  const isLogin = useSelector(state => state.loginReducer);//muc dich de cho component render lai cap nhap giao dien ko can bam reload
  console.log(isLogin);

  return (
    <>
      <div className="layout__default">
        <header className="layout__default--header">

          <div className="layout__default--logo">
            <Link to="/" >
              Quiz
            </Link>
          </div>


          <div className="menu">
            <ul className="menu__item">
              <li>
                <NavLink to="/" >Home</NavLink>
              </li>
              {token && (
                <>
                  <li>
                    <NavLink to="/topic" >Topic</NavLink>
                  </li>
                  <li>
                    <NavLink to="/answer" >Answer</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>

          <div className="menu">
            <ul className="menu__item">
              {token ? (
                <>
                  <li>
                    <NavLink to="/logout"  >Logout</NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/login" >Login</NavLink>
                  </li>
                  <li>
                    <NavLink to="/register" >Register</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>

        </header>
        <main className="layout__default--main">
          <Outlet />
        </main>

        <footer className="layout__default--footer">
          Copyright LeMinhHieu
        </footer>
      </div>
    </>
  );
}
export default LayoutDefault;
