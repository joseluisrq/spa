const API = 'https://rickandmortyapi.com/api/character/'; //URL de la api


const getData = async(id) => {
    const apiURL = id ? `${API}${id}` : API; // SI ID EXISTE TRAE A API Y CONCATENA EL ID QUE ESTAS RECIBIENDO S, SI NO EXSTE TRAE TODA LA API - TODOS LOS PERSONAJES
    try { //estructura de la funcion 
        const response = await fetch(apiURL); // response hace el llamado a fecth, fecth hace el llamado a apiURL
        const data = await response.json(); // convertimos la respuesta a un objeto json
        return data;

    } catch (error) {
        console.log('Fecth Error', error);
    };
};
export default getData;