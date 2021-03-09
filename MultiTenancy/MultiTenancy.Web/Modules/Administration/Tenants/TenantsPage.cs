using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace MultiTenancy.Administration.Pages
{

    [PageAuthorize(typeof(Entities.TenantsRow))]
    public class TenantsController : Controller
    {
        [Route("Administration/Tenants")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/Tenants/TenantsIndex.cshtml");
        }
    }
}