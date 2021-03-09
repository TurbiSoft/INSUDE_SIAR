using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace MiMovieTutorial.INSUDE.Pages
{

    [PageAuthorize(typeof(Entities.InstructoresRow))]
    public class InstructoresController : Controller
    {
        [Route("INSUDE/Instructores")]
        public ActionResult Index()
        {
            return View("~/Modules/INSUDE/Instructores/InstructoresIndex.cshtml");
        }
    }
}