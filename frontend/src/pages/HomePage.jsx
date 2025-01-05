import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from 'react-bootstrap';
import Header from "../components/Header";
import { useOutletContext } from "react-router-dom";

function HomePage() {
  const context = useOutletContext()
  return (
    <>
      <Header />
      <div className="container d-flex flex-column align-items-center mt-5">
        <Card className="text-center" style={{ borderWidth: "0px", borderColor: "black" }}>
          <Card.Title className="m-3" style={{ fontSize: "2rem", fontWeight: "bold" }}>
            {context.language === 'en' ? 'Welcome to Speedy Translation' : '欢迎来到快捷翻译服务'}
          </Card.Title>
          <Card.Body style={{ fontSize: "1.25rem", lineHeight: "1.75" }}>
            {context.language === 'en' ? 'Hi, I am Tan Cheng Siong, a former court-translator working in the ' +
            'State Court and owner of Speedy Translation Services. ' + 
            'Speedy Translation Services is a sole-proprietorship that specializes ' +
            'in translating documents from mandarin to English and vice-versa. ' +
            'With 30 years of translating experience, I have worked on a variety of documents ' +
            'such as, but not limited to, driving licenses, death certificates, ARCA ' +
            'business profiles, household transcripts, divorce certificates, and more. '
            : '你好，我是 Tan Cheng Siong，一位曾在州法院担任法院翻译员的专业人士，同时也是快' +
            '捷翻译服务的所有者。快捷翻译服务是一家独资经营的公司，专门从事中文和英文之间的文件' + 
            '翻译。拥有30年的翻译经验，我处理过各种文件，包括但不限于：驾驶执照、死亡证明、ARCA' + 
            '商业档案、家庭户口本、离婚证书等。'}
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default HomePage;
