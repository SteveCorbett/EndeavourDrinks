namespace EndeavourModels
{
    public class TrolleyItem : BaseTable
    {
        public Guid TrolleyItemId { get; set; }
        public Guid TrolleyId { get; set; }
        public int Sequence { get; set; }
        public string ProductId { get; set; } = "";
        public decimal SalePrice { get; set; }
        public int Quantity { get; set; }
    }
}
