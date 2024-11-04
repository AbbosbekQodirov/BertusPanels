import React, { useState } from "react";
import "./Staff.css";
import { Link } from "react-router-dom";
import AddWorker from "../../components/addworker/AddWorker";

function Staff() {

    const [showAddWorker, setShowAddWorker] = useState(false);

  return (
    <div className="staff">
      {showAddWorker && <AddWorker setShowAddWorker={setShowAddWorker} />}
      <div className="container">
        <nav>
          <div className="mainLogo">
            <Link to={"/"}>
              <img src="/imgs/mainlogo.png" alt="" />
            </Link>
          </div>
          <ul className="mainLinks">
            <li>
              <button
                onClick={() => {
                  setShowAddWorker(true);
                }}
                className="btn"
              >
                Hodim qo’shish <img src="/imgs/plus.svg" alt="" />{" "}
              </button>
            </li>
            <li>
              <select name="" id="">
                <option value="">2024-yil</option>
                <option value="">2023-yil</option>
                <option value="">2024-yil</option>
              </select>
            </li>
            <li>
              <select name="" id="">
                <option value="">Noyabr</option>
                <option value="">Oktyabr</option>
                <option value="">Sentabr</option>
                <option value="">Avgust</option>
                <option value="">Iyul</option>
                <option value="">Iyun</option>
                <option value="">May</option>
                <option value="">Aprel</option>
                <option value="">Mart</option>
                <option value="">Fevral</option>
                <option value="">Yanvar</option>
                <option value="">Dekabr</option>
              </select>
            </li>
            <li>
              <Link to={"/search"}>
                Qidiruv <img src="/imgs/search.svg" alt="" />{" "}
              </Link>
            </li>

            <li>
              <Link>
                Chop etish <img src="/imgs/print.svg" alt="" />{" "}
              </Link>
            </li>
          </ul>
        </nav>
        <div className="controll">
          <button className=" controllBtn btn">
            Qo’shish <img src="/imgs/plus.svg" alt="" />{" "}
          </button>
          <button className="controllBtn active">
            Ofis kontora <img src="/imgs/chack.svg" alt="" />{" "}
          </button>
          <button className="controllBtn">Sendvich</button>
          <button className="controllBtn">Penoplast kesuv</button>
          <button className="controllBtn">Penoplast ishlab chiqarish</button>
          <button className="controllBtn">Tashqi savdo</button>
        </div>

        <div className="workers">
          {[1, 2, 3, 4, 5, 6].map((item) => {
            return (
              <div className="worker">
                <div>
                  <button>{item}</button>
                  <div>
                    <p>Taminotchi :</p>
                    <p> Izzatillo Umarov</p>
                  </div>
                </div>
                <div>
                  <div>
                    <p>26 kundan </p>
                    <p>25 kun ishladi</p>
                  </div>
                </div>
                <div>
                  <div>
                    <p>Fiksa : 3,000,000 so’m </p>
                    <p>Oladi : 2,880,000 so’m</p>
                  </div>
                </div>
                <div>
                  <div>
                    <p>KPI : 3,000,000 so’m</p>
                    <p>Pop bonus Pererabotka : 100, 000 so’m</p>
                  </div>
                </div>
                <div>
                  <div>
                    <p>Qarzlariga : -100,000 so’m</p>
                    <p>Shtraflarga : -100,000 so’m</p>
                  </div>
                </div>
                <div>
                  <div>
                    <p>Pensiyoniylariga : -100,000 so’m</p>
                    <p>Olgan avansi : -100,000 so’m</p>
                  </div>
                </div>
                <div>
                  <div>
                    <h3>Oylik : 5,580,000 so’m</h3>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setShowAddWorker(true);
                  }}
                  className="workerEdit"
                >
                  <img src="/imgs/editicon.svg" alt="" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Staff;
