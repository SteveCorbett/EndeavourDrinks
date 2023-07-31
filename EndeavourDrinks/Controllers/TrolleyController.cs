using EndeavourDrinks.DAL.Repositories;
using EndeavourModels;
using EndeavourModels.APIs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EndeavourDrinks.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TrolleyController : Controller
    {
        private readonly ITrolleyRepository _trolleyRepository;

        public TrolleyController(
            ITrolleyRepository trolleyRepository
            ) {
            _trolleyRepository = trolleyRepository;
        }

        [HttpGet]
        [Route("GetTrolley/{CustomerId}")]
        [ProducesResponseType(typeof(TrolleyGetResult), 200)]
        public async Task<IActionResult> GetTrolley(int CustomerId) {
            try {
                TrolleyGetResult result = await _trolleyRepository.GetTrolley(CustomerId);
                return Ok(result);
            }
            catch (Exception) {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpPost]
        [Route("UpdateItem")]
        [ProducesResponseType(typeof(TrolleyGetResult), 200)]
        public async Task<IActionResult> UpdateItem([FromBody] TrolleyUpdateItemInput param) {
            try {
                TrolleyGetResult result = await _trolleyRepository.UpdateItem(param.trolleyId, param.productId, param.quantity);
                return Ok(result);
            }
            catch (Exception) {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }
    }
}
