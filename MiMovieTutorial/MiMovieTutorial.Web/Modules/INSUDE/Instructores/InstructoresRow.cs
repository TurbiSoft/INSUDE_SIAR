using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace MiMovieTutorial.INSUDE.Entities
{
    [ConnectionKey("CAMPUSDATA"), Module("INSUDE"), TableName("[dbo].[Instructores]")]
    [DisplayName("Instructores"), InstanceName("Instructores")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class InstructoresRow : Row<InstructoresRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id Instructor"), Column("IDInstructor"), Identity, IdProperty]
        public Int32? IdInstructor
        {
            get => fields.IdInstructor[this];
            set => fields.IdInstructor[this] = value;
        }

        [DisplayName("Codigo"), Size(10), NotNull, QuickSearch, NameProperty]
        public String Codigo
        {
            get => fields.Codigo[this];
            set => fields.Codigo[this] = value;
        }

        [DisplayName("Nombres"), Size(50), NotNull]
        public String Nombres
        {
            get => fields.Nombres[this];
            set => fields.Nombres[this] = value;
        }

        [DisplayName("Telefono"), Size(15)]
        public String Telefono
        {
            get => fields.Telefono[this];
            set => fields.Telefono[this] = value;
        }

        [DisplayName("Nivel Academico"), Size(100)]
        public String NivelAcademico
        {
            get => fields.NivelAcademico[this];
            set => fields.NivelAcademico[this] = value;
        }

        [DisplayName("Id Usuario"), Column("IDUsuario")]
        public Int32? IdUsuario
        {
            get => fields.IdUsuario[this];
            set => fields.IdUsuario[this] = value;
        }

        [DisplayName("Estado"), Size(20), NotNull]
        public String Estado
        {
            get => fields.Estado[this];
            set => fields.Estado[this] = value;
        }

        [DisplayName("Create User"), Size(150)]
        public String CreateUser
        {
            get => fields.CreateUser[this];
            set => fields.CreateUser[this] = value;
        }

        [DisplayName("Create Date"), NotNull]
        public DateTime? CreateDate
        {
            get => fields.CreateDate[this];
            set => fields.CreateDate[this] = value;
        }

        [DisplayName("Identificacion"), Size(30)]
        public String Identificacion
        {
            get => fields.Identificacion[this];
            set => fields.Identificacion[this] = value;
        }

        [DisplayName("Tipo Identificacion"), Size(1)]
        public String TipoIdentificacion
        {
            get => fields.TipoIdentificacion[this];
            set => fields.TipoIdentificacion[this] = value;
        }

        [DisplayName("Last Updated At")]
        public DateTime? LastUpdatedAt
        {
            get => fields.LastUpdatedAt[this];
            set => fields.LastUpdatedAt[this] = value;
        }

        [DisplayName("Fecha Ingreso")]
        public DateTime? FechaIngreso
        {
            get => fields.FechaIngreso[this];
            set => fields.FechaIngreso[this] = value;
        }

        [DisplayName("Correo Electronico"), Size(200)]
        public String CorreoElectronico
        {
            get => fields.CorreoElectronico[this];
            set => fields.CorreoElectronico[this] = value;
        }

        [DisplayName("Sexo"), Size(1), NotNull]
        public String Sexo
        {
            get => fields.Sexo[this];
            set => fields.Sexo[this] = value;
        }

        public InstructoresRow()
            : base()
        {
        }

        public InstructoresRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdInstructor;
            public StringField Codigo;
            public StringField Nombres;
            public StringField Telefono;
            public StringField NivelAcademico;
            public Int32Field IdUsuario;
            public StringField Estado;
            public StringField CreateUser;
            public DateTimeField CreateDate;
            public StringField Identificacion;
            public StringField TipoIdentificacion;
            public DateTimeField LastUpdatedAt;
            public DateTimeField FechaIngreso;
            public StringField CorreoElectronico;
            public StringField Sexo;
        }
    }
}
