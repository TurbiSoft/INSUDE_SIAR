using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Columns
{
    [ColumnsScript("INSUDE.Materias")]
    [BasedOnRow(typeof(Entities.MateriasRow), CheckNames = true)]
    public class MateriasColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdMateria { get; set; }
        public String IdEscuelaNombre { get; set; }
        [EditLink]
        public String Codigo { get; set; }
        public String Nombre { get; set; }
        public String Estado { get; set; }
        public String CreateUser { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime LastUpdatedAt { get; set; }
    }
}