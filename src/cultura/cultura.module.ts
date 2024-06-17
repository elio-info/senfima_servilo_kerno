import { Module } from "@nestjs/common";
import { Nomencla_CodificadoresCulturales_Module } from "./codificadores-cult/nomencla_codificadores-cultura.module";
import { Nomencla_Categorias_ContratacionManifestacion_Module } from "./categorias-contrat-mancul/n_catgcont-m/n_catgcont-m.module";
import { Nomencla_Categorias_ContratacionManifestacion_Especialidad_Module } from "./categorias-contrat-mancul/n_catgcont-m_espc/n_catgcont-m_espc.module";
import { Talento_Artistico_Module } from "./talentos/talentos.module";
import { Nomencla_Categorias_ContratacionManifestacion_Especialidad_Schema } from "./categorias-contrat-mancul/n_catgcont-m_espc/schemas/n_catgcont-m_espc.schema";
import { Nomencla_Categorias_ContratacionManifestacion_Especialidad_Service } from "./categorias-contrat-mancul/n_catgcont-m_espc/infrastructure/n_catgcont-m_espc.service";

@Module({
    imports:[
        Nomencla_CodificadoresCulturales_Module,
        Nomencla_Categorias_ContratacionManifestacion_Module,
        Nomencla_Categorias_ContratacionManifestacion_Especialidad_Module,
        Talento_Artistico_Module
    ]
})
export class CulturaModule {    
}