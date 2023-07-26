using System.Data;

namespace EndeavourDrinks.Connectionfactory
{
    public interface IConnectionFactory
    {
        IDbConnection GetConnection(string connectionString);
    }
}
