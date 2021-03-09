using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace MiMovieTutorial.INSUDE.Pages
{

    [PageAuthorize(typeof(Entities.TitulosRow))]
    public class TitulosController : Controller
    {
        [Route("INSUDE/Titulos")]
        public ActionResult Index()
        {
            return View("~/Modules/INSUDE/Titulos/TitulosIndex.cshtml");
        }
    }
}