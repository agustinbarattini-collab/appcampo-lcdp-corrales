const APP_CONFIG = {
  empresaId: "lcdp-corrales",
  empresaNombre: "Corrales",
  colorPrimario: "#1f3d24",
  colorSecundario: "#c99a4a",
  // URL del Web App de Google Apps Script (ver DUPLICAR.md). Vacío = sin sincronización.
  sheetsWebAppUrl: "https://script.google.com/macros/s/AKfycbxHDxUhEkODBZCIVzlcYh9asiwxueoa1a7zP2rl1fopePATbUy5rOHvrtBBD2QQ8qk/exec",
  // Mismo token que SHARED_SECRET en google-apps-script/Code.gs.
  sheetsSyncToken: "COR-7kQ2mX9vL4aT",
  // Productos por orden/aplicación (por defecto 6). Ver producto7... en Code.gs.
  maxProductos: 7,
  // App de contratista: solo ve y carga lo de este contratista (el script de
  // la Sheet lo filtra según el token). Nombre exacto de Maestros - Contratistas.
  contratistaFijo: "Corrales",
};

export { APP_CONFIG };
