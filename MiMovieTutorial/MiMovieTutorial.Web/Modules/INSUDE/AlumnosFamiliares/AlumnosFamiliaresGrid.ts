
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class AlumnosFamiliaresGrid extends Serenity.EntityGrid<AlumnosFamiliaresRow, any> {
        protected getColumnsKey() { return 'INSUDE.AlumnosFamiliares'; }
        protected getDialogType() { return AlumnosFamiliaresDialog; }
        protected getIdProperty() { return AlumnosFamiliaresRow.idProperty; }
        protected getInsertPermission() { return AlumnosFamiliaresRow.insertPermission; }
        protected getLocalTextPrefix() { return AlumnosFamiliaresRow.localTextPrefix; }
        protected getService() { return AlumnosFamiliaresService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}