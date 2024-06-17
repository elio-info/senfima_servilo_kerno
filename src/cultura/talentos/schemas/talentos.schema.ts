import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document, Types } from "mongoose";

@Schema({
    timestamps:true,
    validateBeforeSave:true,
    collection:'talento_Artistico'
})
export class Talento_Artistico {
    _id: Types.ObjectId;
    
    @Prop()//{required:true}
    id_TalentoArtistico:string
    @Prop({  required:true  })
    nombre_TalentoArtistico :string

    @Prop()//{required:true}
    // Obj (idManif,idEsp)
    manifest_esp:string

    @Prop()//{ default:true }
    persona_TalentoArtistico:boolean

    @Prop()//{required:true}
    contrato_talento:string
    
    @Prop()//{required:true}
    entidad_contrato_talento:string

    @Prop({default:true})
    isDeleted:boolean

    @Prop({ default: Date.now })
    createdAt: Date;
  
    @Prop({ default: Date.now })
    updatedAt: Date;
}

export const Talento_Artistico_Schema=
SchemaFactory.createForClass(Talento_Artistico)

export type Talento_Artistico_Document =
Talento_Artistico & Document