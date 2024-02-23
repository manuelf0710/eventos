/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Client) private _clientRepository: Repository<Client>,
  ) {}

  async findAll() {
    return await this._clientRepository.find();
  }
  /*
  create(data: CreateClientDto) {
    const newItem = this._clientRepository.create(data);
    return this._clientRepository.save(newItem);
  }

  async paginateAll(page: number, limit: number): Promise<Pagination<Client>> {
    return paginate(this._clientRepository, { page, limit });
  }

  async paginate(options: any): Promise<Pagination<Client>> {
    const queryBuilder = this._clientRepository.createQueryBuilder('c');
    queryBuilder.select([
      'c.id',
      'c.type_id',
      'c.name_es',
      'c.name_en',
      'c.submenu_id',
      'c.deleted_at',
    ]);
    if (options.search != '') {
      queryBuilder.where(
        `(c.name_es like '%${options.search}%' OR c.name_en like '%${options.search}%')`,
      );
    }
    queryBuilder.relation('type');

    return paginate<Client>(queryBuilder, options);
  }

  async remove(id: string) {
    await this._clientRepository.delete(id);
    return true;
  } */
}
