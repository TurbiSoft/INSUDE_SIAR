using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Forms
{
    [FormScript("INSUDE.Alumnos")]
    [BasedOnRow(typeof(Entities.AlumnosRow), CheckNames = true)]
    public class AlumnosForm
    {
        public String Nombres { get; set; }
        public String Apellidos { get; set; }
        public String Sexo { get; set; }
        public String Matricula { get; set; }
        public Int32 IdRango { get; set; }
        public String TipoIdentificacion { get; set; }
        public String Identificacion { get; set; }
        public String EstadoCivil { get; set; }
        public Int32 IdPais { get; set; }
        public Int32 IdNacionalidad { get; set; }
        public Int32 IdInstitucion { get; set; }
        public Int32 IdDependencia { get; set; }

        // Este campo lo agregue manual, como una lsita de Carreras
        // de la Tabla AlumnosCarreras
        [DisplayName("Carreras")]
        public List<Int32> lstCarreras { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public String LugarNacimiento { get; set; }
        public DateTime FechaRegistro { get; set; }
        public DateTime FechaIngreso { get; set; }              
        public String CorreoElectronico { get; set; }
        public String TelHogar { get; set; }
        public String TelCelular { get; set; }
        public String Observaciones { get; set; }
        public String Tipo { get; set; }
        public String Direccion { get; set; }
        public String Ciudad { get; set; }
        public Int32 IdUsuario { get; set; }
        public String DireccionOficina { get; set; }
        public String Funcion { get; set; }
        public String TelOficina { get; set; }
        public String DpMatricula { get; set; }
        public String EcMatricula { get; set; }
        public String Estado { get; set; }

        /*  Estos campos los debe actualziar el Sistema automaticamente        
        public DateTime CreateDate { get; set; }
        public String CreateUser { get; set; }
        public DateTime LastUpdatedAt { get; set; }
        */

    }
}