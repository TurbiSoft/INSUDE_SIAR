using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace MiMovieTutorial.INSUDE.Pages
{

    [PageAuthorize(typeof(Entities.EstadocivilRow))]
    public class EstadocivilController : Controller
    {
        [Route("INSUDE/Estadocivil")]
        public ActionResult Index()
        {
            return View("~/Modules/INSUDE/Estadocivil/EstadocivilIndex.cshtml");
        }
    }
}