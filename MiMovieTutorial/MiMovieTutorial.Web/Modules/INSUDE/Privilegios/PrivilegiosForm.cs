using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Forms
{
    [FormScript("INSUDE.Privilegios")]
    [BasedOnRow(typeof(Entities.PrivilegiosRow), CheckNames = true)]
    public class PrivilegiosForm
    {
        public String Rol { get; set; }
        public String TipoUsuario { get; set; }
        public String Descripcion { get; set; }
        public String CreateUser { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime LastUpdatedAt { get; set; }
    }
}