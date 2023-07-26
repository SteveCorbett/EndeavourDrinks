using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EndeavourDrinks.Controllers
{
        [ApiController]
        [Route("api/[controller]")]
    public class TrolleyController : Controller
    {
        [HttpGet]
        [Route("GetDetails")]
        public ActionResult Details() {
            return View();
        }
        [HttpGet]
        [Route("GetDetails/{id}")]
        public ActionResult Details(int id) {
            return View();
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
