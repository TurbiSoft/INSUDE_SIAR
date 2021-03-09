using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace MiMovieTutorial.INSUDE.Pages
{

    [PageAuthorize(typeof(Entities.NacionalidadRow))]
    public class NacionalidadController : Controller
    {
        [Route("INSUDE/Nacionalidad")]
        public ActionResult Index()
        {
            return View("~/Modules/INSUDE/Nacionalidad/NacionalidadIndex.cshtml");
        }
    }
}