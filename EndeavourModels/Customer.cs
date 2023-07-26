namespace EndeavourModels
{
    public class Customer : BaseTable
    {
        public int CustomerID { get; set; }
        public string FirstName { get; set; } = "";
        public string LastName { get; set; } = "";
        public string Email { get; set; } = "";
    }
}