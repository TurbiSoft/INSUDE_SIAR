

using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace MiMovieTutorial.INSUDE.Entities
{
    [ConnectionKey("campusdata"), Module("INSUDE"), TableName("[dbo].[Pensum]")]
    [DisplayName("Pensum"), InstanceName("Pensum")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class PensumRow : Row<PensumRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id Pensum"), Column("IDPensum"), Identity, IdProperty]
        public Int32? IdPensum
        {
            get => fields.IdPensum[this];
            set => fields.IdPensum[this] = value;
        }

       // [LookupEditor(typeof(TitulosRow))]
      //  [DisplayName("Carrera"), Column("IDTitulo"), ForeignKey("[dbo].[Titulos]", "IDTitulo"), LeftJoin("jIdTitulo"), TextualField("IdTituloNombre")]
        [DisplayName("Id Titulo"), Column("IDTitulo"), ForeignKey(typeof(TitulosRow)), LeftJoin("jIdTitulo")]
        public Int32? IdTitulo
        {
            get => fields.IdTitulo[this];
            set => fields.IdTitulo[this] = value;
        }

         // [DisplayName("Carrera"), Expression("jIdTitulo.[Nombre]")]       
        [Origin("jIdTitulo")]
        public String IdTituloNombre
        {
            get => fields.IdTituloNombre[this];
            set => fields.IdTituloNombre[this] = value;
        }

        [DisplayName("Codigo"), Size(10), NotNull, QuickSearch, NameProperty]
        public String Codigo
        {
            get => fields.Codigo[this];
            set => fields.Codigo[this] = value;
        }

        [DisplayName("Nombre"), Size(200), NotNull]
        public String Nombre
        {
            get => fields.Nombre[this];
            set => fields.Nombre[this] = value;
        }

        [DisplayName("Estado"), Size(20)]
        public String Estado
        {
            get => fields.Estado[this];
            set => fields.Estado[this] = value;
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

        [DisplayName("Last Updated At")]
        public DateTime? LastUpdatedAt
        {
            get => fields.LastUpdatedAt[this];
            set => fields.LastUpdatedAt[this] = value;
        }

        [LookupEditor(typeof(StatusRow))]
        [DisplayName("Estatus"), Column("IdStatus"), ForeignKey("[dbo].[Status]", "IdStatus"), LeftJoin("jIdStatus"), TextualField("IdStatusNombre")]
        public Int32? IdStatus
        {
            get => fields.IdStatus[this];
            set => fields.IdStatus[this] = value;
        }

        [DisplayName("Id Status Nombre"), Expression("jIdStatus.[NomStatus]")]

        public String IdStatusNombre
        {
            get => fields.IdStatusNombre[this];
            set => fields.IdStatusNombre[this] = value;
        }

        // campos de la relacion

        [DisplayName("Id Titulo Codigo"), Expression("jIdTitulo.[Codigo]")]
        public String IdTituloCodigo
        {
            get => fields.IdTituloCodigo[this];
            set => fields.IdTituloCodigo[this] = value;
        }

       

        [DisplayName("Id Titulo Mencion"), Expression("jIdTitulo.[Mencion]")]
        public String IdTituloMencion
        {
            get => fields.IdTituloMencion[this];
            set => fields.IdTituloMencion[this] = value;
        }

        [DisplayName("Id Titulo Id Escuela"), Expression("jIdTitulo.[IDEscuela]")]
        public Int32? IdTituloIdEscuela
        {
            get => fields.IdTituloIdEscuela[this];
            set => fields.IdTituloIdEscuela[this] = value;
        }

        [DisplayName("Id Titulo Id Pensum"), Expression("jIdTitulo.[IDPensum]")]
        public Int32? IdTituloIdPensum
        {
            get => fields.IdTituloIdPensum[this];
            set => fields.IdTituloIdPensum[this] = value;
        }

        [DisplayName("Id Titulo Monto Inscripcion"), Expression("jIdTitulo.[MontoInscripcion]")]
        public Decimal? IdTituloMontoInscripcion
        {
            get => fields.IdTituloMontoInscripcion[this];
            set => fields.IdTituloMontoInscripcion[this] = value;
        }

        [DisplayName("Id Titulo Costo"), Expression("jIdTitulo.[Costo]")]
        public Decimal? IdTituloCosto
        {
            get => fields.IdTituloCosto[this];
            set => fields.IdTituloCosto[this] = value;
        }

        [DisplayName("Id Titulo Costo Credito"), Expression("jIdTitulo.[CostoCredito]")]
        public Boolean? IdTituloCostoCredito
        {
            get => fields.IdTituloCostoCredito[this];
            set => fields.IdTituloCostoCredito[this] = value;
        }

        [DisplayName("Id Titulo Titulo Otorgado"), Expression("jIdTitulo.[TituloOtorgado]")]
        public String IdTituloTituloOtorgado
        {
            get => fields.IdTituloTituloOtorgado[this];
            set => fields.IdTituloTituloOtorgado[this] = value;
        }

        [DisplayName("Id Titulo Id Requisito Nacional"), Expression("jIdTitulo.[IDRequisitoNacional]")]
        public Int32? IdTituloIdRequisitoNacional
        {
            get => fields.IdTituloIdRequisitoNacional[this];
            set => fields.IdTituloIdRequisitoNacional[this] = value;
        }

        [DisplayName("Id Titulo Id Requisito Extrangero"), Expression("jIdTitulo.[IDRequisitoExtrangero]")]
        public Int32? IdTituloIdRequisitoExtrangero
        {
            get => fields.IdTituloIdRequisitoExtrangero[this];
            set => fields.IdTituloIdRequisitoExtrangero[this] = value;
        }

        [DisplayName("Id Titulo Tipo Matricula"), Expression("jIdTitulo.[TipoMatricula]")]
        public String IdTituloTipoMatricula
        {
            get => fields.IdTituloTipoMatricula[this];
            set => fields.IdTituloTipoMatricula[this] = value;
        }

        [DisplayName("Id Titulo Estado"), Expression("jIdTitulo.[Estado]")]
        public String IdTituloEstado
        {
            get => fields.IdTituloEstado[this];
            set => fields.IdTituloEstado[this] = value;
        }

        [DisplayName("Id Titulo Create Date"), Expression("jIdTitulo.[CreateDate]")]
        public DateTime? IdTituloCreateDate
        {
            get => fields.IdTituloCreateDate[this];
            set => fields.IdTituloCreateDate[this] = value;
        }

        [DisplayName("Id Titulo Create User"), Expression("jIdTitulo.[CreateUser]")]
        public String IdTituloCreateUser
        {
            get => fields.IdTituloCreateUser[this];
            set => fields.IdTituloCreateUser[this] = value;
        }

        [DisplayName("Id Titulo Ciclo Academico"), Expression("jIdTitulo.[CicloAcademico]")]
        public String IdTituloCicloAcademico
        {
            get => fields.IdTituloCicloAcademico[this];
            set => fields.IdTituloCicloAcademico[this] = value;
        }

        public PensumRow()
            : base()
        {
        }

        public PensumRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdPensum;
            public Int32Field IdTitulo;
            public StringField Codigo;
            public StringField Nombre;
            public StringField Estado;
            public DateTimeField CreateDate;
            public StringField CreateUser;
            public DateTimeField LastUpdatedAt;

            public StringField IdTituloCodigo;
            public StringField IdTituloNombre;
            public StringField IdTituloMencion;
            public Int32Field IdTituloIdEscuela;
            public Int32Field IdTituloIdPensum;
            public DecimalField IdTituloMontoInscripcion;
            public DecimalField IdTituloCosto;
            public BooleanField IdTituloCostoCredito;
            public StringField IdTituloTituloOtorgado;
            public Int32Field IdTituloIdRequisitoNacional;
            public Int32Field IdTituloIdRequisitoExtrangero;
            public StringField IdTituloTipoMatricula;
            public StringField IdTituloEstado;
            public DateTimeField IdTituloCreateDate;
            public StringField IdTituloCreateUser;
            public StringField IdTituloCicloAcademico;

            // Agregado Manual Turbi
            public Int32Field IdStatus;
            public StringField IdStatusNombre;
        }
    }
}
