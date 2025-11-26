/* ==============================
   CATEGORÍAS REALES DEL USUARIO
   ============================== */
const CATEGORIES = [
  "Aceites","Bujias","Kit de arrastre","Baterias","Empaques","Focos","Balatas",
  "Estator","Escape","Carburador","Palanca","Baleros","Barra luz",
  "Switch","Filtros","Cadenas","Cascos","Espejos","Camaras","Cubre aciento",
  "Carbu Cleaner","Motos"
];

/* ==========================================================
   ESTRUCTURA PRINCIPAL DE PRODUCTOS (VACÍA AL INICIO)
   El usuario los cargará desde el panel Admin
   let products = [
 

 
   

];
   ========================================================== */
let products = [
   // A
  { id: "ace-1", category: "Aceites", title: "Akron 20w-50", image: "assets/aceite-placeholder.jpg", qty: 10, addDisabled: false },
  { id: "ace-2", category: "Aceites", title: "Motul 3000 20w-50", image: "assets/Motul-3000.png", qty: 10, addDisabled: false },
  { id: "ace-3", category: "Aceites", title: "Motul 5000 20w-50", image: "assets/Motul-5000.png", qty: 10, addDisabled: false },
    { id: "ace-4", category: "Aceites", title: "Motul 7100 20w-50", image: "assets/Motul-7100.png", qty: 10, addDisabled: false },
  { id: "ace-5", category: "Aceites", title: "Aceite Reluvsa 25w50", image: "assets/Reluvsa 25w50.png", qty: 3, addDisabled: false },
  
  
    // B
    { id: "Bat-1", category: "Baterias", title: "Bateria Nahel", image: "assets/Bateria_Nahel.jpg", qty: 3, addDisabled: false },
    { id: "Bat-2", category: "Baterias", title: "Bateria Reymar", image: "assets/Bateria_Verde.png", qty: 3, addDisabled: false },
  
    { id: "Balata de freno", category: "Balatas", title: "Balata", image: "assets/Balata de freno.png", qty: 3, addDisabled: false },
  { id: "Balatas DM 200", category: "Balatas", title: "Balatas DM 200", image: "assets/Balatas DM 200.png", qty: 2, addDisabled: false },
    { id: "Balatas Honda CB19DR", category: "Balatas", title: "Balatas Honda CB19DR", image: "assets/Balatas Honda CB19DR.png", qty: 3, addDisabled: false },
{ id: "Balatas", category: "Balatas", title: "Balatas de tambor", image: "assets/Kit-placeholder.png", qty: 3, addDisabled: false },

     { id: "Balero yugo", category: "Baleros", title: "Baleros yugo", image: "assets/Baleros yugo.png", qty: 3, addDisabled: false },
   
     { id: "Barradeluz", category: "Barra luz", title: "Barra de luz", image: "assets/Barra de Luz.png", qty: 3, addDisabled: false },
  
       { id: "Buj-1", category: "Bujias", title: "BalataBujia C7HSA 2599", image: "assets/Bujia C7HSA 2599.png", qty: 15, addDisabled: false },
  { id: "Buj-2", category: "Bujias", title: "Bujia C8E 3891", image: "assets/Bujia C8E 3891.png", qty: 15, addDisabled: false },
    { id: "Buj3", category: "Bujias", title: "Bujia D8EA 2120", image: "assets/Bujia D8EA 2120.png", qty: 15, addDisabled: false },

    // C
     { id: "Cad-1", category: "Cadenas", title: "Cadena", image: "assets/Cadena.png", qty: 3, addDisabled: false },
 
      { id: "Carbur Clean-1", category: "Carbu Cleaner", title: "Carbu cleaner", image: "assets/Carbu cleaner.png", qty: 20, addDisabled: false },
 
      { id: "Camara-1", category: "Camaras", title: "Camara Sayto", image: "assets/Camara Sayto.png", qty: 10, addDisabled: false },
      { id: "Camara-2", category: "Camaras", title: "Cadena", image: "assets/Camara.png", qty: 10, addDisabled: false },
 
      { id: "Cubre-acien-1", category: "Cubre aciento", title: "Cubre aciento", image: "assets/Cubre_acientos.png", qty: 3, addDisabled: false },
  { id: "Cubre-acien-2", category: "Cubre aciento", title: "Cubreacientos", image: "assets/Cubreacientos.png", qty: 3, addDisabled: false },
 
   { id: "carbu-1", category: "Carburador", title: "Carburador Verde FT150", image: "assets/Carburador_Bost.png", qty: 5, addDisabled: false },
    { id: "carbu-2", category: "Carburador", title: "Carburador 125", image: "assets/Carburador_Kimtec.png", qty: 5, addDisabled: false },

     { id: "Casco-1", category: "Cascos", title: "Casco Motocros Azul", image: "assets/Casco Motocros Azul.png", qty: 1, addDisabled: false },
  { id: "Casco-2", category: "Cascos", title: "Casco Motocros Negro", image: "assets/Casco Motocros Negro.png", qty: 1, addDisabled: false },
 
// D
  { id: "Direccional-1", category: "Focos", title: "Direccional secuencial", image: "assets/Direccional secuencial.png", qty: 2, addDisabled: false },
  { id: "Direccional-2", category: "Focos", title: "Direccionales", image: "assets/Direccionales.png", qty: 2, addDisabled: false },
  

// E
{ id: "Empa-1", category: "Empaques", title: "Empaque Reymar", image: "assets/Empaque Reymar.png", qty: 2, addDisabled: false },
  { id: "Empa-2", category: "Empaques", title: "Empaque Promoto", image: "assets/EmpaquePromoto.png", qty: 2, addDisabled: false },
  
    { id: "esc-1", category: "Escape", title: "Escape Negro", image: "assets/Escape_Black.jpg", qty: 1, addDisabled: false },
  { id: "esc-2", category: "Escape", title: "Escape calabera", image: "assets/Escape_calabera.png", qty: 1, addDisabled: false },
 

  { id: "Esp-1", category: "Espejos", title: "Espejo Kimtec", image: "assets/Espejo Kimtec.png", qty: 2, addDisabled: false },
  
  { id: "Estator-1", category: "Estator", title: "Estator Motoneta D150", image: "assets/Estator Motoneta D150.png", qty: 3, addDisabled: false },
  
// F
 { id: "Filtro-1", category: "Filtros", title: "Filtro de aire", image: "assets/Filtro de aire.png", qty: 3, addDisabled: false },
  
  { id: "Foco-1", category: "Foco", title: "Foco de faro", image: "assets/Foco de faro.png", qty: 3, addDisabled: false },
   { id: "Foco-2", category: "Foco", title: "Foco para faro", image: "assets/Foco de faro 1.png", qty: 3, addDisabled: false },
   { id: "Foco-3", category: "Foco", title: "Foco de freno", image: "assets/Foco de freno.png", qty: 3, addDisabled: false },
  
// G
// H
// I
// J
// K
  { id: "Kit", category: "Kit de arrastre", title: "Kit de arrastre FT150", image: "assets/kit de arrastre.png", qty: 3, addDisabled: false },

// L
{ id: "Lubri-1", category: "Lubricador", title: "Lubrichain", image: "assets/Lubrichain.png", qty: 10, addDisabled: false },
  
  
// M
// N
// Ñ
// O
// P

{ id: "Palanca-1", category: "Palanca", title: "Palanca de arranque", image: "assets/Palanca.png", qty: 3, addDisabled: false },
 { id: "Palanca-2", category: "Palanca", title: "Palanca de arranque", image: "assets/Palancadearranquenegra.png", qty: 3, addDisabled: false },
  { id: "Palanca-3", category: "Palanca", title: "Palanca de arranque", image: "assets/Palancadearranque.png", qty: 3, addDisabled: false },
  
      
// Q
// R
// S
 { id: "Switch-1", category: "Switch", title: "Switch Motoking", image: "assets/Switch.png", qty: 3, addDisabled: false }

// T
// U
// V
// W
// X
// Y
// Z
// 
];

/* ==========================================================
   REFERENCIAS DEL DOM
   ========================================================== */
const grid = document.getElementById("products-grid");
const filterContainer = document.getElementById("categories-filter");
const adminCategorySelect = document.getElementById("admin-category");
const adminSaveBtn = document.getElementById("admin-save-category");
const adminClearBtn = document.getElementById("admin-clear-category");
const categoryImagesForm = document.getElementById("category-images-form");

/* ==========================================================
   1. GENERAR BOTONES DINÁMICOS DE CATEGORÍAS
   ========================================================== */
function createCategoryButtons() {
  filterContainer.innerHTML = "";

  CATEGORIES.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "btn btn-outline-light btn-sm";
    btn.textContent = cat;
    btn.style.borderRadius = "20px";
    btn.style.padding = "6px 14px";
    btn.onclick = () => renderProductsByCategory(cat);
    filterContainer.appendChild(btn);
  });

  // Botón "Mostrar Todo"
  const allBtn = document.createElement("button");
  allBtn.className = "btn btn-danger btn-sm";
  allBtn.textContent = "Todos";
  allBtn.onclick = renderProducts;
  filterContainer.appendChild(allBtn);
}

/* ==========================================================
   2. GENERAR SELECT DE CATEGORÍAS EN PANEL ADMIN
   ========================================================== */
function populateAdminCategorySelect() {
  adminCategorySelect.innerHTML = "";
  CATEGORIES.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    adminCategorySelect.appendChild(option);
  });
}

/* ==========================================================
   3. GENERAR CAMPOS PARA AGREGAR HASTA 3 PRODUCTOS POR CATEGORÍA
   ========================================================== */
function generateImageInputs() {
  categoryImagesForm.innerHTML = "";
  for (let i = 1; i <= 3; i++) {
    categoryImagesForm.innerHTML += `
      <div class="col-12 col-md-4">
        <label class="form-label">Imagen ${i}</label>
        <input type="text" class="form-control admin-img" placeholder="URL de imagen ${i}">
        <input type="number" class="form-control admin-qty mt-2" placeholder="Cantidad" min="0">
      </div>
    `;
  }
}

/* ==========================================================
   4. GUARDAR PRODUCTO DESDE PANEL ADMIN
   ========================================================== */
adminSaveBtn.addEventListener("click", () => {
  const category = adminCategorySelect.value;
  const imgInputs = document.querySelectorAll(".admin-img");
  const qtyInputs = document.querySelectorAll(".admin-qty");

  imgInputs.forEach((input, index) => {
    if (input.value.trim() !== "") {
      products.push({
        title: `${category} ${index + 1}`,
        category,
        image: input.value,
        qty: Number(qtyInputs[index].value) || 0
      });
    }
  });

  renderProducts();
  alert("Productos agregados correctamente.");
});

/* ==========================================================
   5. LIMPIAR CAMPOS
   ========================================================== */
adminClearBtn.addEventListener("click", () => {
  document.querySelectorAll(".admin-img").forEach(i => i.value = "");
  document.querySelectorAll(".admin-qty").forEach(i => i.value = "");
});

/* ==========================================================
   6. MOSTRAR TODOS LOS PRODUCTOS (SIN BOTÓN AGREGAR)
   ========================================================== */
function renderProducts() {
  grid.innerHTML = products.map(p => {
    const outOfStock = p.qty <= 0;

    return `
      <div class="col-12 col-sm-6 col-lg-4">
        <div class="card h-100 shadow-sm">

          <img src="${p.image}" alt="${p.title}" 
            class="card-img-top clickable-image"
            data-bs-toggle="modal"
            data-bs-target="#imageModal"
            data-image="${p.image}">

          <div class="card-body d-flex flex-column">
            <h3 class="h6 fw-bold mb-1">${p.title}</h3>

            <div class="mb-2">
              ${outOfStock
                ? '<span class="badge bg-danger">Sin stock</span>'
                : `<span class="badge bg-success">Stock: ${p.qty}</span>`}
            </div>

          </div>
        </div>
      </div>
    `;
  }).join("");
}

/* ==========================================================
   7. MOSTRAR POR CATEGORÍA
   ========================================================== */
function renderProductsByCategory(category) {
  const filtered = products.filter(p => p.category === category);

  grid.innerHTML = filtered.map(p => {
    const outOfStock = p.qty <= 0;

    return `
      <div class="col-12 col-sm-6 col-lg-4">
        <div class="card h-100 shadow-sm">
          
          <img src="${p.image}" alt="${p.title}"
            class="card-img-top clickable-image"
            data-bs-toggle="modal"
            data-bs-target="#imageModal"
            data-image="${p.image}">

          <div class="card-body">
            <h3 class="h6 fw-bold">${p.title}</h3>
            <div class="mt-2">
              ${outOfStock
                ? '<span class="badge bg-danger">Sin stock</span>'
                : `<span class="badge bg-success">Stock: ${p.qty}</span>`}
            </div>
          </div>

        </div>
      </div>
    `;
  }).join("");
}

/* ==========================================================
   8. MODAL DE IMAGEN
   ========================================================== */
document.addEventListener("click", e => {
  if (e.target.classList.contains("clickable-image")) {
    document.getElementById("modal-image").src = e.target.dataset.image;
  }
});

/* ==========================================================
   INICIALIZACIÓN
   ========================================================== */
createCategoryButtons();
populateAdminCategorySelect();
generateImageInputs();
renderProducts();
