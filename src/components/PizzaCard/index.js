import "./styles.css";
import { useSelector } from "react-redux";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { selectUser } from "../../store/user/selectors";
import { useDispatch } from "react-redux";
import { toggleFavorites } from "../../store/user/slice";

const PizzaCard = (props) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <img className="card-header-img" src={props.image} alt="fg" />
      <div className="card-body ">
        <b className="title">{props.name}</b>
        <p>{props.description}</p>
        <div>
          We sell it <b>{props.bought}</b> times! :D
        </div>
        <br />
        <button
          className="favorite-button"
          onClick={() => dispatch(toggleFavorites(props.id))}
        >
          {user.favorites.includes(props.id) ? <FaHeart /> : <FaRegHeart />}
        </button>
        <br />
      </div>
    </div>
  );
};

export { PizzaCard };
