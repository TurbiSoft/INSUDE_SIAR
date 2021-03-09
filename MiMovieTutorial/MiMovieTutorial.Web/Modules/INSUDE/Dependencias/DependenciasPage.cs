using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace MiMovieTutorial.INSUDE.Pages
{

    [PageAuthorize(typeof(Entities.DependenciasRow))]
    public class DependenciasController : Controller
    {
        [Route("INSUDE/Dependencias")]
        public ActionResult Index()
        {
            return View("~/Modules/INSUDE/Dependencias/DependenciasIndex.cshtml");
        }
    }
}