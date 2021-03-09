using Serenity.Services;

namespace MultiTenancy.Administration
{
    public class UserRoleListRequest : ServiceRequest
    {
        public int? UserID { get; set; }
    }
}