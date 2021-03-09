namespace MiMovieTutorial.INSUDE {
    export interface NacionalidadRow {
        IdNacionalidad?: number;
        Nombre?: string;
        Estado?: string;
        CreateUser?: string;
        CreateDate?: string;
    }

    export namespace NacionalidadRow {
        export const idProperty = 'IdNacionalidad';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'INSUDE.Nacionalidad';
        export const lookupKey = 'INSUDE.Nacionalidad';

        export function getLookup(): Q.Lookup<NacionalidadRow> {
            return Q.getLookup<NacionalidadRow>('INSUDE.Nacionalidad');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdNacionalidad = "IdNacionalidad",
            Nombre = "Nombre",
            Estado = "Estado",
            CreateUser = "CreateUser",
            CreateDate = "CreateDate"
        }
    }
}
