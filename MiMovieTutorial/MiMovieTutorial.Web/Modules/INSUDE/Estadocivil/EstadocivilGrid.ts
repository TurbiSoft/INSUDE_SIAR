
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class EstadocivilGrid extends Serenity.EntityGrid<EstadocivilRow, any> {
        protected getColumnsKey() { return 'INSUDE.Estadocivil'; }
        protected getDialogType() { return EstadocivilDialog; }
        protected getIdProperty() { return EstadocivilRow.idProperty; }
        protected getInsertPermission() { return EstadocivilRow.insertPermission; }
        protected getLocalTextPrefix() { return EstadocivilRow.localTextPrefix; }
        protected getService() { return EstadocivilService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}