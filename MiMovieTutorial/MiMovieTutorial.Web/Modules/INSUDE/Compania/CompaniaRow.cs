/*******************************************************************
 * 06-03-2021 Agregue combo de compania, quite campos usario y fecha
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
    [ConnectionKey("campusdata"), Module("INSUDE"), TableName("[dbo].[Compania]")]
    [DisplayName("Compania"), InstanceName("Compania")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("INSUDE.Compania")]
    public sealed class CompaniaRow : Row<CompaniaRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id Compania"), Column("IDCompania"), Identity, IdProperty]
        public Int32? IdCompania
        {
            get => fields.IdCompania[this];
            set => fields.IdCompania[this] = value;
        }

        [DisplayName("Siglas"), Size(50), QuickSearch, NameProperty]
        public String Siglas
        {
            get => fields.Siglas[this];
            set => fields.Siglas[this] = value;
        }

        [DisplayName("Nombre"), Size(400), NotNull]
        public String Nombre
        {
            get => fields.Nombre[this];
            set => fields.Nombre[this] = value;
        }

        [DisplayName("Rnc"), Column("RNC"), Size(20)]
        public String Rnc
        {
            get => fields.Rnc[this];
            set => fields.Rnc[this] = value;
        }

        [DisplayName("Direccion"), Size(150)]
        public String Direccion
        {
            get => fields.Direccion[this];
            set => fields.Direccion[this] = value;
        }

        [DisplayName("Telefono"), Size(15)]
        public String Telefono
        {
            get => fields.Telefono[this];
            set => fields.Telefono[this] = value;
        }

        [DisplayName("Fax"), Size(15)]
        public String Fax
        {
            get => fields.Fax[this];
            set => fields.Fax[this] = value;
        }

        [DisplayName("Logo"), Size(200)]
        public String Logo
        {
            get => fields.Logo[this];
            set => fields.Logo[this] = value;
        }

        [DisplayName("Correo"), Size(200)]
        public String Correo
        {
            get => fields.Correo[this];
            set => fields.Correo[this] = value;
        }

        [DisplayName("Website"), Column("website"), Size(100)]
        public String Website
        {
            get => fields.Website[this];
            set => fields.Website[this] = value;
        }

        public CompaniaRow()
            : base()
        {
        }

        public CompaniaRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdCompania;
            public StringField Siglas;
            public StringField Nombre;
            public StringField Rnc;
            public StringField Direccion;
            public StringField Telefono;
            public StringField Fax;
            public StringField Logo;
            public StringField Correo;
            public StringField Website;
        }
    }
}
