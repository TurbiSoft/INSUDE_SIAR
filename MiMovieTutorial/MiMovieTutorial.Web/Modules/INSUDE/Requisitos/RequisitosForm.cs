using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Forms
{
    [FormScript("INSUDE.Requisitos")]
    [BasedOnRow(typeof(Entities.RequisitosRow), CheckNames = true)]
    public class RequisitosForm
    {
        public String Nombre { get; set; }
        public String CreateUser { get; set; }
        public DateTime CreateDate { get; set; }
    }
}