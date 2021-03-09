/**********************************************************************
* 07 - 03 - 2021 Agregue combo de compania, quite campos usario y fecha
 * de Creacion del formulario de Edicion. Puse por defecto el usuario 
 * en logueado y fecha del dia
 *******************************************************************/

using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace MiMovieTutorial.INSUDE.Entities
{
    [ConnectionKey("Campusdata"), Module("INSUDE"), TableName("[dbo].[Escuelas]")]
    [DisplayName("Escuelas"), InstanceName("Escuela")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class EscuelasRow : Row<EscuelasRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id Escuela"), Column("IDEscuela"), Identity, IdProperty]
        public Int32? IdEscuela
        {
            get => fields.IdEscuela[this];
            set => fields.IdEscuela[this] = value;
        }

        [LookupEditor(typeof(FacultadesRow))]
        [DisplayName("Facultad"), Column("IDInstitucion"), NotNull, ForeignKey("[dbo].[Instituciones]", "IDInstitucion"), LeftJoin("jIdInstitucion"), TextualField("IdInstitucionNombre")]
        public Int32? IdInstitucion
        {
            get => fields.IdInstitucion[this];
            set => fields.IdInstitucion[this] = value;
        }

        [DisplayName("Nombre"), Size(200), NotNull, QuickSearch, NameProperty]
        public String Nombre
        {
            get => fields.Nombre[this];
            set => fields.Nombre[this] = value;
        }

        [DisplayName("Siglas"), Size(10)]
        public String Siglas
        {
            get => fields.Siglas[this];
            set => fields.Siglas[this] = value;
        }

        [DisplayName("Dirección"), Size(200)]
        public String Direccion
        {
            get => fields.Direccion[this];
            set => fields.Direccion[this] = value;
        }

        [DisplayName("Teléfono"), Size(20)]
        public String Telefono
        {
            get => fields.Telefono[this];
            set => fields.Telefono[this] = value;
        }

        [DisplayName("Contacto"), Size(60)]
        public String Contacto
        {
            get => fields.Contacto[this];
            set => fields.Contacto[this] = value;
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

        [DisplayName("Id Institucion Id Compania"), Expression("jIdInstitucion.[IDCompania]")]
        public Int32? IdInstitucionIdCompania
        {
            get => fields.IdInstitucionIdCompania[this];
            set => fields.IdInstitucionIdCompania[this] = value;
        }

        [DisplayName("Id Institucion Nombre"), Expression("jIdInstitucion.[Nombre]")]
        public String IdInstitucionNombre
        {
            get => fields.IdInstitucionNombre[this];
            set => fields.IdInstitucionNombre[this] = value;
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

        public EscuelasRow()
            : base()
        {
        }

        public EscuelasRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdEscuela;
            public Int32Field IdInstitucion;
            public StringField Nombre;
            public StringField Siglas;
            public StringField Direccion;
            public StringField Telefono;
            public StringField Contacto;
            public StringField Estado;
            public StringField CreateUser;
            public DateTimeField CreateDate;

            public Int32Field IdInstitucionIdCompania;
            public StringField IdInstitucionNombre;
            public StringField IdInstitucionCreateUser;
            public DateTimeField IdInstitucionCreateDate;
        }
    }
}
