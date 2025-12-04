import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// 環境変数を使用
const {
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_USER,
  EMAIL_PASS,
  EMAIL_TO, // 管理者宛のメール
} = process.env;

export async function POST(req: Request) {
  try {
    const { lastName, firstName, email, phone, inquiryType, message } =
      await req.json();

    // 必須項目のバリデーション
    const requiredFields = [
      lastName,
      firstName,
      email,
      phone,
      inquiryType,
      message,
    ];
    if (requiredFields.some((field) => !field || field.trim() === "")) {
      return NextResponse.json(
        { error: "すべての必須項目を入力してください。" },
        { status: 400 }
      );
    }

    // Nodemailer の設定
    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: Number(EMAIL_PORT),
      secure: EMAIL_PORT === "465", // ポート465の場合はtrue
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    // お問い合わせ内容のテキストマッピング
    const inquiryTypeTextMap: Record<string, string> = {
      trial: "体験レッスンについて",
      lesson: "レッスン・料金について",
      course: "コース・カリキュラムについて",
      performance: "演奏依頼について",
      other: "その他",
    };

    // メール本文を組み立てる
    let emailBody = "";

    emailBody += `【お問い合わせ内容】 ${
      inquiryTypeTextMap[inquiryType] || inquiryType
    }\n`;
    emailBody += `姓: ${lastName}\n`;
    emailBody += `名: ${firstName}\n`;
    emailBody += `メールアドレス: ${email}\n`;
    emailBody += `お電話番号: ${phone}\n`;
    emailBody += `本文:\n${message}\n`;

    // ① 管理者宛のメール
    const adminMailOptions = {
      from: `"お問い合わせフォーム" <${EMAIL_USER}>`,
      to: EMAIL_TO,
      subject: "【お問い合わせ】新しいメッセージが届きました",
      text: emailBody,
      replyTo: email,
    };

    // ② ユーザー宛の確認メール
    let userEmailBody = `${lastName} ${firstName} 様\n\nお問い合わせありがとうございます。\n以下の内容で受け付けました。\n\n------------------\n`;
    userEmailBody += emailBody;
    userEmailBody +=
      "\n------------------\n\n担当者が確認後、ご連絡いたします。\n\nよろしくお願いいたします。";

    const userMailOptions = {
      from: `"福田ひろみバイオリン教室"`,
      to: email,
      subject: "【自動返信】お問い合わせありがとうございます。",
      text: userEmailBody,
      replyTo: EMAIL_USER,
    };

    // 2通のメールを並列送信
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return NextResponse.json(
      { message: "メールが正常に送信されました。" },
      { status: 200 }
    );
  } catch (error) {
    console.error("メール送信エラー:", error);
    return NextResponse.json(
      { error: "メール送信に失敗しました。" },
      { status: 500 }
    );
  }
}
