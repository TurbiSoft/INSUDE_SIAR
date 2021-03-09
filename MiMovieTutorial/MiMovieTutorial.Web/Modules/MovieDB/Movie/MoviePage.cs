using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace MiMovieTutorial.MovieDB.Pages
{

    [PageAuthorize(typeof(Entities.MovieRow))]
    public class MovieController : Controller
    {
        [Route("MovieDB/Movie")]
        public ActionResult Index()
        {
            return View("~/Modules/MovieDB/Movie/MovieIndex.cshtml");
        }
    }
}