
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class AlumnosCarrerasGrid extends Serenity.EntityGrid<AlumnosCarrerasRow, any> {
        protected getColumnsKey() { return 'INSUDE.AlumnosCarreras'; }
        protected getDialogType() { return AlumnosCarrerasDialog; }
        protected getIdProperty() { return AlumnosCarrerasRow.idProperty; }
        protected getInsertPermission() { return AlumnosCarrerasRow.insertPermission; }
        protected getLocalTextPrefix() { return AlumnosCarrerasRow.localTextPrefix; }
        protected getService() { return AlumnosCarrerasService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}