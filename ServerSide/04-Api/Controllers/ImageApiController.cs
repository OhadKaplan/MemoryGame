using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace OhadKaplan.Controllers
{
    public class ImageApiController : ApiController
    {
        private ImageLogic imageLogic = new ImageLogic();

        [EnableCors("*", "*", "*")]
        [HttpGet]
        [Route("images")]
        public HttpResponseMessage GetImagesList()
        {
            try
            {
                List<ImageModel> im = imageLogic.GetImages();
                return Request.CreateResponse(HttpStatusCode.OK, im);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex);
            }
        }


        [HttpGet]
        [Route("images/{id}")]//TODO לחשוב האם צריך את זה
        public HttpResponseMessage GetImageUrl(int id)//לחשוב על מתודולוגיה נכונה ואחידה של שמות
        {
            try
            { 
                string tmpUrlStr = imageLogic.GetImageUrl(id);
                if (tmpUrlStr == null)
                {
                    string error = "Record Not Found!!!";
                    return Request.CreateResponse(HttpStatusCode.BadRequest, error);
                }
                return Request.CreateResponse(HttpStatusCode.OK, tmpUrlStr);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex);
            }
        }

    }
}
