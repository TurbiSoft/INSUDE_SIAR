namespace MiMovieTutorial.MovieDB {
    export interface MovieForm {
        Title: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        CastList: MovieDB.Entities.MovieCastEditor;
        PrimaryImage: Serenity.ImageUploadEditor;
        GalleryImages: Serenity.MultipleImageUploadEditor;
        Storyline: Serenity.TextAreaEditor;
        Year: Serenity.IntegerEditor;
        ReleaseDate: Serenity.DateEditor;
        Runtime: Serenity.IntegerEditor;
        Kind: Serenity.EnumEditor;
        GenreList: Serenity.LookupEditor;
    }

    export class MovieForm extends Serenity.PrefixedContext {
        static formKey = 'MovieDB.Movie';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MovieForm.init)  {
                MovieForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = MovieDB.Entities.MovieCastEditor;
                var w3 = s.ImageUploadEditor;
                var w4 = s.MultipleImageUploadEditor;
                var w5 = s.IntegerEditor;
                var w6 = s.DateEditor;
                var w7 = s.EnumEditor;
                var w8 = s.LookupEditor;

                Q.initFormType(MovieForm, [
                    'Title', w0,
                    'Description', w1,
                    'CastList', w2,
                    'PrimaryImage', w3,
                    'GalleryImages', w4,
                    'Storyline', w1,
                    'Year', w5,
                    'ReleaseDate', w6,
                    'Runtime', w5,
                    'Kind', w7,
                    'GenreList', w8
                ]);
            }
        }
    }
}
