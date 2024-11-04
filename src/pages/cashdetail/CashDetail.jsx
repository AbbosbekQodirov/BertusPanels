import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import "./CashDetail.css"
import DetailTable from '../../components/detailTable/DetailTable';
import AddReport from '../../components/addreport/AddReport';
import { Link } from 'react-router-dom';
function CashDetail() {
  const [showAdd, setShowAdd] = useState(false)
  return (
    <div className="cashdetail">
      {showAdd && <AddReport setShowAdd={setShowAdd} />}
      <div className="container">
        <nav>
          <div className="detailLogo">
            <Link to={"/"} >
              <img src="/imgs/mainlogo.png" alt="" />
            </Link>
          </div>
          <div>
            <h4>Kirim : sendvich jami : 700,000,000 UZS / 60,000 $</h4>
            <button
              onClick={() => {
                setShowAdd(true);
              }}
            >
              Qo’shish <FaPlus />
            </button>
          </div>
        </nav>
        <DetailTable setShowAdd={setShowAdd} />
      </div>
    </div>
  );
}

export default CashDetail