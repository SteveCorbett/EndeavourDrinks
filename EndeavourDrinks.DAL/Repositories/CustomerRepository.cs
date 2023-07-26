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
    public class CustomerRepository : BaseRepository, ICustomerRepository
    {

        public CustomerRepository(IConnectionFactory factory) : base(factory) {
        }

        public async Task<Customer> GetCustomer(int customerID) {
            Customer result = new Customer();
            try {
                DynamicParameters dp = new DynamicParameters();
                dp.Add("@customerID", customerID);

                result = await dbConnection.QueryFirstAsync<Customer>("[dbo].[CustomerGet]", dp,
                    commandType: CommandType.StoredProcedure);
            }
            catch (Exception ex) {
                throw;
            }
            return result;
        }
    }
}
