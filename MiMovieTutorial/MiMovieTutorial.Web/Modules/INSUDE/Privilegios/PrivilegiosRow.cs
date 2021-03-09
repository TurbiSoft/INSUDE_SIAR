using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace MiMovieTutorial.INSUDE.Entities
{
    [ConnectionKey("campusdata"), Module("INSUDE"), TableName("[dbo].[Roles]")]
    [DisplayName("Privilegios"), InstanceName("Privilegios")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class PrivilegiosRow : Row<PrivilegiosRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id Rol"), Column("IDRol"), Identity, IdProperty]
        public Int32? IdRol
        {
            get => fields.IdRol[this];
            set => fields.IdRol[this] = value;
        }

        [DisplayName("Rol"), Size(150), QuickSearch, NameProperty]
        public String Rol
        {
            get => fields.Rol[this];
            set => fields.Rol[this] = value;
        }

        [DisplayName("Tipo Usuario"), Size(20)]
        public String TipoUsuario
        {
            get => fields.TipoUsuario[this];
            set => fields.TipoUsuario[this] = value;
        }

        [DisplayName("Descripcion"), Size(1000)]
        public String Descripcion
        {
            get => fields.Descripcion[this];
            set => fields.Descripcion[this] = value;
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

        [DisplayName("Last Updated At")]
        public DateTime? LastUpdatedAt
        {
            get => fields.LastUpdatedAt[this];
            set => fields.LastUpdatedAt[this] = value;
        }

        public PrivilegiosRow()
            : base()
        {
        }

        public PrivilegiosRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdRol;
            public StringField Rol;
            public StringField TipoUsuario;
            public StringField Descripcion;
            public StringField CreateUser;
            public DateTimeField CreateDate;
            public DateTimeField LastUpdatedAt;
        }
    }
}
