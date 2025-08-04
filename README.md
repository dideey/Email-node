# Email API

A lightweight Node.js API for sending emails via Gmail SMTP using Nodemailer. Designed for deployment on Vercel (Serverless Functions).

## Features

- 📧 Send emails via Gmail SMTP
- 🔒 Secure authentication with App Passwords
- 🚀 Serverless-ready (Vercel/Netlify compatible)
- 📝 HTML & plaintext email support
- 📤 Attachment support

## Prerequisites

- Node.js 16+
- Gmail account with [2-Step Verification enabled](https://myaccount.google.com/security)
- [App Password](https://myaccount.google.com/apppasswords) (for SMTP authentication)

## Environment Variables

Add these to your Vercel/Netlify project or `.env` file:

```plaintext
GMAIL_USER=your@gmail.com
GMAIL_PASS=your-16-digit-app-password
````

## 🚀 Installation

### Clone the repository:
```bash
git clone https://github.com/dideey/Email-node.git
cd Email-node
```

### Install dependencies:

```bash
npm install
```

### Set up environment variables:

> See the `.env.example` file or instructions above.

---

## 📡 Usage

### API Endpoint

#### `POST /api/send-email`

##### Request Body:

```json
{
  "to": "recipient@example.com",
  "subject": "Test Email",
  "text": "Plaintext content",
  "html": "<p>HTML content</p>",
  "attachments": [
    {
      "filename": "document.pdf",
      "path": "/path/to/file.pdf"
    }
  ]
}
```

---

### 📬 Example Request (JavaScript)

```javascript
fetch('/api/send-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    to: 'user@example.com',
    subject: 'Hello from Email API',
    html: '<h1>Welcome!</h1><p>This is a test email.</p>'
  })
});
```

---

## 🚀 Deployment

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com)

* Set environment variables in the Vercel dashboard
* Push to your connected Git branch for automatic deployment

---

## 🛠 Local Development

```bash
npm run dev
```

---

## 🔐 Security Notes

* ❌ **Never commit `.env` files** to your repository
* 🔄 **Rotate App Passwords** regularly
* ⚠️ Gmail has **daily sending limits** (\~500 emails/day)

---

## 🧯 Troubleshooting

| Error                      | Solution                            |
| -------------------------- | ----------------------------------- |
| `Invalid login: 535-5.7.8` | Regenerate App Password             |
| `EAUTH`                    | Verify IMAP is enabled in Gmail     |
| `ECONNECTION`              | Check firewall/network restrictions |

---

## 📄 License

MIT © Ndwaru Bradley

---

## 📫 Need help?

Open an issue or contact: `ndwarubradley@example.com`

---


