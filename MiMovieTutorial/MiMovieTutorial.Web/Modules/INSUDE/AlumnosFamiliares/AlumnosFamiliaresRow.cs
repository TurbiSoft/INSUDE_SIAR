using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace MiMovieTutorial.INSUDE.Entities
{
    [ConnectionKey("campusdata"), Module("INSUDE"), TableName("[dbo].[AlumnosFamiliares]")]
    [DisplayName("Alumnos Familiares"), InstanceName("Alumnos Familiares")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class AlumnosFamiliaresRow : Row<AlumnosFamiliaresRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id Alumno Familiar"), Column("IDAlumnoFamiliar"), Identity, IdProperty]
        public Int32? IdAlumnoFamiliar
        {
            get => fields.IdAlumnoFamiliar[this];
            set => fields.IdAlumnoFamiliar[this] = value;
        }

        [DisplayName("Id Alumno"), Column("IDAlumno"), ForeignKey("[dbo].[Alumnos]", "IDAlumno"), LeftJoin("jIdAlumno"), TextualField("IdAlumnoNombres")]
        public Int32? IdAlumno
        {
            get => fields.IdAlumno[this];
            set => fields.IdAlumno[this] = value;
        }

        [DisplayName("Parentesco"), Size(50), QuickSearch, NameProperty]
        public String Parentesco
        {
            get => fields.Parentesco[this];
            set => fields.Parentesco[this] = value;
        }

        [DisplayName("Nombres"), Size(150)]
        public String Nombres
        {
            get => fields.Nombres[this];
            set => fields.Nombres[this] = value;
        }

        [DisplayName("Telefono"), Size(20)]
        public String Telefono
        {
            get => fields.Telefono[this];
            set => fields.Telefono[this] = value;
        }

        [DisplayName("Create User"), Size(150)]
        public String CreateUser
        {
            get => fields.CreateUser[this];
            set => fields.CreateUser[this] = value;
        }

        [DisplayName("Create Date")]
        public DateTime? CreateDate
        {
            get => fields.CreateDate[this];
            set => fields.CreateDate[this] = value;
        }

        [DisplayName("Id Alumno Nombres"), Expression("jIdAlumno.[Nombres]")]
        public String IdAlumnoNombres
        {
            get => fields.IdAlumnoNombres[this];
            set => fields.IdAlumnoNombres[this] = value;
        }

        [DisplayName("Id Alumno Apellidos"), Expression("jIdAlumno.[Apellidos]")]
        public String IdAlumnoApellidos
        {
            get => fields.IdAlumnoApellidos[this];
            set => fields.IdAlumnoApellidos[this] = value;
        }

        [DisplayName("Id Alumno Sexo"), Expression("jIdAlumno.[Sexo]")]
        public String IdAlumnoSexo
        {
            get => fields.IdAlumnoSexo[this];
            set => fields.IdAlumnoSexo[this] = value;
        }

        [DisplayName("Id Alumno Matricula"), Expression("jIdAlumno.[Matricula]")]
        public String IdAlumnoMatricula
        {
            get => fields.IdAlumnoMatricula[this];
            set => fields.IdAlumnoMatricula[this] = value;
        }

        [DisplayName("Id Alumno Fecha Nacimiento"), Expression("jIdAlumno.[FechaNacimiento]")]
        public DateTime? IdAlumnoFechaNacimiento
        {
            get => fields.IdAlumnoFechaNacimiento[this];
            set => fields.IdAlumnoFechaNacimiento[this] = value;
        }

        [DisplayName("Id Alumno Lugar Nacimiento"), Expression("jIdAlumno.[LugarNacimiento]")]
        public String IdAlumnoLugarNacimiento
        {
            get => fields.IdAlumnoLugarNacimiento[this];
            set => fields.IdAlumnoLugarNacimiento[this] = value;
        }

        [DisplayName("Id Alumno Fecha Registro"), Expression("jIdAlumno.[FechaRegistro]")]
        public DateTime? IdAlumnoFechaRegistro
        {
            get => fields.IdAlumnoFechaRegistro[this];
            set => fields.IdAlumnoFechaRegistro[this] = value;
        }

        [DisplayName("Id Alumno Fecha Ingreso"), Expression("jIdAlumno.[FechaIngreso]")]
        public DateTime? IdAlumnoFechaIngreso
        {
            get => fields.IdAlumnoFechaIngreso[this];
            set => fields.IdAlumnoFechaIngreso[this] = value;
        }

        [DisplayName("Id Alumno Tipo Identificacion"), Expression("jIdAlumno.[TipoIdentificacion]")]
        public String IdAlumnoTipoIdentificacion
        {
            get => fields.IdAlumnoTipoIdentificacion[this];
            set => fields.IdAlumnoTipoIdentificacion[this] = value;
        }

        [DisplayName("Id Alumno Identificacion"), Expression("jIdAlumno.[Identificacion]")]
        public String IdAlumnoIdentificacion
        {
            get => fields.IdAlumnoIdentificacion[this];
            set => fields.IdAlumnoIdentificacion[this] = value;
        }

        [DisplayName("Id Alumno Estado Civil"), Expression("jIdAlumno.[EstadoCivil]")]
        public Int32? IdAlumnoEstadoCivil
        {
            get => fields.IdAlumnoEstadoCivil[this];
            set => fields.IdAlumnoEstadoCivil[this] = value;
        }

        [DisplayName("Id Alumno Correo Electronico"), Expression("jIdAlumno.[CorreoElectronico]")]
        public String IdAlumnoCorreoElectronico
        {
            get => fields.IdAlumnoCorreoElectronico[this];
            set => fields.IdAlumnoCorreoElectronico[this] = value;
        }

        [DisplayName("Id Alumno Tel Hogar"), Expression("jIdAlumno.[TelHogar]")]
        public String IdAlumnoTelHogar
        {
            get => fields.IdAlumnoTelHogar[this];
            set => fields.IdAlumnoTelHogar[this] = value;
        }

        [DisplayName("Id Alumno Tel Celular"), Expression("jIdAlumno.[TelCelular]")]
        public String IdAlumnoTelCelular
        {
            get => fields.IdAlumnoTelCelular[this];
            set => fields.IdAlumnoTelCelular[this] = value;
        }

        [DisplayName("Id Alumno Observaciones"), Expression("jIdAlumno.[Observaciones]")]
        public String IdAlumnoObservaciones
        {
            get => fields.IdAlumnoObservaciones[this];
            set => fields.IdAlumnoObservaciones[this] = value;
        }

        [DisplayName("Id Alumno Tipo"), Expression("jIdAlumno.[Tipo]")]
        public String IdAlumnoTipo
        {
            get => fields.IdAlumnoTipo[this];
            set => fields.IdAlumnoTipo[this] = value;
        }

        [DisplayName("Id Alumno Direccion"), Expression("jIdAlumno.[Direccion]")]
        public String IdAlumnoDireccion
        {
            get => fields.IdAlumnoDireccion[this];
            set => fields.IdAlumnoDireccion[this] = value;
        }

        [DisplayName("Id Alumno Ciudad"), Expression("jIdAlumno.[Ciudad]")]
        public String IdAlumnoCiudad
        {
            get => fields.IdAlumnoCiudad[this];
            set => fields.IdAlumnoCiudad[this] = value;
        }

        [DisplayName("Id Alumno Id Pais"), Expression("jIdAlumno.[IDPais]")]
        public Int32? IdAlumnoIdPais
        {
            get => fields.IdAlumnoIdPais[this];
            set => fields.IdAlumnoIdPais[this] = value;
        }

        [DisplayName("Id Alumno Id Nacionalidad"), Expression("jIdAlumno.[IDNacionalidad]")]
        public Int32? IdAlumnoIdNacionalidad
        {
            get => fields.IdAlumnoIdNacionalidad[this];
            set => fields.IdAlumnoIdNacionalidad[this] = value;
        }

        [DisplayName("Id Alumno Id Usuario"), Expression("jIdAlumno.[IDUsuario]")]
        public Int32? IdAlumnoIdUsuario
        {
            get => fields.IdAlumnoIdUsuario[this];
            set => fields.IdAlumnoIdUsuario[this] = value;
        }

        [DisplayName("Id Alumno Direccion Oficina"), Expression("jIdAlumno.[DireccionOficina]")]
        public String IdAlumnoDireccionOficina
        {
            get => fields.IdAlumnoDireccionOficina[this];
            set => fields.IdAlumnoDireccionOficina[this] = value;
        }

        [DisplayName("Id Alumno Funcion"), Expression("jIdAlumno.[Funcion]")]
        public String IdAlumnoFuncion
        {
            get => fields.IdAlumnoFuncion[this];
            set => fields.IdAlumnoFuncion[this] = value;
        }

        [DisplayName("Id Alumno Id Institucion"), Expression("jIdAlumno.[IDInstitucion]")]
        public Int32? IdAlumnoIdInstitucion
        {
            get => fields.IdAlumnoIdInstitucion[this];
            set => fields.IdAlumnoIdInstitucion[this] = value;
        }

        [DisplayName("Id Alumno Id Rango"), Expression("jIdAlumno.[IDRango]")]
        public Int32? IdAlumnoIdRango
        {
            get => fields.IdAlumnoIdRango[this];
            set => fields.IdAlumnoIdRango[this] = value;
        }

        [DisplayName("Id Alumno Id Dependencia"), Expression("jIdAlumno.[IDDependencia]")]
        public Int32? IdAlumnoIdDependencia
        {
            get => fields.IdAlumnoIdDependencia[this];
            set => fields.IdAlumnoIdDependencia[this] = value;
        }

        [DisplayName("Id Alumno Tel Oficina"), Expression("jIdAlumno.[TelOficina]")]
        public String IdAlumnoTelOficina
        {
            get => fields.IdAlumnoTelOficina[this];
            set => fields.IdAlumnoTelOficina[this] = value;
        }

        [DisplayName("Id Alumno Dp Matricula"), Expression("jIdAlumno.[DPMatricula]")]
        public String IdAlumnoDpMatricula
        {
            get => fields.IdAlumnoDpMatricula[this];
            set => fields.IdAlumnoDpMatricula[this] = value;
        }

        [DisplayName("Id Alumno Ec Matricula"), Expression("jIdAlumno.[ECMatricula]")]
        public String IdAlumnoEcMatricula
        {
            get => fields.IdAlumnoEcMatricula[this];
            set => fields.IdAlumnoEcMatricula[this] = value;
        }

        [DisplayName("Id Alumno Estado"), Expression("jIdAlumno.[Estado]")]
        public String IdAlumnoEstado
        {
            get => fields.IdAlumnoEstado[this];
            set => fields.IdAlumnoEstado[this] = value;
        }

        [DisplayName("Id Alumno Create Date"), Expression("jIdAlumno.[CreateDate]")]
        public DateTime? IdAlumnoCreateDate
        {
            get => fields.IdAlumnoCreateDate[this];
            set => fields.IdAlumnoCreateDate[this] = value;
        }

        [DisplayName("Id Alumno Create User"), Expression("jIdAlumno.[CreateUser]")]
        public String IdAlumnoCreateUser
        {
            get => fields.IdAlumnoCreateUser[this];
            set => fields.IdAlumnoCreateUser[this] = value;
        }

        [DisplayName("Id Alumno Last Updated At"), Expression("jIdAlumno.[LastUpdatedAt]")]
        public DateTime? IdAlumnoLastUpdatedAt
        {
            get => fields.IdAlumnoLastUpdatedAt[this];
            set => fields.IdAlumnoLastUpdatedAt[this] = value;
        }

        public AlumnosFamiliaresRow()
            : base()
        {
        }

        public AlumnosFamiliaresRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdAlumnoFamiliar;
            public Int32Field IdAlumno;
            public StringField Parentesco;
            public StringField Nombres;
            public StringField Telefono;
            public StringField CreateUser;
            public DateTimeField CreateDate;

            public StringField IdAlumnoNombres;
            public StringField IdAlumnoApellidos;
            public StringField IdAlumnoSexo;
            public StringField IdAlumnoMatricula;
            public DateTimeField IdAlumnoFechaNacimiento;
            public StringField IdAlumnoLugarNacimiento;
            public DateTimeField IdAlumnoFechaRegistro;
            public DateTimeField IdAlumnoFechaIngreso;
            public StringField IdAlumnoTipoIdentificacion;
            public StringField IdAlumnoIdentificacion;
            public Int32Field IdAlumnoEstadoCivil;
            public StringField IdAlumnoCorreoElectronico;
            public StringField IdAlumnoTelHogar;
            public StringField IdAlumnoTelCelular;
            public StringField IdAlumnoObservaciones;
            public StringField IdAlumnoTipo;
            public StringField IdAlumnoDireccion;
            public StringField IdAlumnoCiudad;
            public Int32Field IdAlumnoIdPais;
            public Int32Field IdAlumnoIdNacionalidad;
            public Int32Field IdAlumnoIdUsuario;
            public StringField IdAlumnoDireccionOficina;
            public StringField IdAlumnoFuncion;
            public Int32Field IdAlumnoIdInstitucion;
            public Int32Field IdAlumnoIdRango;
            public Int32Field IdAlumnoIdDependencia;
            public StringField IdAlumnoTelOficina;
            public StringField IdAlumnoDpMatricula;
            public StringField IdAlumnoEcMatricula;
            public StringField IdAlumnoEstado;
            public DateTimeField IdAlumnoCreateDate;
            public StringField IdAlumnoCreateUser;
            public DateTimeField IdAlumnoLastUpdatedAt;
        }
    }
}
