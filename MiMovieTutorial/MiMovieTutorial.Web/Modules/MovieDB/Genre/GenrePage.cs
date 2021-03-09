using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace MiMovieTutorial.MovieDB.Pages
{

    [PageAuthorize(typeof(Entities.GenreRow))]
    public class GenreController : Controller
    {
        [Route("MovieDB/Genre")]
        public ActionResult Index()
        {
            return View("~/Modules/MovieDB/Genre/GenreIndex.cshtml");
        }
    }
}