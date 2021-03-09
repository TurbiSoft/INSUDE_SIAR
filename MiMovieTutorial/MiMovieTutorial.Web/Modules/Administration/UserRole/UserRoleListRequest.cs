using Serenity.Services;

namespace MiMovieTutorial.Administration
{
    public class UserRoleListRequest : ServiceRequest
    {
        public int? UserID { get; set; }
    }
}