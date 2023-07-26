using EndeavourModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EndeavourDrinks.DAL.Repositories
{
    public interface ICustomerRepository
    {
        Task<Customer> GetCustomer(int customerID);
    }
}
