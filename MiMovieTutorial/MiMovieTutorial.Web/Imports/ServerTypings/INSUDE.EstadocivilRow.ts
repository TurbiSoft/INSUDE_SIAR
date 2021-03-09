namespace MiMovieTutorial.INSUDE {
    export interface EstadocivilRow {
        CodEstado?: number;
        NomEstado?: string;
    }

    export namespace EstadocivilRow {
        export const idProperty = 'CodEstado';
        export const nameProperty = 'NomEstado';
        export const localTextPrefix = 'INSUDE.Estadocivil';
        export const lookupKey = 'INSUDE.Estadocivil';

        export function getLookup(): Q.Lookup<EstadocivilRow> {
            return Q.getLookup<EstadocivilRow>('INSUDE.Estadocivil');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CodEstado = "CodEstado",
            NomEstado = "NomEstado"
        }
    }
}
