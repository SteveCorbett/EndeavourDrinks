using Dapper;
using EndeavourDrinks.Connectionfactory;
using EndeavourModels;
using EndeavourModels.APIs;
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

        public async Task<TrolleyGetResult> GetTrolley(int customerId) {
            TrolleyGetResult result = new TrolleyGetResult();
            try {
                DynamicParameters dp = new DynamicParameters();
                dp.Add("@customerID", customerId);

                var gridReader = await dbConnection.QueryMultipleAsync("[dbo].[TrolleyGet]", dp,
                    commandType: CommandType.StoredProcedure);
                result.Trolley = gridReader.Read<Trolley>().FirstOrDefault(result.Trolley);
                result.TrolleyItems = gridReader.Read<TrolleyItem>().ToList();
            }
            catch {
                throw;
            }
            return result;
        }
    }
}
