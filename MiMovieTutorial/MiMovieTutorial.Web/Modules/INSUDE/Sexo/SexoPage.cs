using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace MiMovieTutorial.INSUDE.Pages
{

    [PageAuthorize(typeof(Entities.SexoRow))]
    public class SexoController : Controller
    {
        [Route("INSUDE/Sexo")]
        public ActionResult Index()
        {
            return View("~/Modules/INSUDE/Sexo/SexoIndex.cshtml");
        }
    }
}