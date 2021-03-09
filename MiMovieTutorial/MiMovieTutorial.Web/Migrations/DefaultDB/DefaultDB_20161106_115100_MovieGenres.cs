using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentMigrator;


namespace MiMovieTutorial.Migrations.DefaultDB
{
    [Migration(20161106115100)]
    public class DefaultDB_20161106_115100_MovieTable : Migration
    {
        public override void Up()
        {
            Create.Table("MovieGenres")
                .WithColumn("MovieGenreId").AsInt32()
                    .Identity().PrimaryKey().NotNullable()
                .WithColumn("MovieId").AsInt32().NotNullable()
                    .ForeignKey("FK_MovieGenres_MovieId",
                        "dbo", "Movie", "MovieId")
                .WithColumn("GenreId").AsInt32().NotNullable()
                    .ForeignKey("FK_MovieGenres_GenreId",
                        "dbo", "Genre", "GenreId");

            Execute.Sql(
              @"INSERT INTO MovieGenres (MovieId, GenreId) 
                    SELECT m.MovieId, m.GenreId 
                    FROM Movie m 
                    WHERE m.GenreId IS NOT NULL");

            Delete.ForeignKey("FK_Movie_GenreId").OnTable("Movie");
            Delete.Column("GenreId").FromTable("Movie");
        }
        public override void Down()
        {

        }

    }
}
