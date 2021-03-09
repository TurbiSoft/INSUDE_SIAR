using Serenity.Navigation;
using MyPages = MiMovieTutorial.MovieDB.Pages;

[assembly: NavigationLink(int.MaxValue, "MovieDB/Movie", typeof(MyPages.MovieController),
    icon: "fa-video-camera")]
/*
[assembly: Serenity.Navigation.NavigationLink(int.MaxValue, "MovieDB/Movie",
    typeof(MiMovieTutorial.MovieDB.Pages.MovieController), icon: "fa-video-camera")]
*/
[assembly: NavigationLink(int.MaxValue, "MovieDB/Genre", typeof(MyPages.GenreController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "MovieDB/ Movie Genres", typeof(MyPages. MovieGenresController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "MovieDB/Person", typeof(MyPages.PersonController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "MovieDB/Movie Cast", typeof(MyPages.MovieCastController), icon: null)]