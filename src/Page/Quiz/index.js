import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTopic } from "../../Service/TopicService";
import { getListQuestion } from "../../Service/QuestionService";
import Cookies from 'js-cookie';
import { postQuiz } from "../../Service/QuizService";
import { useNavigate } from "react-router-dom";

function Quiz() {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [dataQuestion, setDataQuestion] = useState([]);

  useEffect(() => {
    const fecthApi = async () => {
      const result = await getTopic(params.id);
      setData(result);
    }
    fecthApi();
  }, [params.id]);

  useEffect(() => {
    const fecthApi = async () => {
      const result = await getListQuestion();
      setDataQuestion(result);
    }
    fecthApi();
  }, [])



  const filteredQuestions = dataQuestion.filter(q => q.topicId === parseInt(params.id));

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);


    let selectAnswer = [];
    for (let i = 0; i < e.target.elements.length; i++) {
      if (e.target.elements[i].checked) {
        const name = e.target.elements[i].name;
        const value = e.target.elements[i].value;

        selectAnswer.push({
          "questionId": parseInt(name),
          "answer": parseInt(value)
        })
      }

    }

    const option = {
      "userId": parseInt(Cookies.get('id')),
      "topicId": parseInt(params.id),
      "answers": selectAnswer
    }

    const result = await postQuiz(option);
    if (result) {
      navigate(`/result/${result.id}`);
    }
    console.log(result);

  }

  return (
    <>
      <h2>Bài Quiz chủ đề: {data && (<>{data.name}</>)}</h2>
      <div className="form__quiz">
        <form onSubmit={handleSubmit}>
          {filteredQuestions.map((item, index) => {
            return (
              <div className="form__quiz--item" key={item.id}>
                <p>Cau:{index + 1}:{item.question}</p>
                {item.answers.map((itemAns, indexAns) => {
                  return (
                    <div className="form__quiz--answer" key={indexAns}>
                      <input
                        type="radio"
                        name={item.id}
                        // day nua
                        value={indexAns}
                        id={`question-${item.id}-${indexAns}`}
                      />
                      <label htmlFor={`question-${item.id}-${indexAns}`}>{itemAns}</label>
                      {/* //htmlFor de lam gi */}
                    </div>
                  )
                })}
              </div>
            )
          })}
          <button type="submit">Nop bai</button>
        </form>
      </div>
    </>
  )
}
export default Quiz; 