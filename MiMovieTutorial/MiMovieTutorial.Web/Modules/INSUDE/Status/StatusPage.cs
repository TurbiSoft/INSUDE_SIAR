using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace MiMovieTutorial.INSUDE.Pages
{

    [PageAuthorize(typeof(Entities.StatusRow))]
    public class StatusController : Controller
    {
        [Route("INSUDE/Status")]
        public ActionResult Index()
        {
            return View("~/Modules/INSUDE/Status/StatusIndex.cshtml");
        }
    }
}