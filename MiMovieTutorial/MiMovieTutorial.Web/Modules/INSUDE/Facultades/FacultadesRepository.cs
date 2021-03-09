/********************************************
 * 06-03-2021 Agregue dos campos por defecto:
 * UserCrea y fechaCrea en metodo MySaveHandler
 * ******************************************/

using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRow = MiMovieTutorial.INSUDE.Entities.FacultadesRow;

namespace MiMovieTutorial.INSUDE.Repositories
{
    public class FacultadesRepository : BaseRepository
    {
        private static MyRow.RowFields Fld => MyRow.Fields;

        public FacultadesRepository(IRequestContext context)
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

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler(Context).Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> 
        {
            public MySaveHandler(IRequestContext context)
                : base(context)
            {
            }

            // Turbi: agrego datos por defecto
            protected override void BeforeSave()
            {
                base.BeforeSave();
                if (base.IsCreate)
                {
                    //   base.Row.CreateUser = Convert.ToInt32(Authorization.UserId);
                    base.Row.CreateUser = User.Identity.Name ;
                    base.Row.CreateDate = DateTime.Now;
                }
               // base.Row.AuthorChange = Convert.ToInt32(Authorization.UserId);
               // base.Row.Change = DateTime.Now;
            }
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
        
        private class MyListHandler : ListRequestHandler<MyRow> 
        {
            public MyListHandler(IRequestContext context)
                : base(context)
            {
            }
        }
    }
}