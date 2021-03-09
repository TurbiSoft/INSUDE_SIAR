using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace MiMovieTutorial.INSUDE.Entities
{
    [ConnectionKey("campusdata"), Module("INSUDE"), TableName("[dbo].[Estadocivil]")]
    [DisplayName("Estadocivil"), InstanceName("Estadocivil")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("INSUDE.Estadocivil")]
    public sealed class EstadocivilRow : Row<EstadocivilRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Cod Estado"), Identity, IdProperty]
        public Int32? CodEstado
        {
            get => fields.CodEstado[this];
            set => fields.CodEstado[this] = value;
        }

        [DisplayName("Nom Estado"), Size(45), NotNull, QuickSearch, NameProperty]
        public String NomEstado
        {
            get => fields.NomEstado[this];
            set => fields.NomEstado[this] = value;
        }

        public EstadocivilRow()
            : base()
        {
        }

        public EstadocivilRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CodEstado;
            public StringField NomEstado;
        }
    }
}
