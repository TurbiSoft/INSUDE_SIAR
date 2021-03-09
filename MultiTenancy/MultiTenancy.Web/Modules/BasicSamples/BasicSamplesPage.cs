using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace MultiTenancy.BasicSamples.Pages
{
    [PageAuthorize, Route("BasicSamples/[action]")]
    public partial class BasicSamplesController : Controller
    {
    }
}
