using EndeavourDrinks.Connectionfactory;
using System;
using System.Configuration;
using System.Collections.Generic;
using System.Data;

namespace EndeavourDrinks.DAL.Repositories
{
    public class BaseRepository
    {
        protected IDbConnection dbConnection;
        private IConnectionFactory _factory;
        public string conString;

        public BaseRepository(IConnectionFactory factory) {
            _factory = factory;
            var envString = Environment.GetEnvironmentVariable("SQLCONNSTR_DrinksConnStr");
            conString = envString == null ? "" : envString;
            dbConnection = _factory.GetConnection(conString);
        }

    }
}
