import React from 'react';
import {useState} from "react";

function KontaktForma(props) {

    const [info, postaviInfo] = useState({
        ime: '',
        prezime: '',
        email: '',
        poruka: ''
    })

  return (
  <div className='kontakt'>
      <h2 className='naslov'>Kontaktirajte nas! </h2>
      <div className="element">
                <label className='tekst'>Ime i prezime</label>
                <input type="text" className="poljeForme" value={info.ime} onChange={i => postaviInfo({ ...info, ime: i.target.value })} />
        </div>
      <div className="element">
          <label className='tekst1'>E-mail</label>
          <input type="email" className="poljeForme" value={info.email} onChange={i => postaviInfo({ ...info, email: i.target.value })} />
      </div>
      <div className="element">
          <label className="tekst3">Poruka</label>
          <textarea type="text" rows={10} className="poljeForme" value={info.poruka} onChange={i => postaviInfo({ ...info, poruka: i.target.value })} />
        </div>
        <div>
            <button className="dugmeForme" onClick={()=> props.submit(info)}>
                Posalji poruku !
            </button>
        </div>
      

  </div>);
}

export default KontaktForma;
