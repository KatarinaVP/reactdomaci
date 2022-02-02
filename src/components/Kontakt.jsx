import React from 'react';
import KontaktForma from './KontaktForma';

function Kontakt() {

  function slanjeForme(info) {
    alert('Korisnik: ' + info.ime + ' Email: ' + info.email + ' Poruka: ' + info.poruka)
  }
  return <div className='kontakt'>
    <KontaktForma submit={slanjeForme} />

  </div>;
}

export default Kontakt;

