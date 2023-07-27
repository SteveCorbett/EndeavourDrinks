using EndeavourModels;
using EndeavourModels.APIs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EndeavourDrinks.DAL.Repositories
{
    public interface IProductRepository
    {
        Task<List<Product>> GetProducts();
    }
}
