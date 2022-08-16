import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { selectPizzas } from "../../store/pizzas/selectors";
import { PizzaCard, AddPizzaForm } from "../../components";
import "./styles.css";

const PizzaList = () => {
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectPizzas);

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome, <strong>{user.name}</strong>!
      </p>
      The number of pizzas is: <b>{pizzas.length}</b>
      <div className="pizzaList">
        {pizzas
          ? pizzas.map((pizza, i) => (
              <PizzaCard
                key={i}
                name={pizza.name}
                description={pizza.description}
                bought={pizza.bought}
                image={pizza.image}
                id={pizza.id}
              />
            ))
          : "loading..."}
      </div>
      <div>
        <AddPizzaForm />
      </div>
    </div>
  );
};

export { PizzaList };
