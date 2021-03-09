
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class IndicesGrid extends Serenity.EntityGrid<IndicesRow, any> {
        protected getColumnsKey() { return 'INSUDE.Indices'; }
        protected getDialogType() { return IndicesDialog; }
        protected getIdProperty() { return IndicesRow.idProperty; }
        protected getInsertPermission() { return IndicesRow.insertPermission; }
        protected getLocalTextPrefix() { return IndicesRow.localTextPrefix; }
        protected getService() { return IndicesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}