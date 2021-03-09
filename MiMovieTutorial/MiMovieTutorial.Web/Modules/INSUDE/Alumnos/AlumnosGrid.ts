
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class AlumnosGrid extends Serenity.EntityGrid<AlumnosRow, any> {
        protected getColumnsKey() { return 'INSUDE.Alumnos'; }
        protected getDialogType() { return AlumnosDialog; }
        protected getIdProperty() { return AlumnosRow.idProperty; }
        protected getInsertPermission() { return AlumnosRow.insertPermission; }
        protected getLocalTextPrefix() { return AlumnosRow.localTextPrefix; }
        protected getService() { return AlumnosService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}