import { Inject, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Talento_Artistico, Talento_Artistico_Document } from "../schemas/talentos.schema";
import { Model } from "mongoose";
import { Create_Talento_Artistico_Dto } from "../dto/create-talento_artistico.dto";
import { Nomencla_Categorias_ContratacionManifestacion_Especialidad_Controller } from "src/cultura/categorias-contrat-mancul/n_catgcont-m_espc/infrastructure/n_catgcont-m_espc.controller";
import { Nomencla_Categorias_ContratacionManifestacion_Especialidad_Service } from "src/cultura/categorias-contrat-mancul/n_catgcont-m_espc/infrastructure/n_catgcont-m_espc.service";

@Injectable()
export class Talento_Artistico_Service {
    
    constructor(
        @InjectModel(Talento_Artistico.name) private readonly talento_artistico_model: Model<Talento_Artistico_Document>
    ){}

async create( create_TA_Dto:Create_Talento_Artistico_Dto):Promise<Talento_Artistico>{
    console.log('llego aqui servc '+create_TA_Dto.nombre_TalentoArtistico)
    return await this.talento_artistico_model.create(create_TA_Dto)

}
    async find() {
        return await this.talento_artistico_model.find()
    }

    async findId(id:string) {
        console.log('llego a service findID id '+ id)
        return await this.talento_artistico_model.findById({_id:id})
    }

    async findEspecialidad(espc:string) {
        console.log('llego a service findEspc'+espc)
        // let espec=new Nomencla_Categorias_ContratacionManifestacion_Especialidad_Controller(new Nomencla_Categorias_ContratacionManifestacion_Especialidad_Service())
        return await this.talento_artistico_model.find({manifest_esp:espc})
    }

}