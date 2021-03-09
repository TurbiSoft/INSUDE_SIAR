using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace MiMovieTutorial.INSUDE.Pages
{

    [PageAuthorize(typeof(Entities.PromocionesRow))]
    public class PromocionesController : Controller
    {
        [Route("INSUDE/Promociones")]
        public ActionResult Index()
        {
            return View("~/Modules/INSUDE/Promociones/PromocionesIndex.cshtml");
        }
    }
}