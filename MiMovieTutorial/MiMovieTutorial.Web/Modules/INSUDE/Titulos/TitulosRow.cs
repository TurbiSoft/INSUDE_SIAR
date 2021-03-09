using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace MiMovieTutorial.INSUDE.Entities
{
    [ConnectionKey("campusdata"), Module("INSUDE"), TableName("[dbo].[Titulos]")]
    [DisplayName("Titulos"), InstanceName("Titulos")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("INSUDE.Titulos")]
    public sealed class TitulosRow : Row<TitulosRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id Titulo"), Column("IDTitulo"), Identity, IdProperty]
        public Int32? IdTitulo
        {
            get => fields.IdTitulo[this];
            set => fields.IdTitulo[this] = value;
        }

        [DisplayName("Codigo"), Size(10), QuickSearch, NameProperty]
        public String Codigo
        {
            get => fields.Codigo[this];
            set => fields.Codigo[this] = value;
        }

        [DisplayName("Nombre"), Size(250), NotNull]
        public String Nombre
        {
            get => fields.Nombre[this];
            set => fields.Nombre[this] = value;
        }

        [DisplayName("Mencion"), Size(200)]
        public String Mencion
        {
            get => fields.Mencion[this];
            set => fields.Mencion[this] = value;
        }

        [DisplayName("Id Escuela"), Column("IDEscuela"), NotNull, ForeignKey("[dbo].[Escuelas]", "IDEscuela"), LeftJoin("jIdEscuela"), TextualField("IdEscuelaNombre")]
        public Int32? IdEscuela
        {
            get => fields.IdEscuela[this];
            set => fields.IdEscuela[this] = value;
        }

        [DisplayName("Id Pensum"), Column("IDPensum")]
        public Int32? IdPensum
        {
            get => fields.IdPensum[this];
            set => fields.IdPensum[this] = value;
        }

        [DisplayName("Monto Inscripcion"), Size(19), Scale(4), NotNull]
        public Decimal? MontoInscripcion
        {
            get => fields.MontoInscripcion[this];
            set => fields.MontoInscripcion[this] = value;
        }

        [DisplayName("Costo"), Size(19), Scale(4), NotNull]
        public Decimal? Costo
        {
            get => fields.Costo[this];
            set => fields.Costo[this] = value;
        }

        [DisplayName("Costo Credito"), NotNull]
        public Boolean? CostoCredito
        {
            get => fields.CostoCredito[this];
            set => fields.CostoCredito[this] = value;
        }

        [DisplayName("Titulo Otorgado"), Size(250)]
        public String TituloOtorgado
        {
            get => fields.TituloOtorgado[this];
            set => fields.TituloOtorgado[this] = value;
        }

        [DisplayName("Id Requisito Nacional"), Column("IDRequisitoNacional"), ForeignKey("[dbo].[Requisitos]", "IDRequisito"), LeftJoin("jIdRequisitoNacional"), TextualField("IdRequisitoNacionalNombre")]
        public Int32? IdRequisitoNacional
        {
            get => fields.IdRequisitoNacional[this];
            set => fields.IdRequisitoNacional[this] = value;
        }

        [DisplayName("Id Requisito Extrangero"), Column("IDRequisitoExtrangero"), ForeignKey("[dbo].[Requisitos]", "IDRequisito"), LeftJoin("jIdRequisitoExtrangero"), TextualField("IdRequisitoExtrangeroNombre")]
        public Int32? IdRequisitoExtrangero
        {
            get => fields.IdRequisitoExtrangero[this];
            set => fields.IdRequisitoExtrangero[this] = value;
        }

        [DisplayName("Tipo Matricula"), Size(50)]
        public String TipoMatricula
        {
            get => fields.TipoMatricula[this];
            set => fields.TipoMatricula[this] = value;
        }

        [DisplayName("Estado"), Size(20), NotNull]
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

        [DisplayName("Ciclo Academico"), Size(20)]
        public String CicloAcademico
        {
            get => fields.CicloAcademico[this];
            set => fields.CicloAcademico[this] = value;
        }

        [DisplayName("Id Escuela Id Institucion"), Expression("jIdEscuela.[IDInstitucion]")]
        public Int32? IdEscuelaIdInstitucion
        {
            get => fields.IdEscuelaIdInstitucion[this];
            set => fields.IdEscuelaIdInstitucion[this] = value;
        }

        [DisplayName("Id Escuela Nombre"), Expression("jIdEscuela.[Nombre]")]
        public String IdEscuelaNombre
        {
            get => fields.IdEscuelaNombre[this];
            set => fields.IdEscuelaNombre[this] = value;
        }

        [DisplayName("Id Escuela Siglas"), Expression("jIdEscuela.[Siglas]")]
        public String IdEscuelaSiglas
        {
            get => fields.IdEscuelaSiglas[this];
            set => fields.IdEscuelaSiglas[this] = value;
        }

        [DisplayName("Id Escuela Direccion"), Expression("jIdEscuela.[Direccion]")]
        public String IdEscuelaDireccion
        {
            get => fields.IdEscuelaDireccion[this];
            set => fields.IdEscuelaDireccion[this] = value;
        }

        [DisplayName("Id Escuela Telefono"), Expression("jIdEscuela.[Telefono]")]
        public String IdEscuelaTelefono
        {
            get => fields.IdEscuelaTelefono[this];
            set => fields.IdEscuelaTelefono[this] = value;
        }

        [DisplayName("Id Escuela Contacto"), Expression("jIdEscuela.[Contacto]")]
        public String IdEscuelaContacto
        {
            get => fields.IdEscuelaContacto[this];
            set => fields.IdEscuelaContacto[this] = value;
        }

        [DisplayName("Id Escuela Estado"), Expression("jIdEscuela.[Estado]")]
        public String IdEscuelaEstado
        {
            get => fields.IdEscuelaEstado[this];
            set => fields.IdEscuelaEstado[this] = value;
        }

        [DisplayName("Id Escuela Create User"), Expression("jIdEscuela.[CreateUser]")]
        public String IdEscuelaCreateUser
        {
            get => fields.IdEscuelaCreateUser[this];
            set => fields.IdEscuelaCreateUser[this] = value;
        }

        [DisplayName("Id Escuela Create Date"), Expression("jIdEscuela.[CreateDate]")]
        public DateTime? IdEscuelaCreateDate
        {
            get => fields.IdEscuelaCreateDate[this];
            set => fields.IdEscuelaCreateDate[this] = value;
        }

        [DisplayName("Id Requisito Nacional Nombre"), Expression("jIdRequisitoNacional.[Nombre]")]
        public String IdRequisitoNacionalNombre
        {
            get => fields.IdRequisitoNacionalNombre[this];
            set => fields.IdRequisitoNacionalNombre[this] = value;
        }

        [DisplayName("Id Requisito Nacional Create User"), Expression("jIdRequisitoNacional.[CreateUser]")]
        public String IdRequisitoNacionalCreateUser
        {
            get => fields.IdRequisitoNacionalCreateUser[this];
            set => fields.IdRequisitoNacionalCreateUser[this] = value;
        }

        [DisplayName("Id Requisito Nacional Create Date"), Expression("jIdRequisitoNacional.[CreateDate]")]
        public DateTime? IdRequisitoNacionalCreateDate
        {
            get => fields.IdRequisitoNacionalCreateDate[this];
            set => fields.IdRequisitoNacionalCreateDate[this] = value;
        }

        [DisplayName("Id Requisito Extrangero Nombre"), Expression("jIdRequisitoExtrangero.[Nombre]")]
        public String IdRequisitoExtrangeroNombre
        {
            get => fields.IdRequisitoExtrangeroNombre[this];
            set => fields.IdRequisitoExtrangeroNombre[this] = value;
        }

        [DisplayName("Id Requisito Extrangero Create User"), Expression("jIdRequisitoExtrangero.[CreateUser]")]
        public String IdRequisitoExtrangeroCreateUser
        {
            get => fields.IdRequisitoExtrangeroCreateUser[this];
            set => fields.IdRequisitoExtrangeroCreateUser[this] = value;
        }

        [DisplayName("Id Requisito Extrangero Create Date"), Expression("jIdRequisitoExtrangero.[CreateDate]")]
        public DateTime? IdRequisitoExtrangeroCreateDate
        {
            get => fields.IdRequisitoExtrangeroCreateDate[this];
            set => fields.IdRequisitoExtrangeroCreateDate[this] = value;
        }


        // turbi
         [DisplayName("Carrera"), Expression("jIdTitulo.[Nombre]")]       
       // [Origin("jIdTitulo")]
        public String IdTituloNombre
        {
            get => fields.IdTituloNombre[this];
            set => fields.IdTituloNombre[this] = value;
        }
        public TitulosRow()
            : base()
        {
        }

        public TitulosRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdTitulo;
            public StringField Codigo;
            public StringField Nombre;
            public StringField Mencion;
            public Int32Field IdEscuela;
            public Int32Field IdPensum;
            public DecimalField MontoInscripcion;
            public DecimalField Costo;
            public BooleanField CostoCredito;
            public StringField TituloOtorgado;
            public Int32Field IdRequisitoNacional;
            public Int32Field IdRequisitoExtrangero;
            public StringField TipoMatricula;
            public StringField Estado;
            public DateTimeField CreateDate;
            public StringField CreateUser;
            public StringField CicloAcademico;

            public Int32Field IdEscuelaIdInstitucion;
            public StringField IdEscuelaNombre;
            public StringField IdEscuelaSiglas;
            public StringField IdEscuelaDireccion;
            public StringField IdEscuelaTelefono;
            public StringField IdEscuelaContacto;
            public StringField IdEscuelaEstado;
            public StringField IdEscuelaCreateUser;
            public DateTimeField IdEscuelaCreateDate;

            public StringField IdRequisitoNacionalNombre;
            public StringField IdRequisitoNacionalCreateUser;
            public DateTimeField IdRequisitoNacionalCreateDate;

            public StringField IdRequisitoExtrangeroNombre;
            public StringField IdRequisitoExtrangeroCreateUser;
            public DateTimeField IdRequisitoExtrangeroCreateDate;

            public StringField IdTituloNombre;
        }
    }
}
