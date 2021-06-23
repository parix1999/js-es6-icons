const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];
/* MileStone 1:
Partendo dalla seguente struttura dati , mostriamo in pagina tutte 
le icone disponibili come da layout.
*/

/* MileStone 2:
Coloriamo le icone per tipo
*/

/* MileStone 3:
Creiamo una select con i tipi di icone e usiamola per filtrare le icone
*/

// Creazione funzione, che crei un'altra array e che la richiami 
// in base alla scelta dell'utente:

/**
 * 
 * L'obbiettivo della funzione è di filtrare gli elemnti dentro a delle nuove
 * array e controllare quali stampare:
 * @param {*} scelta 
 * @param {*} originalList 
 * @returns 
 */
function filteredIcons (scelta, originalList) {
    return originalList.filter((element) => {
        // Ora ritorna true solo se è presente nel filtro:
        if(scelta === 'all') {
            return true;
        }
        if (scelta === element.type){  // Occhio, da controllare element.type;
            return true;
        }
        // Se non si verifica la condizione allora non deve fare niente
        return false; 

    });
}



function listIconsToHTML (filter) {
    const iconfiltered = filteredIcons(filter, icons);
    
    let outputHtml = document.querySelector('.items-js-content');
    outputHtml.innerHTML = '';
    // Per prima cosa serve un forEach per prendere i valori della struttura dati:
    iconfiltered.forEach ((icon)=>{
        // Con la destructurin prelevo i dati di cui ho bisogno:
        const { family, prefix, name, type} = icon;
        outputHtml.innerHTML += `
            <div class="icon-card col">
                <div class="icon-card-inner">
                        <div class ="icon ${type}">
                            <i class="${family} ${prefix}${name}"></i>
                        </div>
                        <div class="name">
                            ${name}
                        </div>
                </div>
    
            </div>
        `;
    });
}
listIconsToHTML('all');

const selectElement = document.querySelector('.type-select');

selectElement.addEventListener('change', (event) => {
    listIconsToHTML(event.target.value);
});
