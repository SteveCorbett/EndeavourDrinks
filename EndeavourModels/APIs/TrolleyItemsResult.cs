using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EndeavourModels.APIs
{
    public class TrolleyItemsResult
    {
        public List<TrolleyItem> TrolleyItems { get; set; } = new List<TrolleyItem>();
        public List<Product>   Products { get; set; } = new List<Product>();
    }
}
