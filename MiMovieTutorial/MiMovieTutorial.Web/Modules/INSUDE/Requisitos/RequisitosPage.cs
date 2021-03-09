using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace MiMovieTutorial.INSUDE.Pages
{

    [PageAuthorize(typeof(Entities.RequisitosRow))]
    public class RequisitosController : Controller
    {
        [Route("INSUDE/Requisitos")]
        public ActionResult Index()
        {
            return View("~/Modules/INSUDE/Requisitos/RequisitosIndex.cshtml");
        }
    }
}