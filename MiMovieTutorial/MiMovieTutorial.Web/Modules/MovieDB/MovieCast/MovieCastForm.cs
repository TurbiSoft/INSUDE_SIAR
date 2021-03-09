/*****************************************************
 * formulario para editar la tabla intermedia MovieCast
 * entre Movie y Person (Peliculas y Elenco actores)
 * y el personaje representado en esta por el actor
 * *************************************************/

using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.MovieDB.Forms
{
    [FormScript("MovieDB.MovieCast")]
    [BasedOnRow(typeof(Entities.MovieCastRow), CheckNames = true)]
    public class MovieCastForm
    {
        // el MovieID debe ser  el automtico que se esta editando en el momento
        //  public Int32 MovieId { get; set; }

        [DisplayName("Actor Id")]
        public Int32 PersonId { get; set; }

        [DisplayName("Personaje")]
        public String Character { get; set; }
    }
}