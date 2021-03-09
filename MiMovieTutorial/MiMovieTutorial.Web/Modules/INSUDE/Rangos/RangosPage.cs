using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace MiMovieTutorial.INSUDE.Pages
{

    [PageAuthorize(typeof(Entities.RangosRow))]
    public class RangosController : Controller
    {
        [Route("INSUDE/Rangos")]
        public ActionResult Index()
        {
            return View("~/Modules/INSUDE/Rangos/RangosIndex.cshtml");
        }
    }
}