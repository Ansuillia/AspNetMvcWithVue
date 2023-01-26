using Microsoft.AspNetCore.Mvc;

namespace MvcVue.Controllers
{
  public class EditorController : Controller
  {
    public IActionResult Index()
    {
      var model = new EditorViewModel
      {
        Message = "Mensagem do Model",
        Name = "Anderson Martins"
      };

      return View(model);
    }
  }

  public class EditorViewModel
  {
    public string? Name { get; set; }
    public string? Message { get; set; }
  }
}
