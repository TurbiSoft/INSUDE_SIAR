namespace MiMovieTutorial.INSUDE {
    export namespace ServiciosEstudiantilesService {
        export const baseUrl = 'INSUDE/ServiciosEstudiantiles';

        export declare function Create(request: Serenity.SaveRequest<ServiciosEstudiantilesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ServiciosEstudiantilesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ServiciosEstudiantilesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ServiciosEstudiantilesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "INSUDE/ServiciosEstudiantiles/Create",
            Update = "INSUDE/ServiciosEstudiantiles/Update",
            Delete = "INSUDE/ServiciosEstudiantiles/Delete",
            Retrieve = "INSUDE/ServiciosEstudiantiles/Retrieve",
            List = "INSUDE/ServiciosEstudiantiles/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ServiciosEstudiantilesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
