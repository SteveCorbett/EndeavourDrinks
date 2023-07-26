using EndeavourDrinks.DAL.Repositories;
using EndeavourModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EndeavourDrinks.Controllers
{
        [ApiController]
        [Route("api/[controller]")]
    public class CustomerController : Controller
    {
        private readonly ICustomerRepository _customerRepository;

        public CustomerController(
            ICustomerRepository customerRepository
            ) {
            _customerRepository = customerRepository;
        }

        [HttpGet]
        [Route("GetCustomer/{id}")]
        public async Task<IActionResult> GetCustomer(int id) {
            try {
                Customer customer = await _customerRepository.GetCustomer(id);
                return Ok(customer);
            }
            catch (Exception) {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }
    }
}
