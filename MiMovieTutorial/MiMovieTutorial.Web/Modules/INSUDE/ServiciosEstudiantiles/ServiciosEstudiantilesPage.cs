using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace MiMovieTutorial.INSUDE.Pages
{

    [PageAuthorize(typeof(Entities.ServiciosEstudiantilesRow))]
    public class ServiciosEstudiantilesController : Controller
    {
        [Route("INSUDE/ServiciosEstudiantiles")]
        public ActionResult Index()
        {
            return View("~/Modules/INSUDE/ServiciosEstudiantiles/ServiciosEstudiantilesIndex.cshtml");
        }
    }
}