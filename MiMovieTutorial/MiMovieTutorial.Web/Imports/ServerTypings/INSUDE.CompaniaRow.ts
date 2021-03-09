namespace MiMovieTutorial.INSUDE {
    export interface CompaniaRow {
        IdCompania?: number;
        Siglas?: string;
        Nombre?: string;
        Rnc?: string;
        Direccion?: string;
        Telefono?: string;
        Fax?: string;
        Logo?: string;
        Correo?: string;
        Website?: string;
    }

    export namespace CompaniaRow {
        export const idProperty = 'IdCompania';
        export const nameProperty = 'Siglas';
        export const localTextPrefix = 'INSUDE.Compania';
        export const lookupKey = 'INSUDE.Compania';

        export function getLookup(): Q.Lookup<CompaniaRow> {
            return Q.getLookup<CompaniaRow>('INSUDE.Compania');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdCompania = "IdCompania",
            Siglas = "Siglas",
            Nombre = "Nombre",
            Rnc = "Rnc",
            Direccion = "Direccion",
            Telefono = "Telefono",
            Fax = "Fax",
            Logo = "Logo",
            Correo = "Correo",
            Website = "Website"
        }
    }
}
