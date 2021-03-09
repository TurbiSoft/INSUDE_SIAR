using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Columns
{
    [ColumnsScript("INSUDE.AlumnosFamiliares")]
    [BasedOnRow(typeof(Entities.AlumnosFamiliaresRow), CheckNames = true)]
    public class AlumnosFamiliaresColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdAlumnoFamiliar { get; set; }
        public String IdAlumnoNombres { get; set; }
        [EditLink]
        public String Parentesco { get; set; }
        public String Nombres { get; set; }
        public String Telefono { get; set; }
        public String CreateUser { get; set; }
        public DateTime CreateDate { get; set; }
    }
}