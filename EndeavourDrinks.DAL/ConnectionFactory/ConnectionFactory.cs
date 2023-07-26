using System.Data;
using System.Data.SqlClient;

namespace EndeavourDrinks.Connectionfactory;

public class ConnectionFactory : IConnectionFactory
{
        private IDbConnection? connection;
        public ConnectionFactory() {
            connection = null;
        }

        public void Dispose() {
            if (connection != null) {
                connection.Dispose();
                connection = null;
            }
        }

        public IDbConnection GetConnection(string connectionString) {
            if (connection == null)
                connection = new SqlConnection(connectionString);

            return connection;
        }
    }