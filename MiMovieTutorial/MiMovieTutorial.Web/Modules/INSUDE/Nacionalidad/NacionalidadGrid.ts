
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class NacionalidadGrid extends Serenity.EntityGrid<NacionalidadRow, any> {
        protected getColumnsKey() { return 'INSUDE.Nacionalidad'; }
        protected getDialogType() { return NacionalidadDialog; }
        protected getIdProperty() { return NacionalidadRow.idProperty; }
        protected getInsertPermission() { return NacionalidadRow.insertPermission; }
        protected getLocalTextPrefix() { return NacionalidadRow.localTextPrefix; }
        protected getService() { return NacionalidadService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}