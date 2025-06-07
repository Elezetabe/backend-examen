export default class EspecialistasController {
  public async index({ response }) {
    return response.ok([
      { id: 1, nombre: 'Dra. Laura', especialidad: 'Cardiología' },
      { id: 2, nombre: 'Dr. Pedro', especialidad: 'Pediatría' },
    ])
  }
}
