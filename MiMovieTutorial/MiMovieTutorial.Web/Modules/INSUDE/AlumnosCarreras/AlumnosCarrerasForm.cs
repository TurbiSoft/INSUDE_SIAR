using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Forms
{
    [FormScript("INSUDE.AlumnosCarreras")]
    [BasedOnRow(typeof(Entities.AlumnosCarrerasRow), CheckNames = true)]
    public class AlumnosCarrerasForm
    {
        public Int32 IdAlumno { get; set; }
        public Int32 IdTitulo { get; set; }
        public Int32 IdPensum { get; set; }
        public Int32 IdTituloNivel { get; set; }
        public String NoRegistro { get; set; }
        public DateTime Fecha { get; set; }
        public String Becado { get; set; }
        public DateTime FechaGraduacion { get; set; }
        public Int32 IdPromocion { get; set; }
        public String Promocion { get; set; }
        public Int32 Libro { get; set; }
        public Int32 Folio { get; set; }
        public Int32 Numero { get; set; }
        public String Estado { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime LastUpdatedAt { get; set; }
    }
}