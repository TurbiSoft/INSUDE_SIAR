using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace MiMovieTutorial.INSUDE.Pages
{

    [PageAuthorize(typeof(Entities.PensumRow))]
    public class PensumController : Controller
    {
        [Route("INSUDE/Pensum")]
        public ActionResult Index()
        {
            return View("~/Modules/INSUDE/Pensum/PensumIndex.cshtml");
        }
    }
}