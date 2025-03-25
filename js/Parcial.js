document.getElementById("searchForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    const query = document.getElementById("query").value;
    const loading = document.getElementById("loading");
    const results = document.getElementById("results");
    
    loading.classList.remove("hidden");
    results.innerHTML = "";
    
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`);
        const data = await response.json();
        
        loading.classList.add("hidden");
        if (data.length === 0) {
            results.innerHTML = "<p>No se encontraron resultados.</p>";
            return;
        }
        
        const list = data.map(item => `<p>${item.display_name} (Lat: ${item.lat}, Lon: ${item.lon})</p>`).join("");
        results.innerHTML = list;
    } catch (error) {
        loading.classList.add("hidden");
        results.innerHTML = "<p>Error en la consulta.</p>";
    }
});
const datos = [
    "El mapa de Babilonia, conocido como el Imago Mundi, es el más antiguo del mundo y data del siglo VI a.C.",
    "Francia es el país con más husos horarios (12 en total) debido a sus territorios de ultramar.",
    "Arabia Saudita es el único país grande sin ríos naturales permanentes.",
    "Longyearbyen, en Noruega, es el asentamiento más septentrional del planeta.",
    "Groenlandia parece tan grande como África en el mapa de Mercator, pero África es 14 veces más grande.",
    "El punto más alejado del mar se encuentra en china, en la región de Xinjiang, a 2,645 km del océano más cercano",
    "El punto más remoto del oceano conocido como el punto Nemo es el lugar más alejado de cualquier tierra firme",
    "Suecia tiene la mayor cantidad de islas en el mundo, con más de 267.000",
    "Los mapas antiguos tenian monstruos marinos dibujados, esto con el fin de anunciar a los navegantes de zonas peligrosas o desconocidas",
    "Canadá es el pais con más lagos; Hay más de 3 millones de lagos en Canadá, cubriendo cerca del 9% de su superficie total "
];

let indiceDato = 0;
const datoTexto = document.getElementById("dato-texto");
const siguienteDato = document.getElementById("siguiente-dato");
const mostrarDatos = document.getElementById("mostrar-datos");
const datosCuriosos = document.getElementById("datos-curiosos");

siguienteDato.addEventListener("click", () => {
    indiceDato = (indiceDato + 1) % datos.length;
    datoTexto.textContent = datos[indiceDato];
});

mostrarDatos.addEventListener("click", () => {
    datosCuriosos.style.display = datosCuriosos.style.display === "none" ? "block" : "none";
});

