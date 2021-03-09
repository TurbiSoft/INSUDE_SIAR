using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Forms
{
    [FormScript("INSUDE.Rangos")]
    [BasedOnRow(typeof(Entities.RangosRow), CheckNames = true)]
    public class RangosForm
    {
        public String Nombre { get; set; }
    }
}