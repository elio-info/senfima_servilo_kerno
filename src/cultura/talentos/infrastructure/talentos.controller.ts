/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, Post, Query, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Talento_Artistico_Service } from './talentos.service';
import { Create_Talento_Artistico_Dto } from '../dto/create-talento_artistico.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('talento-artistico')
@ApiTags('Talentos Artisticos')
export class Talento_Artistico_Controller {
    constructor(private talentos_srvcs: Talento_Artistico_Service){}

    @Post()
    create(@Body(new ValidationPipe()) create_ta_dto: Create_Talento_Artistico_Dto){
        this.talentos_srvcs.create(create_ta_dto)
    }
    @Get()
    findAll(@Query() query:ExpressQuery){
       return this.talentos_srvcs.find()
    }
    // @ApiTags('Sirve para algo')
    @Get(':id')
    findId(@Param('id') id:string){ return this.talentos_srvcs.findId(id)}

    // @ApiTags('No se ')
    @Get(':espc')
    findByManifestacion_Especialidad(@Param('esp') esp:string){ return this.talentos_srvcs.findEspecialidad(esp)}
}
