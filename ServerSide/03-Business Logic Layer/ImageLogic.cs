using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OhadKaplan
{
    public class ImageLogic:BaseLogic
    {
        public List<ImageModel> GetImages() //TODO - many i dont need that
        {
            var query = from img in DB.Images
                        select new ImageModel
                        {
                            id = img.ImageId,
                            imgName = img.ImageName,
                            imgTypeId = (int)img.ImageTypeId
                        };
            return query.ToList();   

        }



        //Return One Image url by id
        public string GetImageUrl(int id)
        {
            Image image = DB.Images.SingleOrDefault(i => i.ImageId == id);
            if (image == null)
            {
                return null;
            }
            else
            {
                return image.ImageName;
            }
            
            


        }
    }
}
