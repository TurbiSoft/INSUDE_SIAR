using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace MiMovieTutorial.INSUDE.Pages
{

    [PageAuthorize(typeof(Entities.MproductRow))]
    public class MproductController : Controller
    {
        [Route("INSUDE/Mproduct")]
        public ActionResult Index()
        {
            return View("~/Modules/INSUDE/Mproduct/MproductIndex.cshtml");
        }
    }
}