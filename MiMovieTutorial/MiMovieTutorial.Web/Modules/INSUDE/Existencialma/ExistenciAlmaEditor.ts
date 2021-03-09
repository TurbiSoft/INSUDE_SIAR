/// <reference path="../../Common/Helpers/GridEditorBase.ts" />


namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.registerEditor()
    export class ExistenciAlmaEditor
        extends Common.GridEditorBase<ExistencialmaRow> {
        protected getColumnsKey() { return "INSUDE.Existencialma"; }
        protected getDialogType() { return ExistencialmaEditDialog; }
        protected getLocalTextPrefix() { return ExistencialmaRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getAddButtonCaption() {
            return "Add";
        }
    }

    }
