import { useState, useEffect } from "react";
import { getUserById } from "../../Service/AnswerService";
import { NavLink } from "react-router-dom";
import { getListTopic } from "../../Service/TopicService";
// import { useParams } from "react-router-dom";
function Answer() {
  const [data, setData] = useState([]);
  // const params = useParams();
  useEffect(() => {
    const fecthApi = async () => {
      const answerById = await getUserById();
      const topics = await getListTopic();
      console.log(topics);
      console.log(answerById);

      let result = [];

      for (let i = 0; i < answerById.length; i++) {
        result.push({
          ...topics.find(item => item.id === answerById[i].topicId),
          ...answerById[i]
        })

      }
      setData(result);
    }
    fecthApi();
  }, []);


  console.log(data);

  return (
    <>
      <h2>Danh sach chu de on luyen</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên chủ đề</th>
            <th>Xem Chi Tiết</th>
          </tr>
        </thead>
        <tbody>

          {data.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <NavLink to={"/result/" + item.id}>Xem Chi tiet</NavLink >
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
export default Answer;