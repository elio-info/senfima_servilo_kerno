/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { Talento_Artistico_Controller } from './infrastructure/talentos.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Talento_Artistico, Talento_Artistico_Schema } from './schemas/talentos.schema';
import { Talento_Artistico_Service } from './infrastructure/talentos.service';

@Module({
    imports: [
        MongooseModule.forFeature(
            [
                {
                    name: Talento_Artistico.name,
                    schema:Talento_Artistico_Schema
                }
            ]
        )
    ],
    controllers: [ Talento_Artistico_Controller],
    providers: [ Talento_Artistico_Service],
})
export class Talento_Artistico_Module {}
