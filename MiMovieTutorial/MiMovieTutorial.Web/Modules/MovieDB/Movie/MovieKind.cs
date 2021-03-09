using Serenity.ComponentModel;
using System.ComponentModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MiMovieTutorial.Web.Modules.MovieDB.Movie
{
        [EnumKey("MovieDB.MovieKind")]
        public enum MovieKind
        {
            [Description("Film")]
            Film = 1,
            [Description("TV Series")]
            TvSeries = 2,
            [Description("Mini Series")]
            MiniSeries = 3
        }    
}
