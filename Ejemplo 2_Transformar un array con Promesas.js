const estudiantes = [
    { id: 1, nombre: 'Juan', nota: 85 },
    { id: 2, nombre: 'Sofía', nota: 60 },
    { id: 3, nombre: 'Carlos', nota: 75 },
];

// Función para transformar la información de un estudiante
function transformarEstudiante(estudiante) {
    return new Promise((resolve) => {
        const estado = estudiante.nota >= 70 ? 'Aprobado' : 'Reprobado';
        resolve({ ...estudiante, estado });
    });
}

// Usando Async/Await para transformar el array
async function transformarEstudiantes() {
    const resultados = [];
    for (const estudiante of estudiantes) {
        const nuevoEstudiante = await transformarEstudiante(estudiante);
        resultados.push(nuevoEstudiante);
    }
    console.log('Estudiantes transformados:', resultados);
}

transformarEstudiantes();
