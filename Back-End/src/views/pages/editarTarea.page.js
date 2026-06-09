import { layout } from "../layout.js";

export function editarTareaPage(tarea, errores = {}, datos = {}) {
    return layout(
        "Editar tarea",
        `
        <div class="card shadow-sm">
            <div class="card-header bg-warning">
                Editar tarea
            </div>

            <div class="card-body">
                <form action="/tareas/${tarea.id}/editar" method="POST">

                    <div class="row">

                        <div class="col-md-6 mb-3">
                            <label class="form-label">Título</label>

                            <input
                                type="text"
                                name="titulo"
                                class="form-control ${errores.titulo ? "is-invalid" : ""}"
                                value="${datos.titulo ?? tarea.titulo}"
                            >

                            ${
                                errores.titulo
                                    ? `<div class="invalid-feedback">${errores.titulo}</div>`
                                    : ""
                            }
                        </div>

                        <div class="col-md-6 mb-3">
                            <label class="form-label">Estado</label>

                            <select name="estado" class="form-select">
                                <option value="pendiente"
                                    ${(datos.estado ?? tarea.estado) === "pendiente" ? "selected" : ""}>
                                    Pendiente
                                </option>

                                <option value="en progreso"
                                    ${(datos.estado ?? tarea.estado) === "en progreso" ? "selected" : ""}>
                                    En progreso
                                </option>

                                <option value="completada"
                                    ${(datos.estado ?? tarea.estado) === "completada" ? "selected" : ""}>
                                    Completada
                                </option>
                            </select>
                        </div>

                    </div>

                    <div class="mb-3">
                        <label class="form-label">Descripción</label>

                        <textarea
                            name="descripcion"
                            class="form-control ${errores.descripcion ? "is-invalid" : ""}"
                            rows="4"
                        >${datos.descripcion ?? tarea.descripcion}</textarea>

                        ${
                            errores.descripcion
                                ? `<div class="invalid-feedback">${errores.descripcion}</div>`
                                : ""
                        }
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Prioridad</label>

                        <select name="prioridad" class="form-select">
                            <option value="baja"
                                ${(datos.prioridad ?? tarea.prioridad) === "baja" ? "selected" : ""}>
                                Baja
                            </option>

                            <option value="media"
                                ${(datos.prioridad ?? tarea.prioridad) === "media" ? "selected" : ""}>
                                Media
                            </option>

                            <option value="alta"
                                ${(datos.prioridad ?? tarea.prioridad) === "alta" ? "selected" : ""}>
                                Alta
                            </option>
                        </select>
                    </div>

                    <button type="submit" class="btn btn-warning">
                        Actualizar
                    </button>

                    <a href="/tareas" class="btn btn-secondary">
                        Cancelar
                    </a>

                </form>
            </div>
        </div>
        `
    );
}