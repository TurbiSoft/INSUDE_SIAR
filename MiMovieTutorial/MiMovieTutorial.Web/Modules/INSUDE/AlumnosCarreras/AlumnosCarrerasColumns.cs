using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Columns
{
    [ColumnsScript("INSUDE.AlumnosCarreras")]
    [BasedOnRow(typeof(Entities.AlumnosCarrerasRow), CheckNames = true)]
    public class AlumnosCarrerasColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdAlumnoCarrera { get; set; }
        public String IdAlumnoNombres { get; set; }
        public String IdTituloCodigo { get; set; }
        public String IdPensumCodigo { get; set; }
        public Int32 IdTituloNivel { get; set; }
        [EditLink]
        public String NoRegistro { get; set; }
        public DateTime Fecha { get; set; }
        public String Becado { get; set; }
        public DateTime FechaGraduacion { get; set; }
        public String IdPromocionDescripcion { get; set; }
        public String Promocion { get; set; }
        public Int32 Libro { get; set; }
        public Int32 Folio { get; set; }
        public Int32 Numero { get; set; }
        public String Estado { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime LastUpdatedAt { get; set; }
    }
}