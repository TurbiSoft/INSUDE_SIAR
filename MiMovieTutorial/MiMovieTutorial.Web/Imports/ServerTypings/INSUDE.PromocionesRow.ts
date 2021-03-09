namespace MiMovieTutorial.INSUDE {
    export interface PromocionesRow {
        IdPromocion?: number;
        IdTitulo?: number;
        Descripcion?: string;
        YearInicio?: number;
        YearFin?: number;
        Estado?: string;
        CreateDate?: string;
        LastUpdatedAt?: string;
        IdTituloCodigo?: string;
        IdTituloNombre?: string;
        IdTituloMencion?: string;
        IdTituloIdEscuela?: number;
        IdTituloIdPensum?: number;
        IdTituloMontoInscripcion?: number;
        IdTituloCosto?: number;
        IdTituloCostoCredito?: boolean;
        IdTituloTituloOtorgado?: string;
        IdTituloIdRequisitoNacional?: number;
        IdTituloIdRequisitoExtrangero?: number;
        IdTituloTipoMatricula?: string;
        IdTituloEstado?: string;
        IdTituloCreateDate?: string;
        IdTituloCreateUser?: string;
        IdTituloCicloAcademico?: string;
    }

    export namespace PromocionesRow {
        export const idProperty = 'IdPromocion';
        export const nameProperty = 'Descripcion';
        export const localTextPrefix = 'INSUDE.Promociones';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdPromocion = "IdPromocion",
            IdTitulo = "IdTitulo",
            Descripcion = "Descripcion",
            YearInicio = "YearInicio",
            YearFin = "YearFin",
            Estado = "Estado",
            CreateDate = "CreateDate",
            LastUpdatedAt = "LastUpdatedAt",
            IdTituloCodigo = "IdTituloCodigo",
            IdTituloNombre = "IdTituloNombre",
            IdTituloMencion = "IdTituloMencion",
            IdTituloIdEscuela = "IdTituloIdEscuela",
            IdTituloIdPensum = "IdTituloIdPensum",
            IdTituloMontoInscripcion = "IdTituloMontoInscripcion",
            IdTituloCosto = "IdTituloCosto",
            IdTituloCostoCredito = "IdTituloCostoCredito",
            IdTituloTituloOtorgado = "IdTituloTituloOtorgado",
            IdTituloIdRequisitoNacional = "IdTituloIdRequisitoNacional",
            IdTituloIdRequisitoExtrangero = "IdTituloIdRequisitoExtrangero",
            IdTituloTipoMatricula = "IdTituloTipoMatricula",
            IdTituloEstado = "IdTituloEstado",
            IdTituloCreateDate = "IdTituloCreateDate",
            IdTituloCreateUser = "IdTituloCreateUser",
            IdTituloCicloAcademico = "IdTituloCicloAcademico"
        }
    }
}
