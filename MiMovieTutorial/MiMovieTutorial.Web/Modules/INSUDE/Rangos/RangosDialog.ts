
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class RangosDialog extends Serenity.EntityDialog<RangosRow, any> {
        protected getFormKey() { return RangosForm.formKey; }
        protected getIdProperty() { return RangosRow.idProperty; }
        protected getLocalTextPrefix() { return RangosRow.localTextPrefix; }
        protected getNameProperty() { return RangosRow.nameProperty; }
        protected getService() { return RangosService.baseUrl; }
        protected getDeletePermission() { return RangosRow.deletePermission; }
        protected getInsertPermission() { return RangosRow.insertPermission; }
        protected getUpdatePermission() { return RangosRow.updatePermission; }

        protected form = new RangosForm(this.idPrefix);

    }
}