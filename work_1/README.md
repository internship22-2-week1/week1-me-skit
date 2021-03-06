# Script Basico

> Script básico, que crea una estructura de archivos, un archivo style.css y un archivo index.html

## Edición

Se creó el archivo myscript.sh usando la instrucción `touch myscript.sh`, luego su edición usando `vim myscript.sh`

![Screenshot](../assets/work_1-01.png)

## Ejecución

`sh myscript miproyecto "Este es un mensaje de prueba"`

![Screeenchot](../assets/work_1-02.png)

## Visualización de Carpetas

Para ver las carpetas se instaló la herramienta tree con la instrucción `sudo apt-get install tree`

Visualización del árbol de carpetas: `tree miproyecto`

![Screeenchot](../assets/work_1-03.png)

## Muestra del Archivo index.html

Para mostrar el archivo index se invoco Mozilla Firefox con la instrucción `"/mnt/c/Program Files/Mozilla Firefox/firefox.exe" index.html`.

![Screeenchot](../assets/work_1-04.png)

## Script del archivo myscript.sh

```
#!/bin/bash

echo "Escribe el nombre del proyecto: $1"
echo "Escribe un mensaje: $2"

mkdir $1
cd $1
mkdir "assets"
cd "assets"
mkdir "css"
mkdir "img"
touch img/.gitkeep
mkdir "js"
touch js/..gitkeep
cd "css"

cat > style.css << EOF
body {
  background-color: #2b388f;
  display: grid;
  place-items: center;
}

h2, p {
  color: #fff;
}
EOF

cd ..
cd ..

cat > index.html << EOF
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scripting</title>
    <link rel="stylesheet" href="assets/css/style.css">
  </head>
    <body>
      <h2>$2</h2>
      <p><code>By Manuel Elias</code></p>
    </body>
</html>
EOF

"/mnt/c/Program Files/Mozilla Firefox/firefox.exe" index.html
cat index.html

git init
git add .
git commit -m "First commit"
git branch -M main
git remote add origin git@github.com:me-skit/test.git
git push -u origin main
```