using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace MiMovieTutorial.INSUDE.Entities
{
    [ConnectionKey("campusdata"), Module("INSUDE"), TableName("[dbo].[Indices]")]
    [DisplayName("Indices"), InstanceName("Indices")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class IndicesRow : Row<IndicesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id Indice"), Column("IDIndice"), Identity, IdProperty]
        public Int32? IdIndice
        {
            get => fields.IdIndice[this];
            set => fields.IdIndice[this] = value;
        }

        [DisplayName("Literal"), Size(1), NotNull, QuickSearch, NameProperty]
        public String Literal
        {
            get => fields.Literal[this];
            set => fields.Literal[this] = value;
        }

        [DisplayName("Puntos"), NotNull]
        public Int16? Puntos
        {
            get => fields.Puntos[this];
            set => fields.Puntos[this] = value;
        }

        [DisplayName("Rango1"), NotNull]
        public Int16? Rango1
        {
            get => fields.Rango1[this];
            set => fields.Rango1[this] = value;
        }

        [DisplayName("Rango2"), NotNull]
        public Int16? Rango2
        {
            get => fields.Rango2[this];
            set => fields.Rango2[this] = value;
        }

        [DisplayName("Create Date")]
        public DateTime? CreateDate
        {
            get => fields.CreateDate[this];
            set => fields.CreateDate[this] = value;
        }

        [DisplayName("Create User"), Size(150)]
        public String CreateUser
        {
            get => fields.CreateUser[this];
            set => fields.CreateUser[this] = value;
        }

        [DisplayName("Descripcion"), Size(100), NotNull]
        public String Descripcion
        {
            get => fields.Descripcion[this];
            set => fields.Descripcion[this] = value;
        }

        public IndicesRow()
            : base()
        {
        }

        public IndicesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdIndice;
            public StringField Literal;
            public Int16Field Puntos;
            public Int16Field Rango1;
            public Int16Field Rango2;
            public DateTimeField CreateDate;
            public StringField CreateUser;
            public StringField Descripcion;
        }
    }
}
