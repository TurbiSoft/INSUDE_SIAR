
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class CompaniaGrid extends Serenity.EntityGrid<CompaniaRow, any> {
        protected getColumnsKey() { return 'INSUDE.Compania'; }
        protected getDialogType() { return CompaniaDialog; }
        protected getIdProperty() { return CompaniaRow.idProperty; }
        protected getInsertPermission() { return CompaniaRow.insertPermission; }
        protected getLocalTextPrefix() { return CompaniaRow.localTextPrefix; }
        protected getService() { return CompaniaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}