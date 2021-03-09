using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MiMovieTutorial.Web.Modules.MovieDB.Movie
{
    using Serenity.Services;
    using System.Collections.Generic;

    public class MovieListRequest : ListRequest
    {
        public List<int> Genres { get; set; }
    }
}
