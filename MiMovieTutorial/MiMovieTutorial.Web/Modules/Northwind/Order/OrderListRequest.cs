using Serenity.Services;

namespace MiMovieTutorial.Northwind
{
    public class OrderListRequest : ListRequest
    {
        public int? ProductID { get; set; }
    }
}