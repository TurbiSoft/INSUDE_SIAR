namespace MiMovieTutorial.INSUDE {
    export interface DependenciasRow {
        IdDependencia?: number;
        Nombre?: string;
    }

    export namespace DependenciasRow {
        export const idProperty = 'IdDependencia';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'INSUDE.Dependencias';
        export const lookupKey = 'INSUDE.Dependencias';

        export function getLookup(): Q.Lookup<DependenciasRow> {
            return Q.getLookup<DependenciasRow>('INSUDE.Dependencias');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdDependencia = "IdDependencia",
            Nombre = "Nombre"
        }
    }
}
