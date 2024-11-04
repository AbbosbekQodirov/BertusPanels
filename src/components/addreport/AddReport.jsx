import React from 'react'
import "./AddReport.css"
function AddReport({ setShowAdd }) {
  const handleSubmit = (e)=>{
    e.preventDefault()
    setShowAdd(false)
  }
  return (
    <div className="addreport">
      <div className="addForm">
        <button onClick={()=>{
          setShowAdd(false)
        }} >
          <img src="/public/imgs/exitModal.svg" alt="" />
        </button>
        <form onSubmit={handleSubmit} action="">
          <input type="text" placeholder="Mijoz ismi :" />
          <input type="text" placeholder="Izoh / Mahsulot nomi :" />
          <input type="text" placeholder="O’zbek so’mi :" />
          <input type="text" placeholder="Dollarda :" />
          <button>Qo’shish</button>
        </form>
      </div>
    </div>
  );
}

export default AddReport