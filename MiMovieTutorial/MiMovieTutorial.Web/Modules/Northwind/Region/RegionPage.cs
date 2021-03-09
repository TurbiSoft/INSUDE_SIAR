using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace MiMovieTutorial.Northwind.Pages
{
    [PageAuthorize(typeof(Entities.RegionRow))]
    public class RegionController : Controller
    {
        [Route("Northwind/Region")]
        public ActionResult Index()
        {
            return View(MVC.Views.Northwind.Region.RegionIndex);
        }
    }
}
