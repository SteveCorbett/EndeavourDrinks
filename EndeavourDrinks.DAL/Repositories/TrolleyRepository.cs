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
                dp.Add("@customerId", customerId);

                var gridReader = await dbConnection.QueryMultipleAsync("[dbo].[TrolleyGet]", dp,
                    commandType: CommandType.StoredProcedure);
                ParseTrolleyResults(result, gridReader);
            }
            catch {
                throw;
            }
            return result;
        }

        public async Task<TrolleyGetResult> UpdateItem(Guid trolleyId, int productId, int quantity) {
            TrolleyGetResult result = new TrolleyGetResult();
            try {
                DynamicParameters dp = new DynamicParameters();
                dp.Add("@trolleyId", trolleyId);
                dp.Add("@productId", productId);
                dp.Add("@quantity", quantity);

                var gridReader = await dbConnection.QueryMultipleAsync("[dbo].[TrolleyUpdateItem]", dp,
                    commandType: CommandType.StoredProcedure);
                ParseTrolleyResults(result, gridReader);
            }
            catch {
                throw;
            }
            return result;
        }

        private static void ParseTrolleyResults(TrolleyGetResult result, SqlMapper.GridReader gridReader) {
            result.Trolley = gridReader.Read<Trolley>().FirstOrDefault(result.Trolley);
            result.TrolleyItems = gridReader.Read<TrolleyItem>().ToList();
        }
    }
}
