import { layout } from "../layout.js";

export function nuevaTareaPage(errores = {}, datos = {}) {
    return layout(
        "Nueva tarea",
        `
        <div class="card shadow-sm">
            <div class="card-header bg-primary text-white">
                Registrar nueva tarea
            </div>

            <div class="card-body">
                <form action="/tareas" method="POST">

                    <div class="row">

                        <div class="col-md-6 mb-3">
                            <label class="form-label">Título</label>

                            <input
                                type="text"
                                name="titulo"
                                class="form-control ${errores.titulo ? "is-invalid" : ""}"
                                value="${datos.titulo || ""}"
                            >

                            <div class="invalid-feedback">
                                ${errores.titulo || ""}
                            </div>
                        </div>

                        <div class="col-md-6 mb-3">
                            <label class="form-label">Estado</label>

                            <select name="estado" class="form-select">
                                <option value="pendiente">Pendiente</option>
                                <option value="en progreso">En progreso</option>
                                <option value="completada">Completada</option>
                            </select>
                        </div>

                    </div>

                    <div class="row">

                        <div class="col-md-6 mb-3">
                            <label class="form-label">Descripción</label>

                            <textarea
                                name="descripcion"
                                class="form-control ${errores.descripcion ? "is-invalid" : ""}"
                                rows="4"
                            >${datos.descripcion || ""}</textarea>

                            <div class="invalid-feedback">
                                ${errores.descripcion || ""}
                            </div>
                        </div>

                        <div class="col-md-6 mb-3">
                            <label class="form-label">Prioridad</label>

                            <select name="prioridad" class="form-select">
                                <option value="baja">Baja</option>
                                <option value="media">Media</option>
                                <option value="alta">Alta</option>
                            </select>
                        </div>

                    </div>

                    <button type="submit" class="btn btn-primary">
                        <i class="bi bi-floppy2-fill"></i> Guardar
                    </button>

                    <a href="/tareas" class="btn btn-secondary">
                        <i class="bi bi-x-circle-fill"></i> Cancelar
                    </a>

                </form>
            </div>
        </div>
        `
    );
}