using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OhadKaplan
{
    public class ResultLogic:BaseLogic
    {

        public ResultModel AddNewResult(ResultModel resultModel)
        {
            Result result = new Result
            {
                
                PlayerId = resultModel.player,
                GameDate = DateTime.Now,
                Duration = resultModel.duration,
                NumberOfSteps = resultModel.steps,
            };
            DB.Results.Add(result);
            DB.SaveChanges();
            resultModel.takenDate = result.GameDate;
            resultModel.id = result.ResultId;            
            return resultModel;
        }

        public List<ResultModel> GetScores()
        {
            var query = from r in DB.GetResults()
                        select new ResultModel
                        {
                            id = r.ResultId,
                            player = r.PlayerId,
                            playerName = r.UserName,
                            takenDate = r.GameDate,
                            duration = r.Duration,
                            steps = r.NumberOfSteps,
                        };
            return query.ToList();
        }

        //get top scroces
        public List<ResultModel> GetScores(int top)
        {
            var query = from r in DB.GetResults()
                        select new ResultModel
                        {
                            id = r.ResultId,
                            player = r.PlayerId,
                            playerName = r.UserName,
                            takenDate = r.GameDate,
                            duration = r.Duration,
                            steps = r.NumberOfSteps,
                        };

            return query.ToList().GetRange(0,top);
        }
    }
}

