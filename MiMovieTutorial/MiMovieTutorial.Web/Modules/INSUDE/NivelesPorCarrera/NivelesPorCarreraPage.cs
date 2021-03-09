using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace MiMovieTutorial.INSUDE.Pages
{

    [PageAuthorize(typeof(Entities.NivelesPorCarreraRow))]
    public class NivelesPorCarreraController : Controller
    {
        [Route("INSUDE/NivelesPorCarrera")]
        public ActionResult Index()
        {
            return View("~/Modules/INSUDE/NivelesPorCarrera/NivelesPorCarreraIndex.cshtml");
        }
    }
}