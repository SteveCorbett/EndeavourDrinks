using EndeavourModels;
using EndeavourModels.APIs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EndeavourDrinks.DAL.Repositories
{
    public interface ITrolleyRepository
    {    
        Task<TrolleyGetResult> GetTrolley(int CustomerId);
        Task<TrolleyGetResult> UpdateItem(Guid trolleyId, int productId, int quantity);    
    }
}
