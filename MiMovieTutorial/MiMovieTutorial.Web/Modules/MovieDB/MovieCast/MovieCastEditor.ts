
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

// MiMovieTutorial.MovieDB.Entities
namespace MiMovieTutorial.MovieDB.Entities
{
    @Serenity.Decorators.registerEditor()
    export class MovieCastEditor
        extends Common.GridEditorBase<MovieCastRow> {
        protected getColumnsKey() { return "MovieDB.MovieCast"; }
        protected getDialogType() { return MovieCastEditDialog; } // Cambiamos el tipo de dialogo
        protected getLocalTextPrefix() { return MovieCastRow.localTextPrefix; }

        // Cosntructor de la clase
        constructor(container: JQuery)
        {
            super(container);
        }


        // boton agregar
        protected getAddButtonCaption()
        {
            return "Add";
        }

        // Desplegamos el nombre compelto del actor
        protected validateEntity(row: MovieCastRow, id: number)
        {
            if (!super.validateEntity(row, id))
                return false;

            row.PersonFullname = PersonRow.getLookup().itemById[row.PersonId].Fullname;

            return true;
        }        

    }
}  