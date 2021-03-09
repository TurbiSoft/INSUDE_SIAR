namespace MiMovieTutorial.INSUDE {
    export namespace TipoDeCalificacionService {
        export const baseUrl = 'INSUDE/TipoDeCalificacion';

        export declare function Create(request: Serenity.SaveRequest<TipoDeCalificacionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TipoDeCalificacionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TipoDeCalificacionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TipoDeCalificacionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "INSUDE/TipoDeCalificacion/Create",
            Update = "INSUDE/TipoDeCalificacion/Update",
            Delete = "INSUDE/TipoDeCalificacion/Delete",
            Retrieve = "INSUDE/TipoDeCalificacion/Retrieve",
            List = "INSUDE/TipoDeCalificacion/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TipoDeCalificacionService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
