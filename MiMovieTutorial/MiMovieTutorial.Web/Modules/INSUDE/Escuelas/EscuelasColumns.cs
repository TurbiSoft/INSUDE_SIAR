using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Columns
{
    [ColumnsScript("INSUDE.Escuelas")]
    [BasedOnRow(typeof(Entities.EscuelasRow), CheckNames = true)]
    public class EscuelasColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdEscuela { get; set; }
        public String IdInstitucionNombre { get; set; }
        [EditLink]
        public String Nombre { get; set; }
        public String Siglas { get; set; }
        public String Direccion { get; set; }
        public String Telefono { get; set; }
        public String Contacto { get; set; }
        public String Estado { get; set; }
        public String CreateUser { get; set; }
        public DateTime CreateDate { get; set; }
    }
}