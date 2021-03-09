
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class IndicesDialog extends Serenity.EntityDialog<IndicesRow, any> {
        protected getFormKey() { return IndicesForm.formKey; }
        protected getIdProperty() { return IndicesRow.idProperty; }
        protected getLocalTextPrefix() { return IndicesRow.localTextPrefix; }
        protected getNameProperty() { return IndicesRow.nameProperty; }
        protected getService() { return IndicesService.baseUrl; }
        protected getDeletePermission() { return IndicesRow.deletePermission; }
        protected getInsertPermission() { return IndicesRow.insertPermission; }
        protected getUpdatePermission() { return IndicesRow.updatePermission; }

        protected form = new IndicesForm(this.idPrefix);

    }
}