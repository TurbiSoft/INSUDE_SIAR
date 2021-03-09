using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace MiMovieTutorial.INSUDE.Entities
{
    [ConnectionKey("Campusdata"), Module("INSUDE"), TableName("[dbo].[Requisitos]")]
    [DisplayName("Requisitos"), InstanceName("Requisitos")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class RequisitosRow : Row<RequisitosRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id Requisito"), Column("IDRequisito"), Identity, IdProperty]
        public Int32? IdRequisito
        {
            get => fields.IdRequisito[this];
            set => fields.IdRequisito[this] = value;
        }

        [DisplayName("Nombre"), Size(100), NotNull, QuickSearch, NameProperty]
        public String Nombre
        {
            get => fields.Nombre[this];
            set => fields.Nombre[this] = value;
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

        public RequisitosRow()
            : base()
        {
        }

        public RequisitosRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdRequisito;
            public StringField Nombre;
            public StringField CreateUser;
            public DateTimeField CreateDate;
        }
    }
}
