import { postRegister, checkRegister } from "../../Service/RegisterService";
import generateToken from '../../helper/generateToken.js';
import { useNavigate } from "react-router-dom";
import './register.css'


function Register() {
  const navigate = useNavigate()
  const handleRegister = async (e) => {
    e.preventDefault();


    const fullName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const token = generateToken();


    const option = {
      fullName,
      email,
      password,
      token
    };

    const checkRegis = await checkRegister(email)
    if (checkRegis) {
      alert("tai khoan ton tai")
    } else {
      const result = await postRegister(option);
      if (result) {
        navigate("/login")
        alert("dang ky thanh cong")
      } else {
        alert("dang ky that bai")
      }
    }

  }

  return (
    <>
      <div className="register-container">
        <form onSubmit={handleRegister} >
          <h2>Register</h2>
          <div>
            <input type="text" placeholder="Nhap fulName" />
          </div>
          <div>
            <input type="email" placeholder="Nhap mail" />
          </div>
          <div>
            <input type="password" placeholder="Nhap password" />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>

    </>
  )
}
export default Register;