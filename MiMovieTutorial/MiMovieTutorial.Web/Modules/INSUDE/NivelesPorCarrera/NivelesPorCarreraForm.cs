using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Forms
{
    [FormScript("INSUDE.NivelesPorCarrera")]
    [BasedOnRow(typeof(Entities.NivelesPorCarreraRow), CheckNames = true)]
    public class NivelesPorCarreraForm
    {
        public Int32 IdTitulo { get; set; }
        public String Nombre { get; set; }
        public Int16 Orden { get; set; }
        public Int32 IdTipoCalificacion { get; set; }
        public DateTime CreateDate { get; set; }
        public String CreateUser { get; set; }
    }
}