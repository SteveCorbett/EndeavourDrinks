using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EndeavourModels.APIs
{
    public class TrolleyUpdateItemInput
    {
        public Guid trolleyId { get; set; }
        public int productId { get; set; }
        public int quantity { get; set; }
    }
}
