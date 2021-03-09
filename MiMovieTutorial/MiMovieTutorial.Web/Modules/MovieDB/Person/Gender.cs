using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Serenity.ComponentModel;
using System.ComponentModel;

namespace INSUDE_SIAR.Web.Modules.MovieDB
{
    [EnumKey("MovieDB.Gender")]
    public enum Gender
    {
        [Description("Masculino")]
        Male = 1,
        [Description("Femenino")]
        Female = 2,
        [Description("Gay")]
        Pajaro = 3
    }
}
