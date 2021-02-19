import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStoreAlt } from "@fortawesome/free-solid-svg-icons";
/*
const FormInputCard = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/ann1111/google_sheets/RxXCxOtJTlQEfoCK?tabId=Arkusz1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [name, email, message, new Date().toLocaleString()],
          ]),
        }
      );
      await response.json();
      setData({ ...data, name: "", email: "", message: "" });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <FontAwesomeIcon icon={faStoreAlt} size="lg" />
        <h3>Stankiewicz 1</h3>
      </div>
      <div>
        <h3>Ilość</h3>
        <h3>Koszt</h3>
      </div>
      <div>
        <label htmlFor="name">Kartacze</label>
        <input type="text" name="name" value={name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" value={email} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="5"
          value={message}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default FormInputCard;
*/
