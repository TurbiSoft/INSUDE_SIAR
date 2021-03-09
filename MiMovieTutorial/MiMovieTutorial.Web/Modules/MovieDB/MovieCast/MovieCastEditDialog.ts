
/*********************************************
 * dialogo para Editar MasterDetail MovieCast
 * *******************************************/

/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace MiMovieTutorial.MovieDB.Entities {
    @Serenity.Decorators.registerClass()
    export class MovieCastEditDialog extends
        Common.GridEditorDialog<MovieCastRow> {
        protected getFormKey() { return MovieCastForm.formKey; }
        protected getNameProperty() { return MovieCastRow.nameProperty; }
        protected getLocalTextPrefix() { return MovieCastRow.localTextPrefix; }

        protected form: MovieCastForm;

        constructor() {
            super();
            this.form = new MovieCastForm(this.idPrefix);
        }
    }
}  