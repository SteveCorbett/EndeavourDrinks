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
        public async Task<IActionResult> GetTrolley(int CustomerId) {
            try {
                TrolleyGetResult result = await _trolleyRepository.GetTrolley(CustomerId);
                return Ok(result);
            }
            catch (Exception) {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        //// POST: TrolleyController/Edit/5
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public ActionResult Edit(int id, IFormCollection collection) {
        //    try {
        //        return RedirectToAction(nameof(Index));
        //    }
        //    catch {
        //        return View();
        //    }
        //}

        //// GET: TrolleyController/Delete/5
        //public ActionResult Delete(int id) {
        //    return View();
        //}

        //// POST: TrolleyController/Delete/5
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public ActionResult Delete(int id, IFormCollection collection) {
        //    try {
        //        return RedirectToAction(nameof(Index));
        //    }
        //    catch {
        //        return View();
        //    }
        //}
    }
}
