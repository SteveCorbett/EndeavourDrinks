namespace EndeavourModels
{
    public class Trolley : BaseTable
    {
        public Guid TrolleyId { get; set; }
        public int CustomerId { get; set; }
        public decimal SubTotal { get; set; }
        public decimal Discounts { get; set; }
        public decimal OrderTotal { get; set; }
    }
}
