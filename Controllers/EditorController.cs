using Microsoft.AspNetCore.Mvc;

namespace MvcVue.Controllers
{
  public class EditorController : Controller
  {
    public IActionResult Index()
    {
      var model = new EditorViewModel("Minha mensagem");
      return View(model);
    }
  }

  public class EditorViewModel
  {
    private string _message;

    public EditorViewModel(string message)
    {
      _message = message;
    }

    public string Message { get { return _message;} }
  }
}
