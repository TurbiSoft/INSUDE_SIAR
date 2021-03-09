using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace MiMovieTutorial.INSUDE.Entities
{
    [ConnectionKey("campusdata"), Module("INSUDE"), TableName("[dbo].[Status]")]
    [DisplayName("Status"), InstanceName("Status")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("INSUDE.Status")]
    public sealed class StatusRow : Row<StatusRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id Status"), Identity, IdProperty]
        public Int32? IdStatus
        {
            get => fields.IdStatus[this];
            set => fields.IdStatus[this] = value;
        }

        [DisplayName("Nom Status"), Size(10), QuickSearch, NameProperty]
        public String NomStatus
        {
            get => fields.NomStatus[this];
            set => fields.NomStatus[this] = value;
        }

        public StatusRow()
            : base()
        {
        }

        public StatusRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdStatus;
            public StringField NomStatus;
        }
    }
}
