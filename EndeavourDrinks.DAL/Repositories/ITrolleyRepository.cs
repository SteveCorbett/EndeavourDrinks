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
        //void AddTrolleyItem(Guid trolleyID, string productID, decimal salePrice, int quantity);
        //void DeleteTrolleyItem(Guid trolleyItemID);
        //void UpdateTrolleyItem(Guid trolleyItemID, int quantity);
        //void EmptyTrolley(Guid trolleyID);
        //List<TrolleyItem> GetTrolleyItems(Guid trolleyID);
        //Trolley GetTrolley(Guid trolleyID);
        Task<TrolleyGetResult> GetTrolley(int CustomerId);
    }
}
