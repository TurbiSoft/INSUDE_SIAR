using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Columns
{
    [ColumnsScript("INSUDE.Privilegios")]
    [BasedOnRow(typeof(Entities.PrivilegiosRow), CheckNames = true)]
    public class PrivilegiosColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdRol { get; set; }
        [EditLink]
        public String Rol { get; set; }
        public String TipoUsuario { get; set; }
        public String Descripcion { get; set; }
        public String CreateUser { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime LastUpdatedAt { get; set; }
    }
}