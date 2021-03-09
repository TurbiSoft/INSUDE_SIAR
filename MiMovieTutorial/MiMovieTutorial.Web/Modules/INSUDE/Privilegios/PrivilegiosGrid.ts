
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class PrivilegiosGrid extends Serenity.EntityGrid<PrivilegiosRow, any> {
        protected getColumnsKey() { return 'INSUDE.Privilegios'; }
        protected getDialogType() { return PrivilegiosDialog; }
        protected getIdProperty() { return PrivilegiosRow.idProperty; }
        protected getInsertPermission() { return PrivilegiosRow.insertPermission; }
        protected getLocalTextPrefix() { return PrivilegiosRow.localTextPrefix; }
        protected getService() { return PrivilegiosService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}