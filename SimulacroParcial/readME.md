Temática: “Tierra Media”

En esta temática, debes crear un API que gestione datos relacionados con los personajes épicos de “El Señor de los Anillos”. Cada personaje tendrá atributos como nombre, raza, descripción y habilidades especiales. Los usuarios pueden agregar nuevos personajes, explorar la lista de héroes y heroínas, obtener detalles de un personaje específico, actualizar sus atributos y, en caso de ser necesario, borrar a un personaje de la historia.

Las razas deben estar entre:
Hobbits
Humanos
Elfos
Enanos
Ents

Endpoints:

GET /api/tierramedia/personajes: Obtiene una lista de todos los personajes épicos de “Tierra Media”.
GET /api/tierramedia/personajes/:id: Obtiene información detallada de un personaje por su ID.
En caso de no existir el personaje con id indicado, devolverá un error 404
POST /api/tierramedia/personajes: Crea un nuevo personaje épico.
Si la raza no se encuentra entre las existentes devolverá un error 500.
Si falta alguno de los datos devolverá un error 500
PUT /api/tierramedia/personajes/:id: Actualiza la información de un personaje existente por su ID.
En caso de no existir el personaje con id indicado, devolverá un error 404
Si la raza no se encuentra entre las existentes devolverá un error 500.
DELETE /api/tierramedia/personajes/:id: Borra un personaje épico por su ID.
En caso de no existir el personaje con id indicado, devolverá un error 404

Escucha en puerto 300.
