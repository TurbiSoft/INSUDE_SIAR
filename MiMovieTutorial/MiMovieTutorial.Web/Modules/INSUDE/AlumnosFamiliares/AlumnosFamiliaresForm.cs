using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Forms
{
    [FormScript("INSUDE.AlumnosFamiliares")]
    [BasedOnRow(typeof(Entities.AlumnosFamiliaresRow), CheckNames = true)]
    public class AlumnosFamiliaresForm
    {
        public Int32 IdAlumno { get; set; }
        public String Parentesco { get; set; }
        public String Nombres { get; set; }
        public String Telefono { get; set; }
        public String CreateUser { get; set; }
        public DateTime CreateDate { get; set; }
    }
}