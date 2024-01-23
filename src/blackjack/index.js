
import _ from 'underscore';
import { crearDeck, pedirCarta, acumularPuntos, crearCarta, turnoComputadora } from './usecases';

(() => {
  'use strict'
  
  let deck = [];
  const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

  let puntosJugadores = [];
  
  // Referencias
  const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo');

  const divCartasJugadores = document.querySelectorAll('.divCartas'),
        puntosHTML = document.querySelectorAll('small');
  
  // Esta función inicializa el juego
  const inicializarJuego = ( numJugadores = 2 ) =>{   
      console.clear();
      deck = crearDeck(tipos, especiales);
      puntosJugadores = [];
      for (let i = 0; i < numJugadores; i++) {
          puntosJugadores.push(0);
      }

      puntosHTML.forEach( elem => elem.innerText = 0);
      divCartasJugadores.forEach( elem => elem.innerHTML = '');

      btnPedir.disabled = false;
      btnDetener.disabled = false; 
  }
  
   
  // Eventos
  btnPedir.addEventListener('click', () => {
      const carta = pedirCarta(deck);
      const puntosJugador = acumularPuntos( carta, 0, puntosJugadores, puntosHTML);
      
      crearCarta( carta, 0 , divCartasJugadores);
  
      if( puntosJugador > 21 ){
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora( puntosJugadores, puntosHTML, deck, divCartasJugadores );
      } else if ( puntosJugador === 21 ){
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora( puntosJugadores, puntosHTML, deck, divCartasJugadores );
      }
  });
  
  
  btnDetener.addEventListener('click', () => {
      btnPedir.disabled = true;
      btnDetener.disabled = true; 
      turnoComputadora( puntosJugadores , puntosHTML, deck, divCartasJugadores );
  })
  
  
  btnNuevo.addEventListener('click', () => {
      inicializarJuego();
  })
  

  return {
      nuevoJuego: inicializarJuego
  };
})();


