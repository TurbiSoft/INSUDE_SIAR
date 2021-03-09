namespace MiMovieTutorial.INSUDE {
    export interface PensumRow {
        IdPensum?: number;
        IdTitulo?: number;
        Codigo?: string;
        Nombre?: string;
        Estado?: string;
        CreateDate?: string;
        CreateUser?: string;
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
        IdStatus?: number;
        IdStatusNombre?: string;
    }

    export namespace PensumRow {
        export const idProperty = 'IdPensum';
        export const nameProperty = 'Codigo';
        export const localTextPrefix = 'INSUDE.Pensum';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdPensum = "IdPensum",
            IdTitulo = "IdTitulo",
            Codigo = "Codigo",
            Nombre = "Nombre",
            Estado = "Estado",
            CreateDate = "CreateDate",
            CreateUser = "CreateUser",
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
            IdTituloCicloAcademico = "IdTituloCicloAcademico",
            IdStatus = "IdStatus",
            IdStatusNombre = "IdStatusNombre"
        }
    }
}
