namespace MiMovieTutorial.INSUDE {
    export interface TitulosRow {
        IdTitulo?: number;
        Codigo?: string;
        Nombre?: string;
        Mencion?: string;
        IdEscuela?: number;
        IdPensum?: number;
        MontoInscripcion?: number;
        Costo?: number;
        CostoCredito?: boolean;
        TituloOtorgado?: string;
        IdRequisitoNacional?: number;
        IdRequisitoExtrangero?: number;
        TipoMatricula?: string;
        Estado?: string;
        CreateDate?: string;
        CreateUser?: string;
        CicloAcademico?: string;
        IdEscuelaIdInstitucion?: number;
        IdEscuelaNombre?: string;
        IdEscuelaSiglas?: string;
        IdEscuelaDireccion?: string;
        IdEscuelaTelefono?: string;
        IdEscuelaContacto?: string;
        IdEscuelaEstado?: string;
        IdEscuelaCreateUser?: string;
        IdEscuelaCreateDate?: string;
        IdRequisitoNacionalNombre?: string;
        IdRequisitoNacionalCreateUser?: string;
        IdRequisitoNacionalCreateDate?: string;
        IdRequisitoExtrangeroNombre?: string;
        IdRequisitoExtrangeroCreateUser?: string;
        IdRequisitoExtrangeroCreateDate?: string;
    }

    export namespace TitulosRow {
        export const idProperty = 'IdTitulo';
        export const nameProperty = 'Codigo';
        export const localTextPrefix = 'INSUDE.Titulos';
        export const lookupKey = 'INSUDE.Titulos';

        export function getLookup(): Q.Lookup<TitulosRow> {
            return Q.getLookup<TitulosRow>('INSUDE.Titulos');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdTitulo = "IdTitulo",
            Codigo = "Codigo",
            Nombre = "Nombre",
            Mencion = "Mencion",
            IdEscuela = "IdEscuela",
            IdPensum = "IdPensum",
            MontoInscripcion = "MontoInscripcion",
            Costo = "Costo",
            CostoCredito = "CostoCredito",
            TituloOtorgado = "TituloOtorgado",
            IdRequisitoNacional = "IdRequisitoNacional",
            IdRequisitoExtrangero = "IdRequisitoExtrangero",
            TipoMatricula = "TipoMatricula",
            Estado = "Estado",
            CreateDate = "CreateDate",
            CreateUser = "CreateUser",
            CicloAcademico = "CicloAcademico",
            IdEscuelaIdInstitucion = "IdEscuelaIdInstitucion",
            IdEscuelaNombre = "IdEscuelaNombre",
            IdEscuelaSiglas = "IdEscuelaSiglas",
            IdEscuelaDireccion = "IdEscuelaDireccion",
            IdEscuelaTelefono = "IdEscuelaTelefono",
            IdEscuelaContacto = "IdEscuelaContacto",
            IdEscuelaEstado = "IdEscuelaEstado",
            IdEscuelaCreateUser = "IdEscuelaCreateUser",
            IdEscuelaCreateDate = "IdEscuelaCreateDate",
            IdRequisitoNacionalNombre = "IdRequisitoNacionalNombre",
            IdRequisitoNacionalCreateUser = "IdRequisitoNacionalCreateUser",
            IdRequisitoNacionalCreateDate = "IdRequisitoNacionalCreateDate",
            IdRequisitoExtrangeroNombre = "IdRequisitoExtrangeroNombre",
            IdRequisitoExtrangeroCreateUser = "IdRequisitoExtrangeroCreateUser",
            IdRequisitoExtrangeroCreateDate = "IdRequisitoExtrangeroCreateDate"
        }
    }
}
