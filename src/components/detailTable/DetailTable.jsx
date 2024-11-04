import React from "react";
import "./DetailTable.css";
import { toast } from "react-toastify";
function DetailTable({setShowAdd}) {
  return (
    <div className="detailTable">
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Mijoz ismi</th>
              <th>Mahsulot</th>
              <th>O’zbek so’mi</th>
              <th>Dollarda</th>
              <th>
                O’zgartirish yoki <br /> O’chirish
              </th>
            </tr>
          </thead>
          <tbody>
           {[1,2,3,4,5,6,7].map(()=>{
            return (
              <tr>
                <td>1</td>
                <td>Abdujjabor Orolov</td>
                <td>Sendvichga to’lov</td>
                <td>58,580,987 UZS</td>
                <td>5,000 $</td>
                <td>
                  <div>
                    <button
                      onClick={() => {
                        setShowAdd(true);
                      }}
                    >
                      <img src="/imgs/editicon.svg" alt="" />
                    </button>
                    <button
                      onClick={() => {
                        toast.success("Ma'lumot o'chirildi");
                      }}
                    >
                      <img src="/imgs/trashicon.svg" alt="" />
                    </button>
                  </div>
                </td>
              </tr>
            );
           })}
           
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DetailTable;
