
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class PromocionesDialog extends Serenity.EntityDialog<PromocionesRow, any> {
        protected getFormKey() { return PromocionesForm.formKey; }
        protected getIdProperty() { return PromocionesRow.idProperty; }
        protected getLocalTextPrefix() { return PromocionesRow.localTextPrefix; }
        protected getNameProperty() { return PromocionesRow.nameProperty; }
        protected getService() { return PromocionesService.baseUrl; }
        protected getDeletePermission() { return PromocionesRow.deletePermission; }
        protected getInsertPermission() { return PromocionesRow.insertPermission; }
        protected getUpdatePermission() { return PromocionesRow.updatePermission; }

        protected form = new PromocionesForm(this.idPrefix);

    }
}