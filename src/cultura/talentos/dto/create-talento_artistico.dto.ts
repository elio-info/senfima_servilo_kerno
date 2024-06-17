import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsOptional, IsString, MinLength } from "class-validator"

export class Create_Talento_Artistico_Dto {
    
    @ApiProperty({
        example:'524634',
        description:'Identificador que se le da en la entidad'
    })//{required:true}
    @IsOptional()
    @IsString()
    id_TalentoArtistico:string

    @ApiProperty({  
        required:true,
        example:'Pedro Ramos'
      })
      @IsString()
      @MinLength(3)
    nombre_TalentoArtistico :string

    @ApiProperty({
        example:`Obj ({idManif:'666fb3036e7508a9d7cdf6b6',idEsp:'666fb44952dfb6fc0cb7eedd') Danza, Contemporanea`
    })//{required:true}
    // Obj (idManif,idEsp)
    manifest_esp:string

    @IsOptional()
    @IsBoolean()//{ default:true }
    persona_TalentoArtistico:boolean

    @ApiProperty({
        example:'A de Aficionado,Id del tipo de enum del Contrato Talento'
    })//{required:true}
    @IsString()
    contrato_talento:string
    
    @ApiProperty({
        example:'666fbf8c7ddf8e6a9ad24226, la citiera, Id de la entidad que contrata'
    })//{required:true}
    @IsString()
    entidad_contrato_talento:string

    @ApiProperty({
        default:false
    })
    @IsOptional()
    @IsBoolean()
    isDeleted:boolean

    // @Prop({ default: Date.now })
    // createdAt: Date;
  
    // @Prop({ default: Date.now })
    // updatedAt: Date;
}
