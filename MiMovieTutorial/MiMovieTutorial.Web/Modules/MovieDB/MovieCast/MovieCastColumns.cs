using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.MovieDB.Columns
{
    [ColumnsScript("MovieDB.MovieCast")]
    [BasedOnRow(typeof(Entities.MovieCastRow), CheckNames = true)]
    public class MovieCastColumns
    {

        /*
         [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MovieCastId { get; set; }
        public String MovieTitle { get; set; }
        public String PersonFirstname { get; set; }
        [EditLink]
        public String Character { get; set; }
        */

        [EditLink, Width(220)]
        [DisplayName("Actor")]
        public String PersonFullname { get; set; }
        
        [EditLink, Width(150)]
        [DisplayName("Personaje")]
        public String Character { get; set; }
    }
}