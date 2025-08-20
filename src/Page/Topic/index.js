import { useEffect, useState } from "react";
import { getListTopic } from "../../Service/TopicService";
import { NavLink } from "react-router-dom";
import './topic.css';
function Topic() {

  const [toppic, setTopic] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const result = await getListTopic();
      setTopic(result);
    }
    fetchApi();
  }, [])


  return (
    <>
      <h2>Danh sach chu de on luyen</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên chủ đề</th>
            <th>Các bài trắc nhiệm</th>
          </tr>
        </thead>
        <tbody>

          {toppic.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <NavLink to={"/quiz/" + item.id}>Làm bài</NavLink >
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default Topic;