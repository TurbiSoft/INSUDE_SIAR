namespace MiMovieTutorial.INSUDE {
    export interface PaisRow {
        IdPais?: number;
        Nombre?: string;
        Estado?: string;
        CreateDate?: string;
        CreateUser?: string;
    }

    export namespace PaisRow {
        export const idProperty = 'IdPais';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'INSUDE.Pais';
        export const lookupKey = 'INSUDE.Pais';

        export function getLookup(): Q.Lookup<PaisRow> {
            return Q.getLookup<PaisRow>('INSUDE.Pais');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdPais = "IdPais",
            Nombre = "Nombre",
            Estado = "Estado",
            CreateDate = "CreateDate",
            CreateUser = "CreateUser"
        }
    }
}
