using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OhadKaplan
{
    public class FeedbackLogic : BaseLogic
    {
        //Get all feedbacks
        public List<FeedbackModel> GetFeedbacks()
        {
            var query = from fb in DB.GetFeedbacks()
                        select new FeedbackModel
                        {
                            id = fb.FeedbackId,
                            createDate = fb.FeedbackDate,
                            playerName = fb.UserName,
                            text = fb.FeedbackText
                        };
            return (query.ToList()).OrderByDescending(o => o.createDate).ToList();

        }

        //Get top N feedbacks
        public List<FeedbackModel> GetFeedbacks(int top)
        {
            var query = from fb in DB.GetFeedbacks()
                        select new FeedbackModel
                        {
                            id = fb.FeedbackId,
                            playerName = fb.UserName,
                            createDate = fb.FeedbackDate,
                            text = fb.FeedbackText
                        };

            if (DB.GetFeedbacks().Count() < top)
            {
                top = DB.GetFeedbacks().Count();
            }
            return (query.ToList()).OrderByDescending(o => o.createDate).ToList().GetRange(0, top); 
        }

        //get from n to X feedbacks - in use for paging
        public List<FeedbackModel> GetFeedbacks(int min ,int max)
        {
            var query = from fb in DB.GetFeedbacks()
                        select new FeedbackModel
                        {
                            id = fb.FeedbackId,
                            playerName = fb.UserName,
                            createDate = fb.FeedbackDate,
                            text = fb.FeedbackText
                        };


            return (query.ToList()).OrderByDescending(o => o.createDate).ToList().GetRange(min, max);
        }

        public FeedbackModel AddNewFeedback(FeedbackModel feedbackModel)
        {
            Feedback feedback = new Feedback
            {
                PlayerId = feedbackModel.player,
                FeedbackText = feedbackModel.text,
                FeedbackDate = DateTime.Now
            };
            DB.Feedbacks.Add(feedback);
            DB.SaveChanges();
            feedbackModel.id = feedback.FeedbackId;
            feedbackModel.createDate = feedback.FeedbackDate;
            return feedbackModel;
        }
    }
}
