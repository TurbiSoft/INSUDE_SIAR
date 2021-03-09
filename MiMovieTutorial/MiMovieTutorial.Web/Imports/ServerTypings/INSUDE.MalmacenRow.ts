namespace MiMovieTutorial.INSUDE {
    export interface MalmacenRow {
        Almacenid?: number;
        Nomalmacen?: string;
    }

    export namespace MalmacenRow {
        export const idProperty = 'Almacenid';
        export const nameProperty = 'Nomalmacen';
        export const localTextPrefix = 'INSUDE.Malmacen';
        export const lookupKey = 'INSUEDE.Malmacen';

        export function getLookup(): Q.Lookup<MalmacenRow> {
            return Q.getLookup<MalmacenRow>('INSUEDE.Malmacen');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Almacenid = "Almacenid",
            Nomalmacen = "Nomalmacen"
        }
    }
}
