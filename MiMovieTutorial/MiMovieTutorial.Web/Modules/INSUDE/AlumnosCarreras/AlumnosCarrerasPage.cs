using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace MiMovieTutorial.INSUDE.Pages
{

    [PageAuthorize(typeof(Entities.AlumnosCarrerasRow))]
    public class AlumnosCarrerasController : Controller
    {
        [Route("INSUDE/AlumnosCarreras")]
        public ActionResult Index()
        {
            return View("~/Modules/INSUDE/AlumnosCarreras/AlumnosCarrerasIndex.cshtml");
        }
    }
}