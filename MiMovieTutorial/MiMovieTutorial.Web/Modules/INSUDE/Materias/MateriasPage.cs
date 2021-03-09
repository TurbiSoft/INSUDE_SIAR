using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace MiMovieTutorial.INSUDE.Pages
{

    [PageAuthorize(typeof(Entities.MateriasRow))]
    public class MateriasController : Controller
    {
        [Route("INSUDE/Materias")]
        public ActionResult Index()
        {
            return View("~/Modules/INSUDE/Materias/MateriasIndex.cshtml");
        }
    }
}