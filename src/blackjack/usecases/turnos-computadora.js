
import {pedirCarta} from './';
import { crearCarta } from './';
import { acumularPuntos } from './';
import { determinarGanador } from './';

/**
 * Turno automatizado de la computadora
 * @param {Array<number>} puntosJugadores Array con el puntaje de los jugadores
 * @param {HTMLElement} puntosHTML :elementos HTML para los puntajes
 * @param {Array<String>} deck :Mazo de cartas
 * @param {HTMLImage} divCartasJugadores :elemento HTML de la carta
 */
export const turnoComputadora = ( puntosJugadores, puntosHTML, deck , divCartasJugadores) => {
      
    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores, puntosHTML );

        crearCarta( carta, puntosJugadores.length - 1 , divCartasJugadores);  

    } while ( (puntosComputadora < puntosJugadores[0]) && (puntosJugadores[0] <= 21) );

    determinarGanador(puntosJugadores);
}