using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentMigrator;


namespace MiMovieTutorial.Migrations.DefaultDB
{
    [Migration(20161105115100)]
    public class DefaultDB_20161105_115100_MovieTable : Migration
    {
        public override void Up()
        {
            Insert.IntoTable("Genre")
               .Row(new
               {
                   Name = "Action"
               })
               .Row(new
               {
                   Name = "Drama"
               })
               .Row(new
               {
                   Name = "Comedy"
               })
               .Row(new
               {
                   Name = "Sci-fi"
               })
               .Row(new
               {
                   Name = "Fantasy"
               })
               .Row(new
               {
                   Name = "Documentary"
               });
        }
        public override void Down()
        {

        }

    }
}
