import { Resend } from "resend";

const resend = new Resend("re_ZjKHbndX_88jjSj2VBRgD6iTLWq7XmBBc");

async function verifyDomain() {
  const result = await resend.domains.verify(
    "b56b5ff8-94d4-4699-be9f-26896e227ee9"
  );
  console.log(result);
}

verifyDomain();
