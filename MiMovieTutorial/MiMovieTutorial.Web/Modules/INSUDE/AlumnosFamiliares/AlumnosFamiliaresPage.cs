using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace MiMovieTutorial.INSUDE.Pages
{

    [PageAuthorize(typeof(Entities.AlumnosFamiliaresRow))]
    public class AlumnosFamiliaresController : Controller
    {
        [Route("INSUDE/AlumnosFamiliares")]
        public ActionResult Index()
        {
            return View("~/Modules/INSUDE/AlumnosFamiliares/AlumnosFamiliaresIndex.cshtml");
        }
    }
}