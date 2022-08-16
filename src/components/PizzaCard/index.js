const PizzaCard = (props) => {
  return (
    <div>
      <li>
        <b>{props.name}</b>
        <p>{props.description}</p>
        We sell it <b>{props.bought}</b> times! :D
      </li>
      <br />
    </div>
  );
};

export { PizzaCard };
