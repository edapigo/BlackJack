/**
 * Funcion para determinar el ganador
 * @param {*} puntosJugadores :Array con los puntos de los jugadores | jugador1 -> 0 y pc -> úlitmo
 */
export const determinarGanador = (puntosJugadores) => {
    const [ puntosMinimos, puntosComputadora] = puntosJugadores;

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos){
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ){
            alert('Compuradora gana');
        } else if ( puntosComputadora > 21){
            alert('Jugador gana');
        } else{
            alert('Computadora gana');
        }
    }, 500);
}
