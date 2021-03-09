using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace MultiTenancy.Northwind.Pages
{
    [PageAuthorize(typeof(Entities.CategoryRow))]
    public class CategoryController : Controller
    {
        [Route("Northwind/Category")]
        public ActionResult Index()
        {
            return View(MVC.Views.Northwind.Category.CategoryIndex);
        }
    }
}
