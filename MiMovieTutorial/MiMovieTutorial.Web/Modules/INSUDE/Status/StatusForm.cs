using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Forms
{
    [FormScript("INSUDE.Status")]
    [BasedOnRow(typeof(Entities.StatusRow), CheckNames = true)]
    public class StatusForm
    {
        public String NomStatus { get; set; }
    }
}