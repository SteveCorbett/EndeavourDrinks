using EndeavourDrinks.DAL.Repositories;
using EndeavourModels;
using EndeavourModels.APIs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EndeavourDrinks.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        private readonly IProductRepository _productRepository;

        public ProductController(
            IProductRepository trolleyRepository
            ) {
            _productRepository = trolleyRepository;
        }

        [HttpGet]
        [Route("GetProducts")]
        public async Task<IActionResult> GetProducts() {
            try {
                List<Product> products = await _productRepository.GetProducts();
                return Ok(products);
            }
            catch (Exception) {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }
    }
}
