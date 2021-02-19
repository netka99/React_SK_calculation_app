import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStoreAlt } from "@fortawesome/free-solid-svg-icons";

const FormInputCard = () => {
  const [data, setData] = useState({
    sklep: ["Stankiewicz1", "Stankiewicz2"],
    kartacze: "",
    babka: "",
    kiszka: "",
  });

  const { sklep, kartacze, babka, kiszka } = data;

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
            [sklep, kartacze, babka, kiszka, new Date().toLocaleString()],
          ]),
        }
      );
      await response.json();
      setData({ ...data, sklep: "", kartacze: "", babka: "", kiszka: "" });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <FontAwesomeIcon icon={faStoreAlt} size="lg" />
        <h3
          type="text"
          name="sklep"
          value={data.sklep[0]}
          onChange={handleChange}
        >
          Stankiewicz 1
        </h3>
      </div>
      <div>
        <h3>Ilość</h3>
        <h3>Koszt</h3>
      </div>
      <div>
        <label htmlFor="kartacze">Kartacze</label>
        <input
          type="text"
          name="kartacze"
          value={kartacze}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="babka">Babka</label>
        <input type="text" name="babka" value={babka} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="kiszka">Kiszka</label>
        <input
          type="text"
          name="kiszka"
          value={kiszka}
          onChange={handleChange}
        />
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default FormInputCard;
