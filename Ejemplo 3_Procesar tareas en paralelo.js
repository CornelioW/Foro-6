const tareas = [
    { id: 1, descripcion: 'Lavar los platos', completado: false },
    { id: 2, descripcion: 'Hacer la cama', completado: false },
    { id: 3, descripcion: 'Sacar la basura', completado: false },
];

// Función que marca una tarea como completada
function completarTarea(tarea) {
    return new Promise((resolve) => {
        resolve({ ...tarea, completado: true });
    });
}

// Usando Promise.all para procesar todas las tareas en paralelo
async function completarTodasLasTareas() {
    const promesas = tareas.map((tarea) => completarTarea(tarea));
    const resultados = await Promise.all(promesas);
    console.log('Tareas completadas:', resultados);
}

completarTodasLasTareas();
