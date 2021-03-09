using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Forms
{
    [FormScript("INSUDE.ServiciosEstudiantiles")]
    [BasedOnRow(typeof(Entities.ServiciosEstudiantilesRow), CheckNames = true)]
    public class ServiciosEstudiantilesForm
    {
        public String Descripcion { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime LastUpdatedAt { get; set; }
        public String CreateUser { get; set; }
    }
}