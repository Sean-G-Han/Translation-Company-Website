import { Form, Button, Card } from 'react-bootstrap';
import { useOutletContext } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Form.css";

function QuoteForm() {
  const context = useOutletContext();
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <Card className="text-start bg-dark text-light" style={{ borderWidth: "0px", borderColor: "black" }}>
        <Card.Title className="m-3 text-center" style={{ fontSize: "2rem", fontWeight: "bold" }}>
          {context.language === "en" ? "Get a Quotation" : "获取报价"}
        </Card.Title>
        <Form onSubmit={handleSubmit} style={{ padding: "0 2rem 2rem 2rem" }}>
          <h3>Personal Details</h3>
          <div className="custom-div">
            <Form.Group controlId="formBasicName">
              <Form.Label>{context.language === "en" ? "Name" : "姓名"}</Form.Label>
              <Form.Control 
                type="text"
                name="name"
                placeholder={context.language === "en" ? "Enter Name" : "输入姓名"} 
                className="bg-dark text-light custom-placeholder"
                onChange={(e) => console.log(e.target.value)}
              />
            </Form.Group>
          </div>

          <div className="custom-div">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>{context.language === "en" ? "Contact Email Address" : "联系电子邮件地址"}</Form.Label>
              <Form.Control 
                type="email"
                name="email"
                placeholder={context.language === "en" ? "Enter Email" : "输入电子邮件"}
                className="bg-dark text-light custom-placeholder"
                onChange={(e) => console.log(e.target.value)}
              />
            </Form.Group>
          </div>

          <div className="custom-div">
            <Form.Group controlId="formBasicPhone">
              <Form.Label>{context.language === "en" ? "Contact Phone Number" : "联系电话号码"}</Form.Label>
              <Form.Control 
                type="tel" 
                name="phone"
                placeholder={context.language === "en" ? "Enter Phone Number" : "输入电话号码"} 
                className="bg-dark text-light custom-placeholder"
                onChange={(e) => console.log(e.target.value)}
              />
            </Form.Group>
          </div>

          <h3 className='mt-5'>Document Details</h3>
          <div className="custom-div">
            <Form.Group controlId="formBasicDropdown">
              <Form.Label>{context.language === "en" ? "Document Type" : "文档类型"}</Form.Label>
              <Form.Control 
                as="select"
                name="type"
                className="bg-dark text-light custom-placeholder"
                onChange={(e) => console.log(e.target.value)}
              >
                <option>{context.language === "en" ? "Birth Certificate" : "出生证明"}</option>
                <option>{context.language === "en" ? "Business Profile" : "商业简介"}</option>
                <option>{context.language === "en" ? "Death Certificate" : "死亡证明"}</option>
                <option>{context.language === "en" ? "Divorce Certificate" : "离婚证书"}</option>
                <option>{context.language === "en" ? "Driving License" : "驾驶执照"}</option>
                <option>{context.language === "en" ? "Graduation Certificate" : "毕业证书"}</option>
                <option>{context.language === "en" ? "Household Transcript" : "户口簿"}</option>
                <option>{context.language === "en" ? "Identity Card" : "身份证"}</option>
                <option>{context.language === "en" ? "Immunization Certificate" : "免疫证书"}</option>
                <option>{context.language === "en" ? "Marriage Certificate" : "结婚证书"}</option>
                <option>{context.language === "en" ? "Norminal Certificate" : "名义证书"}</option>
                <option>{context.language === "en" ? "Skill Certificate" : "技能证书"}</option>
                <option>{context.language === "en" ? "Others..." : "其他..."}</option>
              </Form.Control>
            </Form.Group>
          </div>

          <div className="custom-div">
              <Form.Group controlId="formBasicLanguage">
                <Form.Label>{context.language === "en" ? "Original Language" : "原始语言"}</Form.Label>
                <Form.Control 
                  as="select"
                  name="language"
                  className="bg-dark text-light custom-placeholder"
                  onChange={(e) => console.log(e.target.value)}
                >
                  <option>{context.language === "en" ? "English → Chinese" : "英文 → 华文"}</option>
                  <option>{context.language === "en" ? "Chinese → English" : "华文 → 英文"}</option>
                </Form.Control>
              </Form.Group>
          </div>

          <div className="custom-div">
            <Form.Group controlId="formBasicWordCount">
              <Form.Label>{context.language === "en" ? "Document Word Count" : "文档字数"}</Form.Label>
              <Form.Control 
                type="number"
                name="wordCount"
                placeholder={context.language === "en" ? "Enter Word Count" : "输入字数"} 
                className="bg-dark text-light custom-placeholder" 
                onChange={(e) => console.log(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="custom-div">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}

export default QuoteForm;
