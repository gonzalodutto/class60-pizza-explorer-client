import { useState } from "react";
import { addPizza } from "../../store/pizzas/slice";
import { useDispatch } from "react-redux";

const AddPizzaForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const submit = (event) => {
    // to make sure that the form does not redirect (which is normal browser behavior)
    event.preventDefault();

    // Save in a constant the data of the form:
    const newPizza = {
      name,
      description,
    };

    console.log("new pizza:", name, description);

    // TODO:
    // - dispatch an action that sends the new pizza to the store
    dispatch(addPizza(newPizza));
    // - clear the input fields
    setName("");
    setDescription("");
  };

  return (
    <form onSubmit={submit}>
      <h2>Add a new pizza</h2>
      <p>
        <label>
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Description:{" "}
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </p>
      <p>
        <button type="submit">Add this pizza!</button>
      </p>
    </form>
  );
};

export { AddPizzaForm };
