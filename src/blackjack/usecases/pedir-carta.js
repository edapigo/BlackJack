
/**
 * Esta función me permite pedir una carta
 * @param {Array<string>} deck 
 * @returns {String} retorna la carta
 */
export const pedirCarta = (deck) => {
    if( !deck || deck.length ===0 ){
        throw 'No hay cartas en el deck';
    }
    return deck.pop();
}