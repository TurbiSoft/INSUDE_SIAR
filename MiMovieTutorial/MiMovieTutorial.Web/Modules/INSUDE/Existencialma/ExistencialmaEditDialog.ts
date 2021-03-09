/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class ExistencialmaEditDialog extends
        Common.GridEditorDialog<ExistencialmaRow> {
        protected getFormKey() { return ExistencialmaForm.formKey; }
     //   protected getNameProperty() { return ExistencialmaRow.nameProperty; }
        protected getLocalTextPrefix() { return ExistencialmaRow.localTextPrefix; }

        protected form: ExistencialmaForm;

        constructor() {
            super();
            this.form = new ExistencialmaForm(this.idPrefix);
        }
    }
}