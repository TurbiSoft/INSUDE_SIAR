using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;

namespace MiMovieTutorial.INSUDE.Entities
{
    [ConnectionKey("campusdata"), Module("INSUDE"), TableName("[dbo].[Alumnos]")]
    [DisplayName("Alumnos"), InstanceName("Alumnos")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class AlumnosRow : Row<AlumnosRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id Alumno"), Column("IDAlumno"), Identity, IdProperty]
        public Int32? IdAlumno
        {
            get => fields.IdAlumno[this];
            set => fields.IdAlumno[this] = value;
        }

        [DisplayName("Nombres"), Size(150), NotNull, QuickSearch, NameProperty]
        public String Nombres
        {
            get => fields.Nombres[this];
            set => fields.Nombres[this] = value;
        }

        [DisplayName("Apellidos"), Size(150), NotNull]
        public String Apellidos
        {
            get => fields.Apellidos[this];
            set => fields.Apellidos[this] = value;
        }

        

        [DisplayName("Matricula"), Size(15)]
        public String Matricula
        {
            get => fields.Matricula[this];
            set => fields.Matricula[this] = value;
        }

        [DisplayName("Fecha Nacimiento"), NotNull]
        public DateTime? FechaNacimiento
        {
            get => fields.FechaNacimiento[this];
            set => fields.FechaNacimiento[this] = value;
        }

        [DisplayName("Lugar Nacimiento"), Size(200)]
        public String LugarNacimiento
        {
            get => fields.LugarNacimiento[this];
            set => fields.LugarNacimiento[this] = value;
        }

        [DisplayName("Fecha Registro")]
        public DateTime? FechaRegistro
        {
            get => fields.FechaRegistro[this];
            set => fields.FechaRegistro[this] = value;
        }

        [DisplayName("Fecha Ingreso")]
        public DateTime? FechaIngreso
        {
            get => fields.FechaIngreso[this];
            set => fields.FechaIngreso[this] = value;
        }

        [DisplayName("Tipo Identificacion"), Size(1)]
        public String TipoIdentificacion
        {
            get => fields.TipoIdentificacion[this];
            set => fields.TipoIdentificacion[this] = value;
        }

        [DisplayName("Identificacion"), Size(15)]
        public String Identificacion
        {
            get => fields.Identificacion[this];
            set => fields.Identificacion[this] = value;
        }

        [LookupEditor(typeof(EstadocivilRow))]
        [DisplayName("Estado Civil"), Size(1), Column("EstadoCivil"), NotNull, ForeignKey("[dbo].[EstadoCivil]", "CodEstado"), LeftJoin("jCodEstado"), TextualField("IdEstadoNombre")]
        public int? EstadoCivil
        {
            get => fields.EstadoCivil[this];
            set => fields.EstadoCivil[this] = value;
        }

        [DisplayName("Id Estado Civil Nombre"), Expression("jCodEstado.[NomEstado]")]      
        public String IdEstadoCivilNombre
        {
            get => fields.IdEstadoCivilNombre[this];
            set => fields.IdEstadoCivilNombre[this] = value;
        }


        [DisplayName("Correo Electronico"), Size(180)]
        public String CorreoElectronico
        {
            get => fields.CorreoElectronico[this];
            set => fields.CorreoElectronico[this] = value;
        }

        [DisplayName("Tel Hogar"), Size(15)]
        public String TelHogar
        {
            get => fields.TelHogar[this];
            set => fields.TelHogar[this] = value;
        }

        [DisplayName("Tel Celular"), Size(15)]
        public String TelCelular
        {
            get => fields.TelCelular[this];
            set => fields.TelCelular[this] = value;
        }

        [DisplayName("Observaciones")]
        public String Observaciones
        {
            get => fields.Observaciones[this];
            set => fields.Observaciones[this] = value;
        }

        [DisplayName("Tipo"), Size(50), NotNull]
        public String Tipo
        {
            get => fields.Tipo[this];
            set => fields.Tipo[this] = value;
        }

        [DisplayName("Direccion"), Size(200)]
        public String Direccion
        {
            get => fields.Direccion[this];
            set => fields.Direccion[this] = value;
        }

        [DisplayName("Ciudad"), Size(250)]
        public String Ciudad
        {
            get => fields.Ciudad[this];
            set => fields.Ciudad[this] = value;
        }

        [LookupEditor(typeof(SexoRow))]
        [DisplayName("Sexo"), Column("sexo"), Size(1), NotNull, ForeignKey("[dbo].[Sexo]", "codsexo"), LeftJoin("jsexo"), TextualField("IdSexoNombre")]
        public String Sexo
        {
            get => fields.Sexo[this];
            set => fields.Sexo[this] = value;
        }

        [DisplayName("Id Sexo Nombre"), Expression("jsexo.[Nomsexo]")]
        public String IdSexoNombre
        {
            get => fields.IdSexoNombre[this];
            set => fields.IdSexoNombre[this] = value;
        }

        [LookupEditor(typeof(PaisRow))]
        [DisplayName("Pais"), Column("IDPais"), NotNull, ForeignKey("[dbo].[Pais]", "IDPais"), LeftJoin("jIdPais"), TextualField("IdPaisNombre")]
        public Int32? IdPais
        {
            get => fields.IdPais[this];
            set => fields.IdPais[this] = value;
        }

        [DisplayName("Id Pais Nombre"), Expression("jIdPais.[Nombre]")]
        public String IdPaisNombre
        {
            get => fields.IdPaisNombre[this];
            set => fields.IdPaisNombre[this] = value;
        }

        [LookupEditor(typeof(NacionalidadRow))]
        [DisplayName("Nacionalidad"), Column("IDNacionalidad"), ForeignKey("[dbo].[Nacionalidad]", "IDNacionalidad"), LeftJoin("jIdNacionalidad"), TextualField("IdNacionalidadNombre")]
        public Int32? IdNacionalidad
        {
            get => fields.IdNacionalidad[this];
            set => fields.IdNacionalidad[this] = value;
        }


        [DisplayName("Id Nacionalidad Nombre"), Expression("jIdNacionalidad.[Nombre]")]
        public String IdNacionalidadNombre
        {
            get => fields.IdNacionalidadNombre[this];
            set => fields.IdNacionalidadNombre[this] = value;
        }


        [DisplayName("Id Usuario"), Column("IDUsuario")]
        public Int32? IdUsuario
        {
            get => fields.IdUsuario[this];
            set => fields.IdUsuario[this] = value;
        }

        [DisplayName("Direccion Oficina"), Size(250)]
        public String DireccionOficina
        {
            get => fields.DireccionOficina[this];
            set => fields.DireccionOficina[this] = value;
        }

        [DisplayName("Funcion"), Size(250)]
        public String Funcion
        {
            get => fields.Funcion[this];
            set => fields.Funcion[this] = value;
        }

        //[LookupEditor("INSUDE.Instituciones")]
        [LookupEditor(typeof(FacultadesRow))]
        [DisplayName("Institucion"), Column("IDInstitucion"), ForeignKey("[dbo].[Instituciones]", "IDInstitucion"), LeftJoin("jIdInstitucion"), TextualField("IdInstitucionNombre")]
        public Int32? IdInstitucion
        {
            get => fields.IdInstitucion[this];
            set => fields.IdInstitucion[this] = value;
        }

        [DisplayName("Id Institucion Nombre"), Expression("jIdInstitucion.[Nombre]")]
        public String IdInstitucionNombre
        {
            get => fields.IdInstitucionNombre[this];
            set => fields.IdInstitucionNombre[this] = value;
        }


        [DisplayName("Rango"), Column("IDRango"), ForeignKey("[dbo].[Rangos]", "IDRango"), LeftJoin("jIdRango"), TextualField("IdRangoNombre")]
        [LookupEditor("INSUDE.Rangos")]
        public Int32? IdRango
        {
            get => fields.IdRango[this];
            set => fields.IdRango[this] = value;
        }

        [DisplayName("Id Rango Nombre"), Expression("jIdRango.[Nombre]")]
        public String IdRangoNombre
        {
            get => fields.IdRangoNombre[this];
            set => fields.IdRangoNombre[this] = value;
        }

        
        // [LookupEditor("INSUDE.Dependencias")]
        [LookupEditor(typeof(DependenciasRow))]
         [DisplayName("Dependencia"), Column("IDDependencia"), ForeignKey("[dbo].[Dependencias]", "IDDependencia"), LeftJoin("jIdDependencia"), TextualField("IdDependenciaNombre")]
        
        public Int32? IdDependencia
        {
            get => fields.IdDependencia[this];
            set => fields.IdDependencia[this] = value;
        }

        [DisplayName("Id Dependencia Nombre"), Expression("jIdDependencia.[Nombre]")]
        public String IdDependenciaNombre
        {
            get => fields.IdDependenciaNombre[this];
            set => fields.IdDependenciaNombre[this] = value;
        }



        [DisplayName("Tel Oficina"), Size(20)]
        public String TelOficina
        {
            get => fields.TelOficina[this];
            set => fields.TelOficina[this] = value;
        }

        [DisplayName("Dp Matricula"), Column("DPMatricula"), Size(15)]
        public String DpMatricula
        {
            get => fields.DpMatricula[this];
            set => fields.DpMatricula[this] = value;
        }

        [DisplayName("Ec Matricula"), Column("ECMatricula"), Size(15)]
        public String EcMatricula
        {
            get => fields.EcMatricula[this];
            set => fields.EcMatricula[this] = value;
        }

        [DisplayName("Estado"), Size(20)]
        public String Estado
        {
            get => fields.Estado[this];
            set => fields.Estado[this] = value;
        }
        

        [DisplayName("Create Date")]
        public DateTime? CreateDate
        {
            get => fields.CreateDate[this];
            set => fields.CreateDate[this] = value;
        }

        
        [DisplayName("Create User"), Size(150)]
        public String CreateUser
        {
            get => fields.CreateUser[this];
            set => fields.CreateUser[this] = value;
        }

        [DisplayName("Last Updated At")]
        public DateTime? LastUpdatedAt
        {
            get => fields.LastUpdatedAt[this];
            set => fields.LastUpdatedAt[this] = value;
        }

       
        [DisplayName("Id Pais Estado"), Expression("jIdPais.[Estado]")]
        public String IdPaisEstado
        {
            get => fields.IdPaisEstado[this];
            set => fields.IdPaisEstado[this] = value;
        }

        [DisplayName("Id Pais Create Date"), Expression("jIdPais.[CreateDate]")]
        public DateTime? IdPaisCreateDate
        {
            get => fields.IdPaisCreateDate[this];
            set => fields.IdPaisCreateDate[this] = value;
        }

        [DisplayName("Id Pais Create User"), Expression("jIdPais.[CreateUser]")]
        public String IdPaisCreateUser
        {
            get => fields.IdPaisCreateUser[this];
            set => fields.IdPaisCreateUser[this] = value;
        }

        [DisplayName("Id Nacionalidad Estado"), Expression("jIdNacionalidad.[Estado]")]
        public String IdNacionalidadEstado
        {
            get => fields.IdNacionalidadEstado[this];
            set => fields.IdNacionalidadEstado[this] = value;
        }

        [DisplayName("Id Nacionalidad Create User"), Expression("jIdNacionalidad.[CreateUser]")]
        public String IdNacionalidadCreateUser
        {
            get => fields.IdNacionalidadCreateUser[this];
            set => fields.IdNacionalidadCreateUser[this] = value;
        }

        [DisplayName("Id Nacionalidad Create Date"), Expression("jIdNacionalidad.[CreateDate]")]
        public DateTime? IdNacionalidadCreateDate
        {
            get => fields.IdNacionalidadCreateDate[this];
            set => fields.IdNacionalidadCreateDate[this] = value;
        }

        [DisplayName("Id Institucion Id Compania"), Expression("jIdInstitucion.[IDCompania]")]
        public Int32? IdInstitucionIdCompania
        {
            get => fields.IdInstitucionIdCompania[this];
            set => fields.IdInstitucionIdCompania[this] = value;
        }

       
        [DisplayName("Id Institucion Create User"), Expression("jIdInstitucion.[CreateUser]")]
        public String IdInstitucionCreateUser
        {
            get => fields.IdInstitucionCreateUser[this];
            set => fields.IdInstitucionCreateUser[this] = value;
        }

        [DisplayName("Id Institucion Create Date"), Expression("jIdInstitucion.[CreateDate]")]
        public DateTime? IdInstitucionCreateDate
        {
            get => fields.IdInstitucionCreateDate[this];
            set => fields.IdInstitucionCreateDate[this] = value;
        }

        [DisplayName("Carreras")]
        [LookupEditor(typeof(TitulosRow), Multiple = true), NotMapped]
        [LinkingSetRelation(typeof(AlumnosCarrerasRow), "IDAlumno", "IDTitulo")]
        public List<Int32> lstCarreras
        {
            get { return Fields.lstCarreras[this]; }
            set { Fields.lstCarreras[this] = value; }
        }


        public AlumnosRow()
            : base()
        {
        }

        public AlumnosRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdAlumno;
            public StringField Nombres;
            public StringField Apellidos;
            public StringField Sexo;
            public StringField Matricula;
            public DateTimeField FechaNacimiento;
            public StringField LugarNacimiento;
            public DateTimeField FechaRegistro;
            public DateTimeField FechaIngreso;
            public StringField TipoIdentificacion;
            public StringField Identificacion;
            public Int32Field EstadoCivil;
            public StringField CorreoElectronico;
            public StringField TelHogar;
            public StringField TelCelular;
            public StringField Observaciones;
            public StringField Tipo;
            public StringField Direccion;
            public StringField Ciudad;
            public Int32Field IdPais;
            public Int32Field IdNacionalidad;
            public Int32Field IdUsuario;
            public StringField DireccionOficina;
            public StringField Funcion;
            public Int32Field IdInstitucion;
            public Int32Field IdRango;
            public Int32Field IdDependencia;
            public StringField TelOficina;
            public StringField DpMatricula;
            public StringField EcMatricula;
            public StringField Estado;
            public DateTimeField CreateDate;
            public StringField CreateUser;
            public DateTimeField LastUpdatedAt;

            public StringField IdPaisNombre;
            public StringField IdPaisEstado;
            public DateTimeField IdPaisCreateDate;
            public StringField IdPaisCreateUser;

            public StringField IdNacionalidadNombre;
            public StringField IdNacionalidadEstado;
            public StringField IdNacionalidadCreateUser;
            public DateTimeField IdNacionalidadCreateDate;

            public Int32Field IdInstitucionIdCompania;
            public StringField IdInstitucionNombre;
            public StringField IdInstitucionCreateUser;
            public DateTimeField IdInstitucionCreateDate;

            public StringField IdRangoNombre;

            public StringField IdDependenciaNombre;
            public StringField IdSexoNombre;
            public StringField IdEstadoCivilNombre;
            public ListField<Int32> lstCarreras ;
        }
    }
}
