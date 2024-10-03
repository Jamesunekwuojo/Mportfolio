import "./Button.css";
import {Link} from "react-router-dom"

const Button = () => {
    return(
        <div>
          <button  className='startButton p-4' ><Link className="link" to="/about">More about me </Link></button>
        </div>
    );

}
export default Button