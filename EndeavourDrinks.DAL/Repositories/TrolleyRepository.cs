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

        public async Task<List<Trolley>> GetTrolleys(int customerID) {
            List<Trolley> result = new List<Trolley>();
            try {
                DynamicParameters dp = new DynamicParameters();
                dp.Add("@customerID", customerID);

                var resultSet = await dbConnection.QueryAsync<Trolley>("[dbo].[TrolleyGetAllActive]", dp,
                    commandType: CommandType.StoredProcedure);
                result = resultSet.ToList();
            }
            catch (Exception ex) {
                throw;
            }
            return result;
        }

        public async Task<TrolleyItemsResult> GetTrolleyItems(Guid TrolleyId) {
            TrolleyItemsResult result = new TrolleyItemsResult();
            try {
                DynamicParameters dp = new DynamicParameters();
                dp.Add("@TrolleyID", TrolleyId);

                var gridReader = await dbConnection.QueryMultipleAsync("[dbo].[TrolleyItemsGetAllActive]", dp,
                    commandType: CommandType.StoredProcedure);
                result.TrolleyItems = gridReader.Read<TrolleyItem>().ToList();
                result.Products = gridReader.Read<Product>().ToList();
            }
            catch (Exception ex) {
                throw;
            }
            return result;
        }
    }
}
