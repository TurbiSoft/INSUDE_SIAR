namespace MiMovieTutorial.INSUDE {
    export interface RangosRow {
        IdRango?: number;
        Nombre?: string;
    }

    export namespace RangosRow {
        export const idProperty = 'IdRango';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'INSUDE.Rangos';
        export const lookupKey = 'INSUDE.Rangos';

        export function getLookup(): Q.Lookup<RangosRow> {
            return Q.getLookup<RangosRow>('INSUDE.Rangos');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdRango = "IdRango",
            Nombre = "Nombre"
        }
    }
}
