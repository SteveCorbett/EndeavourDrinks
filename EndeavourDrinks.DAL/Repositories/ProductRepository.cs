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
    public class ProductRepository : BaseRepository, IProductRepository
    {

        public ProductRepository(IConnectionFactory factory) : base(factory) {
        }

        public async Task<List<Product>> GetProducts() {
            List<Product> result = new List<Product>();
            try {

                var resultSet = await dbConnection.QueryAsync<Product>("[dbo].[ProductsGetAll]",
                    commandType: CommandType.StoredProcedure);
                result = resultSet.ToList();
            }
            catch {
                throw;
            }
            return result;
        }
    }
}
