// ----------- imports ----------------
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from "../components/UI/Modal";
import foodBankMock from "../mock/foodbank.json";

// --------- functions --------------
const FoodBank = () => {
  // name and address display, plus items in each bank
  const [foodBank, setFoodBank] = useState(null);

  const [modalActive, setModalActive] = useState(false);

  // link param to city name
  const params = useParams();

  // drop off modal

  // drop off inputtd items -> pending backend api
  const [dropOffItems, setDropOffItems] = useState(null);

  //  this should get foodbank from api, but using mock data atm
  // I am using useEffect being the component will send a fetch request as a side-effect
  useEffect(() => {
    setFoodBank(foodBankMock);
  }, []);

  // ----------- handlers --------------------
  // submitting form - picking up/dropping off

  if (!foodBank) {
    return null;
  }

  // ------------- render -----------------

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        your foodbank id: {params.id}
      </h1>
      <div>
        {foodBank.name} {foodBank.description}
      </div>

      {/* --------- drop off form ---------- */}

      <div class="w-full max-w-lg p-10 bg-blue-100 m-10">
        <span class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Spare food?
        </span>

        <button
          onClick={() => setModalActive(true)}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
        >
          click
        </button>
      </div>

      {/* ----------------- items to collect form ------------- */}

      <div class="w-full max-w-lg p-10 bg-blue-100 m-10">
        <span class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Items available
        </span>
        {foodBank.items.map((item) => (
          <div class="flex justify-between m-5">
            <p>{item.name}</p>

            <button
              onClick={() => setModalActive(true)}
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
            >
              click
            </button>
          </div>
        ))}
      </div>

      <Modal active={modalActive} handleClose={() => setModalActive(false)}>
        Hello!
      </Modal>
    </>
  );
};

export default FoodBank;

// doc. for params - https://reactrouter.com/docs/en/v6/faq