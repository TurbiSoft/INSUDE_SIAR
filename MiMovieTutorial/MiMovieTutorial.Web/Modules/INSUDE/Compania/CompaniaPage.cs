using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace MiMovieTutorial.INSUDE.Pages
{

    [PageAuthorize(typeof(Entities.CompaniaRow))]
    public class CompaniaController : Controller
    {
        [Route("INSUDE/Compania")]
        public ActionResult Index()
        {
            return View("~/Modules/INSUDE/Compania/CompaniaIndex.cshtml");
        }
    }
}