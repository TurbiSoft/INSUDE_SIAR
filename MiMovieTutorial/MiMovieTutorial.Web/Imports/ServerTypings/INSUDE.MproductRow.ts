namespace MiMovieTutorial.INSUDE {
    export interface MproductRow {
        CodPro?: number;
        DesPro?: string;
        Precio?: number;
    }

    export namespace MproductRow {
        export const idProperty = 'CodPro';
        export const nameProperty = 'DesPro';
        export const localTextPrefix = 'INSUDE.Mproduct';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CodPro = "CodPro",
            DesPro = "DesPro",
            Precio = "Precio"
        }
    }
}
