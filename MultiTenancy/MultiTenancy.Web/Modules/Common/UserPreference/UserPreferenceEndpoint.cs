﻿using Microsoft.AspNetCore.Mvc;
using Serenity.Data;
using Serenity.Services;
using System.Data;
using MyRepository = MultiTenancy.Common.Repositories.UserPreferenceRepository;
using MyRow = MultiTenancy.Common.Entities.UserPreferenceRow;

namespace MultiTenancy.Common.Endpoints
{
    [Route("Services/Common/UserPreference/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize]
    public class UserPreferenceController : ServiceEndpoint
    {
        [HttpPost]
        public ServiceResponse Update(IUnitOfWork uow, UserPreferenceUpdateRequest request)
        {
            return new MyRepository(Context).Update(uow, request);
        }

        public UserPreferenceRetrieveResponse Retrieve(IDbConnection connection, UserPreferenceRetrieveRequest request)
        {
            return new MyRepository(Context).Retrieve(connection, request);
        }
    }
}
