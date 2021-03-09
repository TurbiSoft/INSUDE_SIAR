
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class TipoDeCalificacionGrid extends Serenity.EntityGrid<TipoDeCalificacionRow, any> {
        protected getColumnsKey() { return 'INSUDE.TipoDeCalificacion'; }
        protected getDialogType() { return TipoDeCalificacionDialog; }
        protected getIdProperty() { return TipoDeCalificacionRow.idProperty; }
        protected getInsertPermission() { return TipoDeCalificacionRow.insertPermission; }
        protected getLocalTextPrefix() { return TipoDeCalificacionRow.localTextPrefix; }
        protected getService() { return TipoDeCalificacionService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}