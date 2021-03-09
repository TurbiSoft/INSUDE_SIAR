namespace MiMovieTutorial.INSUDE {
    export interface FacultadesRow {
        IdInstitucion?: number;
        IdCompania?: number;
        Nombre?: string;
        CreateUser?: string;
        CreateDate?: string;
        IdCompaniaSiglas?: string;
        IdCompaniaNombre?: string;
        IdCompaniaRnc?: string;
        IdCompaniaDireccion?: string;
        IdCompaniaTelefono?: string;
        IdCompaniaFax?: string;
        IdCompaniaLogo?: string;
        IdCompaniaCorreo?: string;
        IdCompaniaWebsite?: string;
    }

    export namespace FacultadesRow {
        export const idProperty = 'IdInstitucion';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'INSUDE.Facultades';
        export const lookupKey = 'INSUDE.Facultades';

        export function getLookup(): Q.Lookup<FacultadesRow> {
            return Q.getLookup<FacultadesRow>('INSUDE.Facultades');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdInstitucion = "IdInstitucion",
            IdCompania = "IdCompania",
            Nombre = "Nombre",
            CreateUser = "CreateUser",
            CreateDate = "CreateDate",
            IdCompaniaSiglas = "IdCompaniaSiglas",
            IdCompaniaNombre = "IdCompaniaNombre",
            IdCompaniaRnc = "IdCompaniaRnc",
            IdCompaniaDireccion = "IdCompaniaDireccion",
            IdCompaniaTelefono = "IdCompaniaTelefono",
            IdCompaniaFax = "IdCompaniaFax",
            IdCompaniaLogo = "IdCompaniaLogo",
            IdCompaniaCorreo = "IdCompaniaCorreo",
            IdCompaniaWebsite = "IdCompaniaWebsite"
        }
    }
}
