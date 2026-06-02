import { layout } from "../layout.js";

export function resumenPage(
  total,
  pendientes,
  enProgreso,
  completadas
) {
  return layout(
    "Resumen",
    `
    <h1 class="mb-4">Resumen de Tareas</h1>

    <div class="row g-4">

      <div class="col-md-3">
        <div class="card text-center shadow-sm border-dark">
          <div class="card-body">
            <h5 class="card-title">Total</h5>
            <h2>${total}</h2>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card text-center shadow-sm border-dark">
          <div class="card-body">
            <h5 class="card-title">Pendientes</h5>
            <h2>${pendientes}</h2>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card text-center shadow-sm border-dark">
          <div class="card-body">
            <h5 class="card-title">En progreso</h5>
            <h2>${enProgreso}</h2>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card text-center shadow-sm border-dark">
          <div class="card-body">
            <h5 class="card-title">Completadas</h5>
            <h2>${completadas}</h2>
          </div>
        </div>
      </div>

    </div>
    `
  );
}