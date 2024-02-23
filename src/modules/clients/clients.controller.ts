/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

import { ClientesService } from './clients.service';

@Controller('clients')
export class ClientsController {
  constructor(private _clientsService: ClientesService) {}

  @Get()
  findAll() {
    return this._clientsService.findAll();
  }
}
