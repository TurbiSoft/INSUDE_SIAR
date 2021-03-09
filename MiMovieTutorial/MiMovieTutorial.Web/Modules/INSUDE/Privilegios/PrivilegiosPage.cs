using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace MiMovieTutorial.INSUDE.Pages
{

    [PageAuthorize(typeof(Entities.PrivilegiosRow))]
    public class PrivilegiosController : Controller
    {
        [Route("INSUDE/Privilegios")]
        public ActionResult Index()
        {
            return View("~/Modules/INSUDE/Privilegios/PrivilegiosIndex.cshtml");
        }
    }
}