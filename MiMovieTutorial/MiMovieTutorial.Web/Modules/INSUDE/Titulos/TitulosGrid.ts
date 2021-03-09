
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class TitulosGrid extends Serenity.EntityGrid<TitulosRow, any> {
        protected getColumnsKey() { return 'INSUDE.Titulos'; }
        protected getDialogType() { return TitulosDialog; }
        protected getIdProperty() { return TitulosRow.idProperty; }
        protected getInsertPermission() { return TitulosRow.insertPermission; }
        protected getLocalTextPrefix() { return TitulosRow.localTextPrefix; }
        protected getService() { return TitulosService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}