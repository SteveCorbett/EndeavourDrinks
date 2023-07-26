using Dapper;
using EndeavourDrinks.Connectionfactory;
using EndeavourModels;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EndeavourDrinks.DAL.Repositories
{
    public class TrolleyRepository : BaseRepository, ITrolleyRepository
    {

        public TrolleyRepository(IConnectionFactory factory) : base(factory) {
        }

        public async Task<List<Trolley>> GetTrolleys(int customerID) {
            List<Trolley> result = new List<Trolley>();
            try {
                DynamicParameters dp = new DynamicParameters();
                dp.Add("@customerID", customerID);

                result = await dbConnection.QueryAsync<Trolley>("[dbo].[CustomerGet]", dp,
                    commandType: CommandType.StoredProcedure).ToList();
            }
            catch (Exception ex) {
                throw;
            }
            return result;
        }
    }
}
