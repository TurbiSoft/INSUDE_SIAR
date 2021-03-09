
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class PaisGrid extends Serenity.EntityGrid<PaisRow, any> {
        protected getColumnsKey() { return 'INSUDE.Pais'; }
        protected getDialogType() { return PaisDialog; }
        protected getIdProperty() { return PaisRow.idProperty; }
        protected getInsertPermission() { return PaisRow.insertPermission; }
        protected getLocalTextPrefix() { return PaisRow.localTextPrefix; }
        protected getService() { return PaisService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}