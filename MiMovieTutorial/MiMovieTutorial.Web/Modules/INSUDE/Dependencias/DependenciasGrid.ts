
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class DependenciasGrid extends Serenity.EntityGrid<DependenciasRow, any> {
        protected getColumnsKey() { return 'INSUDE.Dependencias'; }
        protected getDialogType() { return DependenciasDialog; }
        protected getIdProperty() { return DependenciasRow.idProperty; }
        protected getInsertPermission() { return DependenciasRow.insertPermission; }
        protected getLocalTextPrefix() { return DependenciasRow.localTextPrefix; }
        protected getService() { return DependenciasService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}