import React from "react";
import "./AddWorker.css";
function AddWorker({ setShowAddWorker }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAddWorker(false);
  };
  return (
    <div className="addWorker">
      <div className="addForm">
        <button
          onClick={() => {
            setShowAddWorker(false);
          }}
        >
          <img src="/imgs/exitModal.svg" alt="" />
        </button>
        <h3>Hodim qo’shish</h3>
        <form onSubmit={handleSubmit} action="">
          <div>
            <select name="" id="">
              <option value="">Hodim bo'limi:</option>
              <option value="">Hodim bo'limi:</option>
              <option value="">Hodim bo'limi:</option>
              <option value="">Hodim bo'limi:</option>
              <option value="">Hodim bo'limi:</option>
              <option value="">Hodim bo'limi:</option>
            </select>
            <label htmlFor="">
              {" "}
              <input placeholder="Hodim turi :" type="text" />
            </label>
            <label htmlFor="">
              {" "}
              <input placeholder="Ism familyasi :" type="text" />
            </label>
            <label htmlFor="">
              <input placeholder="Fiksa oylik : " type="text" /> UZS
            </label>
            <label htmlFor="">
              <input placeholder="Bu oy ishladi :" type="text" /> kun
            </label>
            <label htmlFor="">
              <input placeholder="KPI " type="text" /> UZS
            </label>
            <label htmlFor="">
              <input placeholder="Pop bonus Pererabotka " type="text" /> UZS
            </label>
          </div>
          <div>
            <label htmlFor="">
              <input placeholder="Qarzlariga :" type="text" /> UZS
            </label>
            <label htmlFor="">
              <input placeholder="Shtraflarga :" type="text" /> UZS
            </label>
            <label htmlFor="">
              <input placeholder="Pensiyoniylariga : " type="text" /> UZS
            </label>
            <label htmlFor="">
              <input placeholder="Olgan avansiga :" type="text" /> UZS
            </label>
            <label htmlFor="">
              Ishlamagan kuniga minus :
              <input className="workChack" type="checkbox" />
            </label>
            <button>Qo’shish</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddWorker;
