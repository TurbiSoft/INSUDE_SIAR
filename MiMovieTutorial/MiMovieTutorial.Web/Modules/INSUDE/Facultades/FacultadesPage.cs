using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace MiMovieTutorial.INSUDE.Pages
{

    [PageAuthorize(typeof(Entities.FacultadesRow))]
    public class FacultadesController : Controller
    {
        [Route("INSUDE/Facultades")]
        public ActionResult Index()
        {
            return View("~/Modules/INSUDE/Facultades/FacultadesIndex.cshtml");
        }
    }
}