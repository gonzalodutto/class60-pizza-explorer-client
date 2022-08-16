import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { selectPizzas } from "../../store/pizzas/selectors";
import { PizzaCard } from "../PizzaCard";

const PizzaList = () => {
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectPizzas);

  console.log(pizzas);

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>!
      </p>
      The number of pizzas is: <b>{pizzas.length}</b>
      <ul>
        {pizzas
          ? pizzas.map((pizza, i) => (
              <PizzaCard
                key={i}
                name={pizza.name}
                description={pizza.description}
                bought={pizza.bought}
                // dateOfBirth={pizza.dateOfBirth}
              />
            ))
          : "loading..."}
      </ul>
    </div>
  );
};

export { PizzaList };
