
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class PromocionesGrid extends Serenity.EntityGrid<PromocionesRow, any> {
        protected getColumnsKey() { return 'INSUDE.Promociones'; }
        protected getDialogType() { return PromocionesDialog; }
        protected getIdProperty() { return PromocionesRow.idProperty; }
        protected getInsertPermission() { return PromocionesRow.insertPermission; }
        protected getLocalTextPrefix() { return PromocionesRow.localTextPrefix; }
        protected getService() { return PromocionesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}