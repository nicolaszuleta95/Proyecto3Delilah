# PROYECTO 3 ACAMICA: Delilah Restó

Este proyecto plantea la creación de un sistema de pedidos online para un restaurante.

## GUIA DE INSTALACIÓN

Se requiere tener Node.js y MySQL instalados.

### INSTRUCCIONES

- Instalar las dependencias del proyecto con el comando: **npm install**

- Se debe crear un archivo **.env** en la raiz del proyecto, se incluyo el archivo **.env.example** para que sirva de ejemplo.

- El proyecto viene con dos opciones: **dev** y **prod** para seleccionar en la variable **DB_ENV** del archivo **.env**. Si se selecciona la opcion **dev** se cargara informacion de prueba y cada vez que se reinicie el proyecto se borrara la informacion creada y se volvera a cargar la informacion de prueba en la base de datos. Ahora, si se selecciona la opcion **prod** la primera vez se cargara la informacion de prueba pero de ahi en adelante se conservara la informacion que se vaya creando en la base de datos.

- Iniciar el proyecto con el comando: **npm start**

### DOCUMENTACIÓN

La documentacion del proyecto se encuentra en el documento **spec.yaml**.

Tambien se agregó el archivo **Delilah Resto.postman_collection.json** en la raíz del proyecto para ser importado en **Postman**, en esta coleccion ya estan incluidas todas las rutas para hacer las pruebas de la API.
