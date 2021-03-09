/**********************************************************************
* 07 - 03 - 2021 Agregue combo de compania, quite campos usario y fecha
 * de Creacion del formulario de Edicion. Puse por defecto el usuario 
 * en logueado y fecha del dia. Los quito de la edicion
 *******************************************************************/
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Forms
{
    [FormScript("INSUDE.Escuelas")]
    [BasedOnRow(typeof(Entities.EscuelasRow), CheckNames = true)]
    public class EscuelasForm
    {
        [DisplayName("Facultad")]
        public Int32 IdInstitucion { get; set; }
        public String Nombre { get; set; }
        public String Siglas { get; set; }

        [DisplayName("Dirección")]
        public String Direccion { get; set; }

        [DisplayName("Teléfono")]
        public String Telefono { get; set; }
        public String Contacto { get; set; }
        public String Estado { get; set; }
        /*
        public String CreateUser { get; set; }
        public DateTime CreateDate { get; set; }
        */
    }
}