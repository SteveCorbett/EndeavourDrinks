namespace EndeavourModels
{
    public class Product : BaseTable
    {
        public int ProductId { get; set; }
        public string ProductCode { get; set; } = "";
        public string ProductName { get; set; } = "";
        public string ProductClass { get; set; } = "";
        public decimal SalePrice { get; set; }
    }
}
