
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class RequisitosGrid extends Serenity.EntityGrid<RequisitosRow, any> {
        protected getColumnsKey() { return 'INSUDE.Requisitos'; }
        protected getDialogType() { return RequisitosDialog; }
        protected getIdProperty() { return RequisitosRow.idProperty; }
        protected getInsertPermission() { return RequisitosRow.insertPermission; }
        protected getLocalTextPrefix() { return RequisitosRow.localTextPrefix; }
        protected getService() { return RequisitosService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}