namespace MiMovieTutorial.INSUDE {
    export interface NivelesPorCarreraRow {
        IdTituloNivel?: number;
        IdTitulo?: number;
        Nombre?: string;
        Orden?: number;
        IdTipoCalificacion?: number;
        CreateDate?: string;
        CreateUser?: string;
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
        IdTipoCalificacionNombre?: string;
        IdTipoCalificacionCreateDate?: string;
        IdTipoCalificacionCreateUser?: string;
    }

    export namespace NivelesPorCarreraRow {
        export const idProperty = 'IdTituloNivel';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'INSUDE.NivelesPorCarrera';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdTituloNivel = "IdTituloNivel",
            IdTitulo = "IdTitulo",
            Nombre = "Nombre",
            Orden = "Orden",
            IdTipoCalificacion = "IdTipoCalificacion",
            CreateDate = "CreateDate",
            CreateUser = "CreateUser",
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
            IdTipoCalificacionNombre = "IdTipoCalificacionNombre",
            IdTipoCalificacionCreateDate = "IdTipoCalificacionCreateDate",
            IdTipoCalificacionCreateUser = "IdTipoCalificacionCreateUser"
        }
    }
}
