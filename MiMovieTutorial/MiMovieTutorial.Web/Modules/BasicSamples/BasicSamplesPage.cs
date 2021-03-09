using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace MiMovieTutorial.BasicSamples.Pages
{
    [PageAuthorize, Route("BasicSamples/[action]")]
    public partial class BasicSamplesController : Controller
    {
    }
}
