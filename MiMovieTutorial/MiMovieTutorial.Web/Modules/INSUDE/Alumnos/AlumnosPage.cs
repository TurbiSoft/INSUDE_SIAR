using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace MiMovieTutorial.INSUDE.Pages
{

    [PageAuthorize(typeof(Entities.AlumnosRow))]
    public class AlumnosController : Controller
    {
        [Route("INSUDE/Alumnos")]
        public ActionResult Index()
        {
            return View("~/Modules/INSUDE/Alumnos/AlumnosIndex.cshtml");
        }
    }
}