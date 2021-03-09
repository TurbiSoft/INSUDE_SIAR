
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class NivelesPorCarreraGrid extends Serenity.EntityGrid<NivelesPorCarreraRow, any> {
        protected getColumnsKey() { return 'INSUDE.NivelesPorCarrera'; }
        protected getDialogType() { return NivelesPorCarreraDialog; }
        protected getIdProperty() { return NivelesPorCarreraRow.idProperty; }
        protected getInsertPermission() { return NivelesPorCarreraRow.insertPermission; }
        protected getLocalTextPrefix() { return NivelesPorCarreraRow.localTextPrefix; }
        protected getService() { return NivelesPorCarreraService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}