//Para ejecutar: node generate-index.js
// generate-index.js
var fst = require('fs');
var path = require('path');


//Json Imagenes de documentales
const dirPath = path.join('assets', 'images', 'programas', 'posters', 'documentales');
const outputPath = path.join(dirPath, 'index-documentales.json');
const host = 'http://localhost:3000/assets/images/programas/posters/documentales/'
fst.readdir(dirPath, (err, files) => {
  if (err) {
    console.error('Error leyendo la carpeta:', err);
    return;
  }

  // Filtra solo imágenes (puedes ajustar extensiones)
  const images = files.filter(file =>
    /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
  );

  fst.writeFileSync(outputPath, JSON.stringify(images, null, 2));
  console.log(`Archivo creado con ${images.length} imágenes.`);
});
