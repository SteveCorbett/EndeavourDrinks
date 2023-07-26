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
        [Route("GetTrolleys/{CustomerId}")]
        public async Task<IActionResult> GetTrolleys(int CustomerId) {
            try {
                List<Trolley> trolleys = await _trolleyRepository.GetTrolleys(CustomerId);
                return Ok(trolleys);
            }
            catch (Exception) {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet]
        [Route("GetTrolleyItems/{TrolleyId}")]
        public async Task<IActionResult> GetTrolleyItemss(Guid TrolleyId) {
            try {
                TrolleyItemsResult result = await _trolleyRepository.GetTrolleyItems(TrolleyId);
                return Ok(result);
            }
            catch (Exception) {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        // POST: TrolleyController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection) {
            try {
                return RedirectToAction(nameof(Index));
            }
            catch {
                return View();
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
