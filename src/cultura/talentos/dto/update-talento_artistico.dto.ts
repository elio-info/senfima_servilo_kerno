import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsDate, IsOptional, IsString, MinLength } from "class-validator"

export class Update_Talento_Artistico_Dto {
    
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
        example:'Obj (idManif,idEsp)'
    })//{required:true}
    // Obj (idManif,idEsp)
    @IsOptional()
    manifest_esp:string

    @IsOptional()
    @IsBoolean()//{ default:true }
    persona_TalentoArtistico:boolean

    @ApiProperty({
        example:'Id del tipo de enum del Contrato Talento'
    })//{required:true}
    @IsString()
    contrato_talento:string
    
    @ApiProperty({
        example:'Id de la entidad que contrata'
    })//{required:true}
    @IsOptional()
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
  
    @IsOptional()
    @IsDate()
    updatedAt: Date;
}
