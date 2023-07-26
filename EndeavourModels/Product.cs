namespace EndeavourModels
{
    public class Product : BaseTable
    {
        public int ProductID { get; set; }
        public string ProductCode { get; set; } = "";
        public string ProductName { get; set; } = "";
        public string SalePrice { get; set; } = "";
    }
}
