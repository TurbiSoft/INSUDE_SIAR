
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class MproductDialog extends Serenity.EntityDialog<MproductRow, any> {
        protected getFormKey() { return MproductForm.formKey; }
        protected getIdProperty() { return MproductRow.idProperty; }
        protected getLocalTextPrefix() { return MproductRow.localTextPrefix; }
        protected getNameProperty() { return MproductRow.nameProperty; }
        protected getService() { return MproductService.baseUrl; }
        protected getDeletePermission() { return MproductRow.deletePermission; }
        protected getInsertPermission() { return MproductRow.insertPermission; }
        protected getUpdatePermission() { return MproductRow.updatePermission; }

        protected form = new MproductForm(this.idPrefix);

    }
}