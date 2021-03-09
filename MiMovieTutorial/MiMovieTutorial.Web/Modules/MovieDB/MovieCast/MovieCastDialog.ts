
namespace MiMovieTutorial.MovieDB {

    @Serenity.Decorators.registerClass()
    export class MovieCastDialog extends Serenity.EntityDialog<MovieCastRow, any> {
        protected getFormKey() { return MovieCastForm.formKey; }
        protected getIdProperty() { return MovieCastRow.idProperty; }
        protected getLocalTextPrefix() { return MovieCastRow.localTextPrefix; }
        protected getNameProperty() { return MovieCastRow.nameProperty; }
        protected getService() { return MovieCastService.baseUrl; }
        protected getDeletePermission() { return MovieCastRow.deletePermission; }
        protected getInsertPermission() { return MovieCastRow.insertPermission; }
        protected getUpdatePermission() { return MovieCastRow.updatePermission; }

        protected form = new MovieCastForm(this.idPrefix);

    }
}