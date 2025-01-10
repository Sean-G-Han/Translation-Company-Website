import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from 'react-bootstrap';
import { useOutletContext } from "react-router-dom";
import "../../pages/Page.css";

function AboutUsPage() {
  const context = useOutletContext();
  const isChinese = context.language !== 'en';

  const getFontSize = () => {
    if (window.innerWidth <= 768) {
      return isChinese ? "1.2rem" : "1.1rem";
    }
    return isChinese ? "1.4rem" : "1.25rem";
  };

  return (
      <div className="container d-flex flex-column align-items-center mt-5">
        <Card className="text-center bg-dark text-light mobile" style={{ borderWidth: "0px", borderColor: "black"}}>
          <Card.Title className="m-3" style={{ fontSize: "2rem", fontWeight: "bold" }}>
            {context.language === 'en' ? 'Who Are We?' : '我们是谁？'}
          </Card.Title>
          <Card.Body
            style={{
              fontSize: getFontSize(),
              lineHeight: isChinese ? "2" : "1.75",
            }}
          >
            <Container className="about-us">
            
            <div className="text-start overflow-auto" style={{ height: "60vh" }}>
            {context.language === 'en' ? "Introducing Speedy Translation Services, a trusted name in document translation." : "介绍快速翻译服务，一个值得信赖的文件翻译品牌。"}
            <br/><br/>
            {context.language === 'en' ? "I am a seasoned professional with over 30 years of experience in translation and a former court translator/interpreter with the State Courts. I am a certificated translator/interpreter of the Republic of Singapore. At Speedy Translation Services, I specialize in providing accurate and reliable translations in Chinese and English." : "我是一位拥有超过30年翻译经验的资深专业人士，曾是国家法院的法庭翻译/口译员。我是新加坡共和国的认证翻译/口译员。在快速翻译服务公司，我专注于提供准确可靠的中英文翻译服务。"}
            <br/><br/>
            {context.language === 'en' ? "My expertise spans a wide range of document types, including but not limited to:": "我的专业涵盖各种类型的文件，包括但不限于："}
            <br/>
            <ul className="mt-3 mobile-list">
              <li>{context.language === 'en' ? "Academic Transcripts" : "学历证书"}</li>
              <li>{context.language === 'en' ? "Birth Certificates" : "出生证明"}</li>
              <li>{context.language === 'en' ? "Driving Licenses" : "驾驶执照"}</li>
              <li>{context.language === 'en' ? "Education Certs" : "教育证书"}</li>
              <li>{context.language === 'en' ? "Household Transcripts" : "户口簿"}</li>
              <li>{context.language === 'en' ? "Identity Documents" : "身份证"}</li>
              <li>{context.language === 'en' ? "Marriage/Divorce Certs" : "结婚/离婚证书"}</li>
              <li>{context.language === 'en' ? "Passports" : "护照"}</li>
              <li>{context.language === 'en' ? "and many others..." : "等等..."}</li>
            </ul>
            <br/>
            {context.language === 'en' ? "With a commitment to precision and confidentiality, I ensure every translation meets the requirements by ICA, MOM, MOE, TP, and other statutory boards which require Chinese documents to be translated to English for certified translations. All my translations have so far been accepted by ICA and other government departments." : "我致力于精确和保密，确保每一份翻译都符合ICA、MOM、MOE、TP和其他需要将中文文件翻译成英文的法定机构的要求。到目前为止，我的所有翻译都被ICA和其他政府部门接受。"}
            <br/><br/>
            {context.language === 'en' ? "In case your documents also require notarization by Notary Public, I could refer you to qualified lawyer for your documents (English to Chinese) to be used in China and other countries. So far, all the notary public certified translations have been accepted by them." : "如果您的文件还需要公证人公证，我可以为您推荐合格的律师，以便您的文件（英文到中文）在中国和其他国家使用。到目前为止，所有公证人认证的翻译都被接受。"}
            <br/><br/>
            {context.language === 'en' ? "Choose Speedy Translation Services for your translation needs!" : "选择快速翻译服务，满足您的翻译需求！"}
            <br/><br/>
            {context.language === 'en' ? "For enquiries, please whatsapp me at (+65)96868187, or email me at supersonicsboom@gmail.com - Mr Tan of Speedy Translation Services, UEN: 53383412X" : "如有查询，请通过Whatsapp联系我，电话：(+65)96868187，或发送电子邮件至supersonicsboom@gmail.com - 快速翻译服务的Tan先生，UEN: 53383412X"}
            </div>
            </Container>
          </Card.Body>
        </Card>
      </div>
  );
}

export default AboutUsPage;
