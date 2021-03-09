using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace MiMovieTutorial.INSUDE.Entities
{
    [ConnectionKey("campusdata"), Module("INSUDE"), TableName("[dbo].[Materias]")]
    [DisplayName("Materias"), InstanceName("Materias")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class MateriasRow : Row<MateriasRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id Materia"), Column("IDMateria"), Identity, IdProperty]
        public Int32? IdMateria
        {
            get => fields.IdMateria[this];
            set => fields.IdMateria[this] = value;
        }

        [DisplayName("Id Escuela"), Column("IDEscuela"), NotNull, ForeignKey("[dbo].[Escuelas]", "IDEscuela"), LeftJoin("jIdEscuela"), TextualField("IdEscuelaNombre")]
        public Int32? IdEscuela
        {
            get => fields.IdEscuela[this];
            set => fields.IdEscuela[this] = value;
        }

        [DisplayName("Codigo"), Size(10), QuickSearch, NameProperty]
        public String Codigo
        {
            get => fields.Codigo[this];
            set => fields.Codigo[this] = value;
        }

        [DisplayName("Nombre"), Size(250), NotNull]
        public String Nombre
        {
            get => fields.Nombre[this];
            set => fields.Nombre[this] = value;
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

        [DisplayName("Create Date")]
        public DateTime? CreateDate
        {
            get => fields.CreateDate[this];
            set => fields.CreateDate[this] = value;
        }

        [DisplayName("Last Updated At")]
        public DateTime? LastUpdatedAt
        {
            get => fields.LastUpdatedAt[this];
            set => fields.LastUpdatedAt[this] = value;
        }

        [DisplayName("Id Escuela Id Institucion"), Expression("jIdEscuela.[IDInstitucion]")]
        public Int32? IdEscuelaIdInstitucion
        {
            get => fields.IdEscuelaIdInstitucion[this];
            set => fields.IdEscuelaIdInstitucion[this] = value;
        }

        [DisplayName("Id Escuela Nombre"), Expression("jIdEscuela.[Nombre]")]
        public String IdEscuelaNombre
        {
            get => fields.IdEscuelaNombre[this];
            set => fields.IdEscuelaNombre[this] = value;
        }

        [DisplayName("Id Escuela Siglas"), Expression("jIdEscuela.[Siglas]")]
        public String IdEscuelaSiglas
        {
            get => fields.IdEscuelaSiglas[this];
            set => fields.IdEscuelaSiglas[this] = value;
        }

        [DisplayName("Id Escuela Direccion"), Expression("jIdEscuela.[Direccion]")]
        public String IdEscuelaDireccion
        {
            get => fields.IdEscuelaDireccion[this];
            set => fields.IdEscuelaDireccion[this] = value;
        }

        [DisplayName("Id Escuela Telefono"), Expression("jIdEscuela.[Telefono]")]
        public String IdEscuelaTelefono
        {
            get => fields.IdEscuelaTelefono[this];
            set => fields.IdEscuelaTelefono[this] = value;
        }

        [DisplayName("Id Escuela Contacto"), Expression("jIdEscuela.[Contacto]")]
        public String IdEscuelaContacto
        {
            get => fields.IdEscuelaContacto[this];
            set => fields.IdEscuelaContacto[this] = value;
        }

        [DisplayName("Id Escuela Estado"), Expression("jIdEscuela.[Estado]")]
        public String IdEscuelaEstado
        {
            get => fields.IdEscuelaEstado[this];
            set => fields.IdEscuelaEstado[this] = value;
        }

        [DisplayName("Id Escuela Create User"), Expression("jIdEscuela.[CreateUser]")]
        public String IdEscuelaCreateUser
        {
            get => fields.IdEscuelaCreateUser[this];
            set => fields.IdEscuelaCreateUser[this] = value;
        }

        [DisplayName("Id Escuela Create Date"), Expression("jIdEscuela.[CreateDate]")]
        public DateTime? IdEscuelaCreateDate
        {
            get => fields.IdEscuelaCreateDate[this];
            set => fields.IdEscuelaCreateDate[this] = value;
        }

        public MateriasRow()
            : base()
        {
        }

        public MateriasRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdMateria;
            public Int32Field IdEscuela;
            public StringField Codigo;
            public StringField Nombre;
            public StringField Estado;
            public StringField CreateUser;
            public DateTimeField CreateDate;
            public DateTimeField LastUpdatedAt;

            public Int32Field IdEscuelaIdInstitucion;
            public StringField IdEscuelaNombre;
            public StringField IdEscuelaSiglas;
            public StringField IdEscuelaDireccion;
            public StringField IdEscuelaTelefono;
            public StringField IdEscuelaContacto;
            public StringField IdEscuelaEstado;
            public StringField IdEscuelaCreateUser;
            public DateTimeField IdEscuelaCreateDate;
        }
    }
}
