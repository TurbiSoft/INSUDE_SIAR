using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace MiMovieTutorial.INSUDE.Pages
{

    [PageAuthorize(typeof(Entities.IndicesRow))]
    public class IndicesController : Controller
    {
        [Route("INSUDE/Indices")]
        public ActionResult Index()
        {
            return View("~/Modules/INSUDE/Indices/IndicesIndex.cshtml");
        }
    }
}