
import './App.css';
import NavBar from "./components/NavBar";
import Sesiri from "./components/Sesiri";
import {useState} from "react";
import Footer from "./components/Footer";
import Korpa from "./components/Korpa";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Kontakt from "./components/Kontakt";

function App() {
  const [proizvodUKorpi, dodajUKorpu]=useState(0);
  const [proizvod, postaviKorpu]=useState([]);
  const [product]=useState([
    {
        id:1,
        slika: "https://static.shipgratis.eu/zoh4eiLi/IMG/86400/9WapXOAByYzmKd3z9EGiHg37dKvDGm-FStyjlv1VHSs/fit/251/251/no/1/aHR0cHM6Ly9zdGF0aWNiYWNrZW5kLnNoaXBncmF0aXMuZXUvbWVkaWEvY2F0YWxvZy9wcm9kdWN0LzEvMi8xMjNmNjNkNThlYzBmYTdmMWFiMTM1YzIwMTVmMDY3ZjI5YWQxMmM3LmpwZWc", 
        naslov: "Sesir od slame",
        opis: "Sesir koji mozete nositi svaki dan i u svim prilikama",
        kolicina: 0,
    },
    {
        id:2,
        slika: "https://static.shipgratis.eu/zoh4eiLi/IMG/86400/Y1joWnvBxyAAAvbC_--LO5qhPVscVIKVt-WVs2Slnmc/fit/251/251/no/1/aHR0cHM6Ly9zdGF0aWNiYWNrZW5kLnNoaXBncmF0aXMuZXUvbWVkaWEvY2F0YWxvZy9wcm9kdWN0LzQvNy80N2NmNmJhNDdjYzUwYzYyNTAwMDI5YjM4ZTRjNDk5YWVjMzE5ZTgzLmpwZWc",
        naslov: "Crni sesir",
        opis: "Crni klasicni sesir",
        kolicina: 0,
    },
    {
        id:3,
        slika: "https://www.mmcouture.co/wp-content/uploads/2019/07/01-Indy-Light-grey-hat.jpg",
        naslov: "Rozi sesir",
        opis: "Sesir u rozoj boji",
        kolicina: 0,
    },
    {
        id:4,
        slika: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZY8nFFz1QMc4G5936czicMPSk0n-2aI4ycRWFIQLGhAX2OBwI3mIN8IsVLqFqmehvzCA&usqp=CAU",
        naslov: "Cropy sesir",
        opis: "Sesir cropy, jedinstven i unikatan",
        kolicina: 0,

    },
]);
function osveziKorpu(){
  let noviProizvodi=product.filter((prod)=>prod.kolicina>0);
  postaviKorpu(noviProizvodi);

}
function dodaj(naslov, id){
  dodajUKorpu(proizvodUKorpi + 1);
  product.forEach((prod)=>{
    if(prod.id===id){
      prod.kolicina++;
    }
  })
  osveziKorpu();
}
function obrisi(naslov, id){
  if(proizvodUKorpi>0){
    dodajUKorpu(proizvodUKorpi -1);
  }
  product.forEach((prod)=>{
    if(prod.id===id){
      prod.kolicina--;
    }
  })
  osveziKorpu();
}


  return (
    <BrowserRouter className="App">
     
      <NavBar proizvodUKorpi={proizvodUKorpi}></NavBar>

      <Routes>
        <Route path="/" element={<Sesiri product={product} onAdd={dodaj} remove={obrisi}/>} />

        <Route path="/korpa" element={<Korpa product={proizvod} remove={obrisi}/>}/>

        <Route path="/kontakt" element={<Kontakt/>}/>

        

      </Routes>

      

      <Footer />
    </BrowserRouter>
  );
}

export default App;
