using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace MiMovieTutorial.INSUDE.Pages
{

    [PageAuthorize(typeof(Entities.TipoDeCalificacionRow))]
    public class TipoDeCalificacionController : Controller
    {
        [Route("INSUDE/TipoDeCalificacion")]
        public ActionResult Index()
        {
            return View("~/Modules/INSUDE/TipoDeCalificacion/TipoDeCalificacionIndex.cshtml");
        }
    }
}