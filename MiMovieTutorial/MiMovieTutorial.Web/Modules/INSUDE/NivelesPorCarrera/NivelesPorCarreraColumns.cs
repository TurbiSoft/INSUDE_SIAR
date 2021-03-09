using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Columns
{
    [ColumnsScript("INSUDE.NivelesPorCarrera")]
    [BasedOnRow(typeof(Entities.NivelesPorCarreraRow), CheckNames = true)]
    public class NivelesPorCarreraColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdTituloNivel { get; set; }
        public String IdTituloCodigo { get; set; }
        [EditLink]
        public String Nombre { get; set; }
        public Int16 Orden { get; set; }
        public String IdTipoCalificacionNombre { get; set; }
        public DateTime CreateDate { get; set; }
        public String CreateUser { get; set; }
    }
}