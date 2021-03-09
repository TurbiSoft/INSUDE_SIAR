/**********************************************************************
* 06 - 03 - 2021 Agregue combo de compania, quite campos usario y fecha
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
    [ConnectionKey("campusdata"), Module("INSUDE"), TableName("[dbo].[Instituciones]")]
    [DisplayName("Facultades"), InstanceName("Facultades")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("INSUDE.Facultades")] // Instituciones
    public sealed class FacultadesRow : Row<FacultadesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id Institucion"), Column("IDInstitucion"), Identity, IdProperty]
        public Int32? IdInstitucion
        {
            get => fields.IdInstitucion[this];
            set => fields.IdInstitucion[this] = value;
        }


        // Combo
        [LookupEditor(typeof(CompaniaRow))]
        [DisplayName("Id Compania"),DefaultValue(1), Column("IDCompania"), ForeignKey("[dbo].[Compania]", "IDCompania"), LeftJoin("jIdCompania"), TextualField("IdCompaniaNombre")]
        public Int32? IdCompania
        {
            get => fields.IdCompania[this];
            set => fields.IdCompania[this] = value;
        }

        [DisplayName("Nombre"), Size(250), NotNull, QuickSearch, NameProperty]
        public String Nombre
        {
            get => fields.Nombre[this];
            set => fields.Nombre[this] = value;
        }

        [DisplayName("Create User"), Size(150), DefaultValue("user")]
        public String CreateUser
        {
            get => fields.CreateUser[this];
            set => fields.CreateUser[this] = value;
        }

        [DisplayName("Create Date")]
       // [DefaultValue(DateTimeKind.Utc)]
        public DateTime? CreateDate
        {
            get => fields.CreateDate[this];
            set => fields.CreateDate[this] = value;
        }

        [DisplayName("Id Compania Siglas"), Expression("jIdCompania.[Siglas]")]
        public String IdCompaniaSiglas
        {
            get => fields.IdCompaniaSiglas[this];
            set => fields.IdCompaniaSiglas[this] = value;
        }

        [DisplayName("Rectoría"), Expression("jIdCompania.[Nombre]")]
        public String IdCompaniaNombre
        {
            get => fields.IdCompaniaNombre[this];
            set => fields.IdCompaniaNombre[this] = value;
        }

        [DisplayName("Id Compania Rnc"), Expression("jIdCompania.[RNC]")]
        public String IdCompaniaRnc
        {
            get => fields.IdCompaniaRnc[this];
            set => fields.IdCompaniaRnc[this] = value;
        }

        [DisplayName("Id Compania Direccion"), Expression("jIdCompania.[Direccion]")]
        public String IdCompaniaDireccion
        {
            get => fields.IdCompaniaDireccion[this];
            set => fields.IdCompaniaDireccion[this] = value;
        }

        [DisplayName("Id Compania Telefono"), Expression("jIdCompania.[Telefono]")]
        public String IdCompaniaTelefono
        {
            get => fields.IdCompaniaTelefono[this];
            set => fields.IdCompaniaTelefono[this] = value;
        }

        [DisplayName("Id Compania Fax"), Expression("jIdCompania.[Fax]")]
        public String IdCompaniaFax
        {
            get => fields.IdCompaniaFax[this];
            set => fields.IdCompaniaFax[this] = value;
        }

        [DisplayName("Id Compania Logo"), Expression("jIdCompania.[Logo]")]
        public String IdCompaniaLogo
        {
            get => fields.IdCompaniaLogo[this];
            set => fields.IdCompaniaLogo[this] = value;
        }

        [DisplayName("Id Compania Correo"), Expression("jIdCompania.[Correo]")]
        public String IdCompaniaCorreo
        {
            get => fields.IdCompaniaCorreo[this];
            set => fields.IdCompaniaCorreo[this] = value;
        }

        [DisplayName("Id Compania Website"), Expression("jIdCompania.[website]")]
        public String IdCompaniaWebsite
        {
            get => fields.IdCompaniaWebsite[this];
            set => fields.IdCompaniaWebsite[this] = value;
        }

        public FacultadesRow()
            : base()
        {
        }

        public FacultadesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdInstitucion;
            public Int32Field IdCompania;
            public StringField Nombre;
            public StringField CreateUser;
            public DateTimeField CreateDate;

            public StringField IdCompaniaSiglas;
            public StringField IdCompaniaNombre;
            public StringField IdCompaniaRnc;
            public StringField IdCompaniaDireccion;
            public StringField IdCompaniaTelefono;
            public StringField IdCompaniaFax;
            public StringField IdCompaniaLogo;
            public StringField IdCompaniaCorreo;
            public StringField IdCompaniaWebsite;
        }
    }
}
