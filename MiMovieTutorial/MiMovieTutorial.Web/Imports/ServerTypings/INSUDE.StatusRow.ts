namespace MiMovieTutorial.INSUDE {
    export interface StatusRow {
        IdStatus?: number;
        NomStatus?: string;
    }

    export namespace StatusRow {
        export const idProperty = 'IdStatus';
        export const nameProperty = 'NomStatus';
        export const localTextPrefix = 'INSUDE.Status';
        export const lookupKey = 'INSUDE.Status';

        export function getLookup(): Q.Lookup<StatusRow> {
            return Q.getLookup<StatusRow>('INSUDE.Status');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdStatus = "IdStatus",
            NomStatus = "NomStatus"
        }
    }
}
