namespace MiMovieTutorial.INSUDE {
    export interface AlumnosRow {
        IdAlumno?: number;
        Nombres?: string;
        Apellidos?: string;
        Sexo?: string;
        Matricula?: string;
        FechaNacimiento?: string;
        LugarNacimiento?: string;
        FechaRegistro?: string;
        FechaIngreso?: string;
        TipoIdentificacion?: string;
        Identificacion?: string;
        EstadoCivil?: number;
        CorreoElectronico?: string;
        TelHogar?: string;
        TelCelular?: string;
        Observaciones?: string;
        Tipo?: string;
        Direccion?: string;
        Ciudad?: string;
        IdPais?: number;
        IdNacionalidad?: number;
        IdUsuario?: number;
        DireccionOficina?: string;
        Funcion?: string;
        IdInstitucion?: number;
        IdRango?: number;
        IdDependencia?: number;
        TelOficina?: string;
        DpMatricula?: string;
        EcMatricula?: string;
        Estado?: string;
        CreateDate?: string;
        CreateUser?: string;
        LastUpdatedAt?: string;
        IdPaisNombre?: string;
        IdPaisEstado?: string;
        IdPaisCreateDate?: string;
        IdPaisCreateUser?: string;
        IdNacionalidadNombre?: string;
        IdNacionalidadEstado?: string;
        IdNacionalidadCreateUser?: string;
        IdNacionalidadCreateDate?: string;
        IdInstitucionIdCompania?: number;
        IdInstitucionNombre?: string;
        IdInstitucionCreateUser?: string;
        IdInstitucionCreateDate?: string;
        IdRangoNombre?: string;
        IdDependenciaNombre?: string;
        IdSexoNombre?: string;
        IdEstadoCivilNombre?: string;
        lstCarreras?: number[];
    }

    export namespace AlumnosRow {
        export const idProperty = 'IdAlumno';
        export const nameProperty = 'Nombres';
        export const localTextPrefix = 'INSUDE.Alumnos';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdAlumno = "IdAlumno",
            Nombres = "Nombres",
            Apellidos = "Apellidos",
            Sexo = "Sexo",
            Matricula = "Matricula",
            FechaNacimiento = "FechaNacimiento",
            LugarNacimiento = "LugarNacimiento",
            FechaRegistro = "FechaRegistro",
            FechaIngreso = "FechaIngreso",
            TipoIdentificacion = "TipoIdentificacion",
            Identificacion = "Identificacion",
            EstadoCivil = "EstadoCivil",
            CorreoElectronico = "CorreoElectronico",
            TelHogar = "TelHogar",
            TelCelular = "TelCelular",
            Observaciones = "Observaciones",
            Tipo = "Tipo",
            Direccion = "Direccion",
            Ciudad = "Ciudad",
            IdPais = "IdPais",
            IdNacionalidad = "IdNacionalidad",
            IdUsuario = "IdUsuario",
            DireccionOficina = "DireccionOficina",
            Funcion = "Funcion",
            IdInstitucion = "IdInstitucion",
            IdRango = "IdRango",
            IdDependencia = "IdDependencia",
            TelOficina = "TelOficina",
            DpMatricula = "DpMatricula",
            EcMatricula = "EcMatricula",
            Estado = "Estado",
            CreateDate = "CreateDate",
            CreateUser = "CreateUser",
            LastUpdatedAt = "LastUpdatedAt",
            IdPaisNombre = "IdPaisNombre",
            IdPaisEstado = "IdPaisEstado",
            IdPaisCreateDate = "IdPaisCreateDate",
            IdPaisCreateUser = "IdPaisCreateUser",
            IdNacionalidadNombre = "IdNacionalidadNombre",
            IdNacionalidadEstado = "IdNacionalidadEstado",
            IdNacionalidadCreateUser = "IdNacionalidadCreateUser",
            IdNacionalidadCreateDate = "IdNacionalidadCreateDate",
            IdInstitucionIdCompania = "IdInstitucionIdCompania",
            IdInstitucionNombre = "IdInstitucionNombre",
            IdInstitucionCreateUser = "IdInstitucionCreateUser",
            IdInstitucionCreateDate = "IdInstitucionCreateDate",
            IdRangoNombre = "IdRangoNombre",
            IdDependenciaNombre = "IdDependenciaNombre",
            IdSexoNombre = "IdSexoNombre",
            IdEstadoCivilNombre = "IdEstadoCivilNombre",
            lstCarreras = "lstCarreras"
        }
    }
}
