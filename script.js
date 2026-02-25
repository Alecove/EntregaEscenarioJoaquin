// Obtenemos el contenedor vacío del HTML
const zonaButacas = document.getElementById('zona-butacas');

// Configuración de nuestro cine
const filas = 4;
const columnas = 10;
const espacioX = 55; // Separación horizontal
const espacioY = 60; // Separación vertical

let svgContent = ''; // Aquí guardaremos todo el código de las butacas

// Doble bucle para generar la cuadrícula de asientos
for (let fila = 0; fila < filas; fila++) {
    for (let col = 0; col < columnas; col++) {
        
        // Creamos un pasillo central saltándonos las columnas 4 y 5
        if (col === 4 || col === 5) {
            continue; 
        }

        // Cálculos matemáticos para hacer un efecto "Anfiteatro"
        // Hacemos que los asientos de los extremos estén ligeramente más altos (curvatura)
        let curvaAnfiteatro = Math.abs(col - 4.5) * 8; 
        
        // Calculamos la posición final X e Y de cada butaca
        let posX = 140 + (col * espacioX);
        let posY = 220 + (fila * espacioY) + curvaAnfiteatro;

        // Construimos la butaca en formato texto (HTML/SVG)
        // Se compone de 2 reposabrazos, 1 respaldo y 1 asiento
        svgContent += `
            <g class="butaca" transform="translate(${posX}, ${posY})">
                <rect class="reposabrazos" x="-6" y="8" width="8" height="25" rx="4" />
                <rect class="reposabrazos" x="38" y="8" width="8" height="25" rx="4" />
                <rect class="respaldo" x="0" y="0" width="40" height="22" rx="6" />
                <rect class="asiento" x="2" y="16" width="36" height="24" rx="4" />
            </g>
        `;
    }
}

// Inyectamos todas las butacas generadas dentro del SVG en la pantalla
zonaButacas.innerHTML = svgContent;

// --- AÑADIR LA INTERACTIVIDAD (CLIC) ---

// Ahora que ya existen, seleccionamos todas las butacas
const butacas = document.querySelectorAll('.butaca');

// Le decimos a cada una qué hacer cuando le hagan clic
butacas.forEach(butaca => {
    butaca.addEventListener('click', () => {
        // Al hacer clic, le ponemos (o quitamos) la clase 'seleccionada'
        // Esto automáticamente dispara la animación CSS que hicimos
        butaca.classList.toggle('seleccionada');
    });
});