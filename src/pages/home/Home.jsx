import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="homePage">
      <div className="container">
        <nav>
          <div className="mainLogo">
            <img src="/imgs/mainlogo.png" alt="" />
          </div>
          <ul className="mainLinks">
            <li>
              <Link>
                Chop etish <img src="/imgs/print.svg" alt="" />{" "}
              </Link>
            </li>
            <li>
              <Link to={"/staff"} >
                Hodimlarimiz <img src="/imgs/worker.svg" alt="" />{" "}
              </Link>
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
              <select name="" id="">
                <option value="">Kun</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
              </select>
            </li>
          </ul>
        </nav>
        <div className="report">
          <div className="income">
            <h2>CHIQIM</h2>
            <h3>325,858,988 UZS</h3>
            <h3>25,369.78 $</h3>
          </div>
          <div className="outcome">
            <h2>CHIQIM</h2>
            <h3>325,858,988 UZS</h3>
            <h3>25,369.78 $</h3>
          </div>
          <div className="given">
            <h2>KASSA TOPSHIRILDI</h2>
            <h3>325,858,988 UZS</h3>
            <h3>25,369.78 $</h3>
          </div>
        </div>
        <div className="allReport">
          <table>
            <tbody>
              <tr className="kirim">
                <td>
                  <h3>KIRIM</h3>
                </td>
                <td>Sendvich</td>
                <td>58,580,987 UZS</td>
                <td>5,000 $</td>
                <td>
                  <Link to={"/detail"} >Batafsil malumot</Link>
                </td>
              </tr>
              <tr className="kirim">
                <td>
                  <h3>KIRIM</h3>
                </td>
                <td>Penoplast</td>
                <td>58,580,987 UZS</td>
                <td>5,000 $</td>
                <td>
                  <Link to={"/detail"} >Batafsil malumot</Link>
                </td>
              </tr>
              <tr className="kirim">
                <td>
                  <h3>KIRIM</h3>
                </td>
                <td>Tashqi savdo</td>
                <td>58,580,987 UZS</td>
                <td>5,000 $</td>
                <td>
                  <Link to={"/detail"} >Batafsil malumot</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>CHIQIM</h3>
                </td>
                <td>Avans uchun</td>
                <td>58,580,987 UZS</td>
                <td>5,000 $</td>
                <td>
                  <Link to={"/detail"} >Batafsil malumot</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>CHIQIM</h3>
                </td>
                <td>Doimiy xarajat</td>
                <td>58,580,987 UZS</td>
                <td>5,000 $</td>
                <td>
                  <Link to={"/detail"} >Batafsil malumot</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>CHIQIM</h3>
                </td>
                <td>Yo’l xaqqi uchun</td>
                <td>58,580,987 UZS</td>
                <td>5,000 $</td>
                <td>
                  <Link to={"/detail"} >Batafsil malumot</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>CHIQIM</h3>
                </td>
                <td>Oziq-ovqat uchun</td>
                <td>58,580,987 UZS</td>
                <td>5,000 $</td>
                <td>
                  <Link to={"/detail"} >Batafsil malumot</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>CHIQIM</h3>
                </td>
                <td>Tashqi xarajat</td>
                <td>58,580,987 UZS</td>
                <td>5,000 $</td>
                <td>
                  <Link to={"/detail"} >Batafsil malumot</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
