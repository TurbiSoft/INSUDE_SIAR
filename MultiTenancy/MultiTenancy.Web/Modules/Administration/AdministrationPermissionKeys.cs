
using Serenity.ComponentModel;
using System.ComponentModel;

namespace MultiTenancy.Administration
{
    [NestedPermissionKeys]
    [DisplayName("Administration")]
    public class PermissionKeys
    {
        [Description("User, Role Management and Permissions")]
        public const string Security = "Administration:Security";

        [Description("Languages and Translations")]
        public const string Translation = "Administration:Translation";

        [Description("Empresa/Sucursal")]
        public const string Tenants = "Administration:Tenants";
    }
}
