
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class NacionalidadDialog extends Serenity.EntityDialog<NacionalidadRow, any> {
        protected getFormKey() { return NacionalidadForm.formKey; }
        protected getIdProperty() { return NacionalidadRow.idProperty; }
        protected getLocalTextPrefix() { return NacionalidadRow.localTextPrefix; }
        protected getNameProperty() { return NacionalidadRow.nameProperty; }
        protected getService() { return NacionalidadService.baseUrl; }
        protected getDeletePermission() { return NacionalidadRow.deletePermission; }
        protected getInsertPermission() { return NacionalidadRow.insertPermission; }
        protected getUpdatePermission() { return NacionalidadRow.updatePermission; }

        protected form = new NacionalidadForm(this.idPrefix);

    }
}