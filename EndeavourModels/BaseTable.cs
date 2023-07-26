using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EndeavourModels
{
    public class BaseTable
    {
        public DateTime InsertedDate { get; set; }
        public string InsertedBy { get; set; } = "";
        public DateTime UpdatedDate { get; set; }
        public string UpdatedBy { get; set; } = "";
        public bool IsActive { get; set; }
    }
}
