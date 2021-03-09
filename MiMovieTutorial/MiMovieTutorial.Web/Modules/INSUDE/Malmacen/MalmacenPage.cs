using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace MiMovieTutorial.INSUDE.Pages
{

    [PageAuthorize(typeof(Entities.MalmacenRow))]
    public class MalmacenController : Controller
    {
        [Route("INSUDE/Malmacen")]
        public ActionResult Index()
        {
            return View("~/Modules/INSUDE/Malmacen/MalmacenIndex.cshtml");
        }
    }
}