using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace MiMovieTutorial.INSUDE.Pages
{

    [PageAuthorize(typeof(Entities.PaisRow))]
    public class PaisController : Controller
    {
        [Route("INSUDE/Pais")]
        public ActionResult Index()
        {
            return View("~/Modules/INSUDE/Pais/PaisIndex.cshtml");
        }
    }
}