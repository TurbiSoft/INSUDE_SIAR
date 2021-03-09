using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace MiMovieTutorial.INSUDE.Pages
{

    [PageAuthorize(typeof(Entities.EscuelasRow))]
    public class EscuelasController : Controller
    {
        [Route("INSUDE/Escuelas")]
        public ActionResult Index()
        {
            return View("~/Modules/INSUDE/Escuelas/EscuelasIndex.cshtml");
        }
    }
}