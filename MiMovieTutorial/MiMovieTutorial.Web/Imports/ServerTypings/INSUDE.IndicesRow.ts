namespace MiMovieTutorial.INSUDE {
    export interface IndicesRow {
        IdIndice?: number;
        Literal?: string;
        Puntos?: number;
        Rango1?: number;
        Rango2?: number;
        CreateDate?: string;
        CreateUser?: string;
        Descripcion?: string;
    }

    export namespace IndicesRow {
        export const idProperty = 'IdIndice';
        export const nameProperty = 'Literal';
        export const localTextPrefix = 'INSUDE.Indices';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdIndice = "IdIndice",
            Literal = "Literal",
            Puntos = "Puntos",
            Rango1 = "Rango1",
            Rango2 = "Rango2",
            CreateDate = "CreateDate",
            CreateUser = "CreateUser",
            Descripcion = "Descripcion"
        }
    }
}
