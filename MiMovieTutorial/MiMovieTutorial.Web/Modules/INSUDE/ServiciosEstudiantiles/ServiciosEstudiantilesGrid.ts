
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class ServiciosEstudiantilesGrid extends Serenity.EntityGrid<ServiciosEstudiantilesRow, any> {
        protected getColumnsKey() { return 'INSUDE.ServiciosEstudiantiles'; }
        protected getDialogType() { return ServiciosEstudiantilesDialog; }
        protected getIdProperty() { return ServiciosEstudiantilesRow.idProperty; }
        protected getInsertPermission() { return ServiciosEstudiantilesRow.insertPermission; }
        protected getLocalTextPrefix() { return ServiciosEstudiantilesRow.localTextPrefix; }
        protected getService() { return ServiciosEstudiantilesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}