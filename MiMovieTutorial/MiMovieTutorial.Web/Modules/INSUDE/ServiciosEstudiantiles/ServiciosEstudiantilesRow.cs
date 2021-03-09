using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace MiMovieTutorial.INSUDE.Entities
{
    [ConnectionKey("CAMPUSDATA"), Module("INSUDE"), TableName("[dbo].[ServiciosEstudiantiles]")]
    [DisplayName("Servicios Estudiantiles"), InstanceName("Servicios Estudiantiles")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ServiciosEstudiantilesRow : Row<ServiciosEstudiantilesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Descripcion"), NotNull, QuickSearch, NameProperty]
        public String Descripcion
        {
            get => fields.Descripcion[this];
            set => fields.Descripcion[this] = value;
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

        [DisplayName("Create User"), Size(150)]
        public String CreateUser
        {
            get => fields.CreateUser[this];
            set => fields.CreateUser[this] = value;
        }

        public ServiciosEstudiantilesRow()
            : base()
        {
        }

        public ServiciosEstudiantilesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Descripcion;
            public DateTimeField CreateDate;
            public DateTimeField LastUpdatedAt;
            public StringField CreateUser;
        }
    }
}
