import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Especialista from './especialista.js'

export default class DiaAtencion extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare especialistaId: number

  @column()
  declare dia: string

  @column()
  declare horaInicio: string

  @column()
  declare horaFin: string

  @belongsTo(() => Especialista)
  declare especialista: BelongsTo<typeof Especialista>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
