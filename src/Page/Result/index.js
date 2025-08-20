import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './result.css'
import { getResult } from "../../Service/ResultService";
import { getListQuestionRs } from "../../Service/ResultService";
function Result() {
  const params = useParams();
  const [dataResult, setDataResult] = useState([]);
  const [scoreStats, setScoreStats] = useState({ correct: 0, total: 0 });
  const [topicId, setTopicId] = useState(null);

  useEffect(() => {
    const fecthApi = async () => {
      const response = await getResult(params.id);
      const dataQuestion = await getListQuestionRs(response.topicId);
      console.log(response);
      console.log(dataQuestion);



      let correctCount = 0;
      let result = [];

      for (let i = 0; i < dataQuestion.length; i++) {
        const matchedAnswer = response.answers.find(
          item => item.questionId === dataQuestion[i].id
        );

        if (matchedAnswer && matchedAnswer.answer === dataQuestion[i].correctAnswer) {
          correctCount++;
        }

        result.push({
          ...dataQuestion[i],
          ...matchedAnswer
        });
      }

      setDataResult(result); // chỉ gọi 1 lần
      setScoreStats({ correct: correctCount, total: dataQuestion.length });
      setTopicId(response.topicId)
    }
    fecthApi()
  }, [params.id])

  console.log(dataResult);
  const navigate = useNavigate();


  const handleClick = () => {
    navigate(`/quiz/${topicId}`)
  }

  return (
    <>
      <h2>Ket Qua:</h2>
      <div className="result__summary">
        <p>Số câu đúng: {scoreStats.correct}</p>
        <p>Số câu sai: {scoreStats.total - scoreStats.correct}</p>
        <p>Tỷ lệ đúng: {((scoreStats.correct / scoreStats.total) * 100).toFixed(2)}%</p>
      </div>


      <div className="result__list">
        {dataResult.map((item, index) => {
          return (
            <div className="result__item" key={item.id}>
              <p>Cau:{index + 1}:{item.question}
                {item.correctAnswer === item.answer ? (
                  <span className="result__tag result__tag--true">Dung</span>
                ) : (<span className="result__tag result__tag--false">Sai</span>)}
              </p>
              {item.answers.map((itemAns, indexAns) => {

                let className = "";
                let checked = false;

                // Nếu đáp án được chọn (do người dùng chọn) trùng với chỉ số hiện tại của đáp án
                if (item.answer === indexAns) {
                  checked = true; // Gán checked = true để hiển thị là đã chọn trong <input type="radio" />
                  className = "result__item--selected"; // Thêm class CSS để làm nổi bật đáp án đã chọn
                }

                // Nếu đây là đáp án đúng theo dữ liệu câu hỏi
                if (item.correctAnswer === indexAns) {
                  className += " result__item--result";
                  // Thêm class CSS khác để đánh dấu đáp án đúng, dù người dùng có chọn hay không
                }


                return (

                  <div className="result__answer" key={indexAns}>
                    <input
                      type="radio"
                      checked={checked}
                      disabled
                    />
                    <label className={className} >{itemAns}</label>

                  </div>
                )
              })}
            </div>
          )
        })}
        <button onClick={handleClick}>lam lai</button>
      </div>
    </>
  )
}
export default Result; 