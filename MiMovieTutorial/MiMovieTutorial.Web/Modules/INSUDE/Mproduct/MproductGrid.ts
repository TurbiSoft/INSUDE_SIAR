
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class MproductGrid extends Serenity.EntityGrid<MproductRow, any> {
        protected getColumnsKey() { return 'INSUDE.Mproduct'; }
        protected getDialogType() { return MproductDialog; }
        protected getIdProperty() { return MproductRow.idProperty; }
        protected getInsertPermission() { return MproductRow.insertPermission; }
        protected getLocalTextPrefix() { return MproductRow.localTextPrefix; }
        protected getService() { return MproductService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}