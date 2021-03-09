using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using MiMovieTutorial.Web.Modules.MovieDB.Movie;
using MiMovieTutorial.MovieDB.Entities;

namespace MiMovieTutorial.MovieDB.Forms
{
    [FormScript("MovieDB.Movie")]
    [BasedOnRow(typeof(Entities.MovieRow), CheckNames = false)]
    public class MovieForm
    {
        public String Title { get; set; }

        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }

        [MovieCastEditor]
        public List<Entities.MovieCastRow> CastList { get; set; }

        public String PrimaryImage { get; set; }
        public String GalleryImages { get; set; }

        [TextAreaEditor(Rows = 8)]
        public String Storyline { get; set; }

        public Int32 Year { get; set; }

        public DateTime ReleaseDate { get; set; }

        public Int32 Runtime { get; set; }

        public MovieKind Kind { get; set; }
        /*
        public Int32 GenreId { get; set; }
        */

        public List<Int32> GenreList { get; set; }
    }
}