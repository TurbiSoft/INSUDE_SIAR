
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class MalmacenGrid extends Serenity.EntityGrid<MalmacenRow, any> {
        protected getColumnsKey() { return 'INSUDE.Malmacen'; }
        protected getDialogType() { return MalmacenDialog; }
        protected getIdProperty() { return MalmacenRow.idProperty; }
        protected getInsertPermission() { return MalmacenRow.insertPermission; }
        protected getLocalTextPrefix() { return MalmacenRow.localTextPrefix; }
        protected getService() { return MalmacenService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}