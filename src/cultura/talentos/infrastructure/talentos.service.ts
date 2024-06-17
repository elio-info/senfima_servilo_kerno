import { Inject, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Talento_Artistico, Talento_Artistico_Document } from "../schemas/talentos.schema";
import { Model } from "mongoose";
import { Create_Talento_Artistico_Dto } from "../dto/create-talento_artistico.dto";

@Injectable()
export class Talento_Artistico_Service {
    constructor(
        @InjectModel(Talento_Artistico.name) private readonly talento_artistico_model: Model<Talento_Artistico_Document>
    ){}

async create( create_TA_Dto:Create_Talento_Artistico_Dto):Promise<void>{
    console.log('llego aqui servc'+create_TA_Dto.nombre_TalentoArtistico)
}
}