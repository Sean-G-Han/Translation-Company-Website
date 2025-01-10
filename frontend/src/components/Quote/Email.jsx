import { db } from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';

const sendEmail = async (formDetail) => {
  const translatedSubject = '来自快速翻译服务的问候！';
  const translatedHtml = '您好，此电子邮件是为了确认我们已收到您的报价请求。我们会尽快与您联系。感谢您选择快速翻译服务。';
  const order = `
          <p>Here are the details:</p>
          <ul>
            <li>Name/姓名: ${formDetail.name}</li>
            <li>Email/电子邮件: ${formDetail.email}</li>
            <li>Phone/电话: ${formDetail.phone}</li>
            <li>Language/语言: ${formDetail.language}</li>
            <li>Document Type/文件类型: ${formDetail.type}</li>
            <li>Document Length/文件长度: ${formDetail.wordCount} words</li>
          </ul>
          <br/>
        `;
  try {
    const docRef = await addDoc(collection(db, "mail"), {
      to: [formDetail.email],
      message: {
        subject: 'Hello from Speedy Translation Service! / ' + translatedSubject,
        html: order + 'Hi, this email is to confirm that we have received your request for a quotation. We will get back to you as soon as possible. Thank you for choosing Speedy Translation Service. / ' + translatedHtml,
      },
    })
    console.log("Email send with ID: ", docRef.id);
    const docRef2 = await addDoc(collection(db, "mail"), {
      to: [import.meta.env.VITE_OUR_EMAIL],
      message: {
        subject: "Order Received from " + formDetail.name,
        html: order,
      },
    })
    console.log("Email send with ID: ", docRef2.id);
  } catch (e) {
    console.error("Error adding document: ", e);
    throw new Error(e);
  }
}

export default sendEmail;