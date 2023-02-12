import { login } from "@/pages/features/userinfo/userSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from '../../../styles/Login.module.css';
const LoginForm = () => {
const [remember, setRemember] = useState(false);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const dispatch = useDispatch();
const {user,token} = useSelector(state=>state.user)
/*----------------Login Handeler Func--------------*/
    const loginHandeler =async (e) => {
        e.preventDefault();
        try {
         if(email && password){
          const  data =await LoginFunc(email, password)
          dispatch(login(data))
          if(token){
          alert("You Are Admin Bro")
          }
         }
        } catch (error) {
          console.log(error)
        }
     }
     /*----------------Login Handeler Func--------------*/
    return (
        <form onSubmit={loginHandeler}>
              <div className="mb-6">
                <input
                  type="text"
                  className={styles.formcontroler}
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  className={styles.formcontroler}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
    
              <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className={`${styles.form_cheack} ${remember?"checked:bg-blue-600 checked:border-blue-600":""}`}
                    id="exampleCheck3"
                    checked={`${remember?remember:null}`}
                    onClick={() => setRemember(!remember)}
                  />
                  <label className="form-check-label inline-block text-gray-800" 
                    >Remember me</label
                  >
                </div>
              </div>
              <button
                type="submit"
                className={styles.login_submit_btn}
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              > Sign in
              </button>
            </form>
    );
};

export default LoginForm;