using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentMigrator;


namespace MiMovieTutorial.Migrations.DefaultDB
{
    [Migration(20161107115100)]
    public class DefaultDB_20161107_115100_MovieTable : Migration
    {
        public override void Up()
        {
            // Crea tabla para Actors/Actrices
            Create.Table("Person")
                .WithColumn("PersonId").AsInt32().Identity()
                    .PrimaryKey().NotNullable()
                .WithColumn("Firstname").AsString(50).NotNullable()
                .WithColumn("Lastname").AsString(50).NotNullable()
                .WithColumn("BirthDate").AsDateTime().Nullable()
                .WithColumn("BirthPlace").AsString(100).Nullable()
                .WithColumn("Gender").AsInt32().Nullable()
                .WithColumn("Height").AsInt32().Nullable();


            // Creat tabla intermedia con relacion mucho a muchos 
            // para Master/Detail
            Create.Table("MovieCast")
                .WithColumn("MovieCastId").AsInt32().Identity()
                    .PrimaryKey().NotNullable()
                .WithColumn("MovieId").AsInt32().NotNullable()
                    .ForeignKey("FK_MovieCast_MovieId", "dbo", "Movie", "MovieId")
                .WithColumn("PersonId").AsInt32().NotNullable()
                    .ForeignKey("FK_MovieCast_PersonId", "dbo", "Person", "PersonId")
                .WithColumn("Character").AsString(50).Nullable();
        }
        public override void Down()
        {

        }

    }
}
