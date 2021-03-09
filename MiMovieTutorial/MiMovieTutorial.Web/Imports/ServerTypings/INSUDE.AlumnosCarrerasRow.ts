namespace MiMovieTutorial.INSUDE {
    export interface AlumnosCarrerasRow {
        IdAlumnoCarrera?: number;
        IdAlumno?: number;
        IdTitulo?: number;
        IdPensum?: number;
        IdTituloNivel?: number;
        NoRegistro?: string;
        Fecha?: string;
        Becado?: string;
        FechaGraduacion?: string;
        IdPromocion?: number;
        Promocion?: string;
        Libro?: number;
        Folio?: number;
        Numero?: number;
        Estado?: string;
        CreateDate?: string;
        LastUpdatedAt?: string;
        IdAlumnoNombres?: string;
        IdAlumnoApellidos?: string;
        IdAlumnoSexo?: string;
        IdAlumnoMatricula?: string;
        IdAlumnoFechaNacimiento?: string;
        IdAlumnoLugarNacimiento?: string;
        IdAlumnoFechaRegistro?: string;
        IdAlumnoFechaIngreso?: string;
        IdAlumnoTipoIdentificacion?: string;
        IdAlumnoIdentificacion?: string;
        IdAlumnoEstadoCivil?: number;
        IdAlumnoCorreoElectronico?: string;
        IdAlumnoTelHogar?: string;
        IdAlumnoTelCelular?: string;
        IdAlumnoObservaciones?: string;
        IdAlumnoTipo?: string;
        IdAlumnoDireccion?: string;
        IdAlumnoCiudad?: string;
        IdAlumnoIdPais?: number;
        IdAlumnoIdNacionalidad?: number;
        IdAlumnoIdUsuario?: number;
        IdAlumnoDireccionOficina?: string;
        IdAlumnoFuncion?: string;
        IdAlumnoIdInstitucion?: number;
        IdAlumnoIdRango?: number;
        IdAlumnoIdDependencia?: number;
        IdAlumnoTelOficina?: string;
        IdAlumnoDpMatricula?: string;
        IdAlumnoEcMatricula?: string;
        IdAlumnoEstado?: string;
        IdAlumnoCreateDate?: string;
        IdAlumnoCreateUser?: string;
        IdAlumnoLastUpdatedAt?: string;
        IdTituloCodigo?: string;
        IdTituloNombre?: string;
        IdTituloMencion?: string;
        IdTituloIdEscuela?: number;
        IdTituloIdPensum?: number;
        IdTituloMontoInscripcion?: number;
        IdTituloCosto?: number;
        IdTituloCostoCredito?: boolean;
        IdTituloTituloOtorgado?: string;
        IdTituloIdRequisitoNacional?: number;
        IdTituloIdRequisitoExtrangero?: number;
        IdTituloTipoMatricula?: string;
        IdTituloEstado?: string;
        IdTituloCreateDate?: string;
        IdTituloCreateUser?: string;
        IdTituloCicloAcademico?: string;
        IdPensumIdTitulo?: number;
        IdPensumCodigo?: string;
        IdPensumNombre?: string;
        IdPensumEstado?: string;
        IdPensumCreateDate?: string;
        IdPensumCreateUser?: string;
        IdPensumLastUpdatedAt?: string;
        IdPromocionIdTitulo?: number;
        IdPromocionDescripcion?: string;
        IdPromocionYearInicio?: number;
        IdPromocionYearFin?: number;
        IdPromocionEstado?: string;
        IdPromocionCreateDate?: string;
        IdPromocionLastUpdatedAt?: string;
    }

    export namespace AlumnosCarrerasRow {
        export const idProperty = 'IdAlumnoCarrera';
        export const nameProperty = 'NoRegistro';
        export const localTextPrefix = 'INSUDE.AlumnosCarreras';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdAlumnoCarrera = "IdAlumnoCarrera",
            IdAlumno = "IdAlumno",
            IdTitulo = "IdTitulo",
            IdPensum = "IdPensum",
            IdTituloNivel = "IdTituloNivel",
            NoRegistro = "NoRegistro",
            Fecha = "Fecha",
            Becado = "Becado",
            FechaGraduacion = "FechaGraduacion",
            IdPromocion = "IdPromocion",
            Promocion = "Promocion",
            Libro = "Libro",
            Folio = "Folio",
            Numero = "Numero",
            Estado = "Estado",
            CreateDate = "CreateDate",
            LastUpdatedAt = "LastUpdatedAt",
            IdAlumnoNombres = "IdAlumnoNombres",
            IdAlumnoApellidos = "IdAlumnoApellidos",
            IdAlumnoSexo = "IdAlumnoSexo",
            IdAlumnoMatricula = "IdAlumnoMatricula",
            IdAlumnoFechaNacimiento = "IdAlumnoFechaNacimiento",
            IdAlumnoLugarNacimiento = "IdAlumnoLugarNacimiento",
            IdAlumnoFechaRegistro = "IdAlumnoFechaRegistro",
            IdAlumnoFechaIngreso = "IdAlumnoFechaIngreso",
            IdAlumnoTipoIdentificacion = "IdAlumnoTipoIdentificacion",
            IdAlumnoIdentificacion = "IdAlumnoIdentificacion",
            IdAlumnoEstadoCivil = "IdAlumnoEstadoCivil",
            IdAlumnoCorreoElectronico = "IdAlumnoCorreoElectronico",
            IdAlumnoTelHogar = "IdAlumnoTelHogar",
            IdAlumnoTelCelular = "IdAlumnoTelCelular",
            IdAlumnoObservaciones = "IdAlumnoObservaciones",
            IdAlumnoTipo = "IdAlumnoTipo",
            IdAlumnoDireccion = "IdAlumnoDireccion",
            IdAlumnoCiudad = "IdAlumnoCiudad",
            IdAlumnoIdPais = "IdAlumnoIdPais",
            IdAlumnoIdNacionalidad = "IdAlumnoIdNacionalidad",
            IdAlumnoIdUsuario = "IdAlumnoIdUsuario",
            IdAlumnoDireccionOficina = "IdAlumnoDireccionOficina",
            IdAlumnoFuncion = "IdAlumnoFuncion",
            IdAlumnoIdInstitucion = "IdAlumnoIdInstitucion",
            IdAlumnoIdRango = "IdAlumnoIdRango",
            IdAlumnoIdDependencia = "IdAlumnoIdDependencia",
            IdAlumnoTelOficina = "IdAlumnoTelOficina",
            IdAlumnoDpMatricula = "IdAlumnoDpMatricula",
            IdAlumnoEcMatricula = "IdAlumnoEcMatricula",
            IdAlumnoEstado = "IdAlumnoEstado",
            IdAlumnoCreateDate = "IdAlumnoCreateDate",
            IdAlumnoCreateUser = "IdAlumnoCreateUser",
            IdAlumnoLastUpdatedAt = "IdAlumnoLastUpdatedAt",
            IdTituloCodigo = "IdTituloCodigo",
            IdTituloNombre = "IdTituloNombre",
            IdTituloMencion = "IdTituloMencion",
            IdTituloIdEscuela = "IdTituloIdEscuela",
            IdTituloIdPensum = "IdTituloIdPensum",
            IdTituloMontoInscripcion = "IdTituloMontoInscripcion",
            IdTituloCosto = "IdTituloCosto",
            IdTituloCostoCredito = "IdTituloCostoCredito",
            IdTituloTituloOtorgado = "IdTituloTituloOtorgado",
            IdTituloIdRequisitoNacional = "IdTituloIdRequisitoNacional",
            IdTituloIdRequisitoExtrangero = "IdTituloIdRequisitoExtrangero",
            IdTituloTipoMatricula = "IdTituloTipoMatricula",
            IdTituloEstado = "IdTituloEstado",
            IdTituloCreateDate = "IdTituloCreateDate",
            IdTituloCreateUser = "IdTituloCreateUser",
            IdTituloCicloAcademico = "IdTituloCicloAcademico",
            IdPensumIdTitulo = "IdPensumIdTitulo",
            IdPensumCodigo = "IdPensumCodigo",
            IdPensumNombre = "IdPensumNombre",
            IdPensumEstado = "IdPensumEstado",
            IdPensumCreateDate = "IdPensumCreateDate",
            IdPensumCreateUser = "IdPensumCreateUser",
            IdPensumLastUpdatedAt = "IdPensumLastUpdatedAt",
            IdPromocionIdTitulo = "IdPromocionIdTitulo",
            IdPromocionDescripcion = "IdPromocionDescripcion",
            IdPromocionYearInicio = "IdPromocionYearInicio",
            IdPromocionYearFin = "IdPromocionYearFin",
            IdPromocionEstado = "IdPromocionEstado",
            IdPromocionCreateDate = "IdPromocionCreateDate",
            IdPromocionLastUpdatedAt = "IdPromocionLastUpdatedAt"
        }
    }
}
