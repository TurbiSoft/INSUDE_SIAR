namespace MiMovieTutorial.INSUDE {
    export interface ExistencialmaRow {
        Sec?: number;
        CodPro?: number;
        Almacen?: number;
        Existencia?: number;
        CodProDesPro?: string;
        CodProPrecio?: number;
        AlmacenNomalmacen?: string;
    }

    export namespace ExistencialmaRow {
        export const idProperty = 'Sec';
        export const localTextPrefix = 'INSUDE.Existencialma';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Sec = "Sec",
            CodPro = "CodPro",
            Almacen = "Almacen",
            Existencia = "Existencia",
            CodProDesPro = "CodProDesPro",
            CodProPrecio = "CodProPrecio",
            AlmacenNomalmacen = "AlmacenNomalmacen"
        }
    }
}
