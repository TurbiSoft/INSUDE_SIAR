
namespace MiMovieTutorial.MovieDB {

    @Serenity.Decorators.registerClass()
    export class PersonDialog extends Serenity.EntityDialog<PersonRow, any>
    {
        protected getFormKey() { return PersonForm.formKey; }
        protected getIdProperty() { return PersonRow.idProperty; }
        protected getLocalTextPrefix() { return PersonRow.localTextPrefix; }
        protected getNameProperty() { return PersonRow.nameProperty; }
        protected getService() { return PersonService.baseUrl; }
        protected getDeletePermission() { return PersonRow.deletePermission; }
        protected getInsertPermission() { return PersonRow.insertPermission; }
        protected getUpdatePermission() { return PersonRow.updatePermission; }

        protected form = new PersonForm(this.idPrefix);

        private moviesGrid: PersonMovieGrid;

        constructor()
        {
            super();

            this.moviesGrid = new PersonMovieGrid(this.byId("MoviesGrid"));
            this.tabs.on('tabsactivate', (e, i) =>
            {
                this.arrange();
            });
        }


        // Este metodo filtra los peliculas del Personaje Especifico
        protected afterLoadEntity()
        {
            super.afterLoadEntity();
            this.moviesGrid.personID = this.entityId;
        }
    }
}