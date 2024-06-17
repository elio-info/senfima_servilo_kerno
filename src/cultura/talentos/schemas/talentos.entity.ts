import { Prop } from "@nestjs/mongoose";
import { Nomenclador_Clasifica_ContratoTalento } from "src/cultura/codificadores-cult/enums/codificadores";

export class Talento_Artistico {
    id:string
    id_TalentoArtistico:string
    nombre_TalentoArtistico :string
    //Nomencla_Categorias_ContratacionManifestacion_Clss.id y Nomencla_CategoriasContratacionManifestacion_Especialidad_Clss.id
    manifest_esp:string
    //Nomencla_CategoriasContratacionManifestacion_Especialidad_Clss.id
    //especialidad:string   
    @Prop({  default:true })
    persona_TalentoArtistico:boolean
    //Nomenclador_Clasifica_ContratoTalento
    @Prop({  default:'A' })
    contrato_talento:Nomenclador_Clasifica_ContratoTalento
    entidad_contrato_talento:string
    
    @Prop({  default:false })
    isDeleted:boolean
    createdAt: Date;  
    updatedAt: Date;
}