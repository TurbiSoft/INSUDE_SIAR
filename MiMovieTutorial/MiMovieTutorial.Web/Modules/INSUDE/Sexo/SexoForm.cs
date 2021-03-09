using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Forms
{
    [FormScript("INSUDE.Sexo")]
    [BasedOnRow(typeof(Entities.SexoRow), CheckNames = true)]
    public class SexoForm
    {
        public String Nomsexo { get; set; }
    }
}