using MiMovieTutorial.Web.Modules.MovieDB.Movie;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRow = MiMovieTutorial.MovieDB.Entities.MovieRow;

namespace MiMovieTutorial.MovieDB.Repositories
{
    public class MovieRepository : BaseRepository
    {
        private static MyRow.RowFields Fld => MyRow.Fields;

        public MovieRepository(IRequestContext context)
            : base(context)
        {
        }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler(Context).Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler(Context).Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler(Context).Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler(Context).Process(connection, request);
        }

        /*
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler(Context).Process(connection, request);
        }
        */
        public ListResponse<MyRow> List(IDbConnection connection, MovieListRequest request)
        {
            return new MyListHandler(Context).Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> 
        {
            
            public MySaveHandler(IRequestContext context)
                : base(context)
            {
            }
            
            /*
            protected override void AfterSave()
            {
                base.AfterSave();

                if (Row.CastList != null)
                {
                    var mc = Entities.MovieCastRow.Fields;
                    var oldList = IsCreate ? null :
                        Connection.List<Entities.MovieCastRow>(
                            mc.MovieId == this.Row.MovieId.Value);

                    new Common.DetailListSaveHandler<Entities.MovieCastRow>(
                        oldList, Row.CastList,x => x.MovieId = Row.MovieId.Value).Process(this.UnitOfWork);

                }
            } 
            */
        }
        
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> 
        {
            public MyDeleteHandler(IRequestContext context)
                : base(context)
            {
            }
        }

        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> 
        {
            public MyRetrieveHandler(IRequestContext context)
                : base(context)
            {
            }
        }
        
        private class MyListHandler : ListRequestHandler<MyRow, MovieListRequest> 
        {
            
            public MyListHandler(IRequestContext context)
                : base(context)
            {
            }
            
        }
    }
}