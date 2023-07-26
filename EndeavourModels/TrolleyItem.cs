namespace EndeavourModels
{
    public class TrolleyItem : BaseTable
    {
        public Guid TrolleyItemID { get; set; }
        public Guid TrolleyID { get; set; }
        public string ProductID { get; set; } = "";
        public decimal SalePrice { get; set; }
        public int Quantity { get; set; }
    }
}
