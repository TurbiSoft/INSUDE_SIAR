
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class InstructoresDialog extends Serenity.EntityDialog<InstructoresRow, any> {
        protected getFormKey() { return InstructoresForm.formKey; }
        protected getIdProperty() { return InstructoresRow.idProperty; }
        protected getLocalTextPrefix() { return InstructoresRow.localTextPrefix; }
        protected getNameProperty() { return InstructoresRow.nameProperty; }
        protected getService() { return InstructoresService.baseUrl; }
        protected getDeletePermission() { return InstructoresRow.deletePermission; }
        protected getInsertPermission() { return InstructoresRow.insertPermission; }
        protected getUpdatePermission() { return InstructoresRow.updatePermission; }

        protected form = new InstructoresForm(this.idPrefix);

    }
}