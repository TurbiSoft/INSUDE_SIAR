namespace MiMovieTutorial.INSUDE {
    export interface SexoRow {
        Codsexo?: string;
        Nomsexo?: string;
    }

    export namespace SexoRow {
        export const idProperty = 'Codsexo';
        export const nameProperty = 'Codsexo';
        export const localTextPrefix = 'INSUDE.Sexo';
        export const lookupKey = 'INSUDE.Sexo';

        export function getLookup(): Q.Lookup<SexoRow> {
            return Q.getLookup<SexoRow>('INSUDE.Sexo');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Codsexo = "Codsexo",
            Nomsexo = "Nomsexo"
        }
    }
}
