using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EndeavourModels.APIs
{
    public class TrolleyGetResult
    {
        public Trolley Trolley { get; set; } = new Trolley();
        public List<TrolleyItem> TrolleyItems { get; set; } = new List<TrolleyItem>();
    }
}
