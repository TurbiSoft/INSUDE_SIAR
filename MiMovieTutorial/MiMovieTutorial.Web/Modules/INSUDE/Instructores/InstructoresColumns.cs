using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Columns
{
    [ColumnsScript("INSUDE.Instructores")]
    [BasedOnRow(typeof(Entities.InstructoresRow), CheckNames = true)]
    public class InstructoresColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdInstructor { get; set; }
        [EditLink]
        public String Codigo { get; set; }
        public String Nombres { get; set; }
        public String Telefono { get; set; }
        public String NivelAcademico { get; set; }
        public Int32 IdUsuario { get; set; }
        public String Estado { get; set; }
        public String CreateUser { get; set; }
        public DateTime CreateDate { get; set; }
        public String Identificacion { get; set; }
        public String TipoIdentificacion { get; set; }
        public DateTime LastUpdatedAt { get; set; }
        public DateTime FechaIngreso { get; set; }
        public String CorreoElectronico { get; set; }
        public String Sexo { get; set; }
    }
}