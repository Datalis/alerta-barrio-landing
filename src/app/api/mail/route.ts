import { Resend } from 'resend';

export async function POST(req: Request) {
    const body = await req.json();
    const remoteIP = req.headers.get('x-forwarded-for') as string;
    const { email, message, turnstile } = body;
    const turnstile_response = await verifyCaptcha(turnstile, remoteIP);
    if (turnstile_response.success) {
        const { data, error } = await sendEmail(email, message);
        if (error) {
            console.error(error);
            return Response.json({
                status: 'error',
                ...error
            }, {
                status: 400
            });
        }
        return Response.json({
            status: 'success',
            message: 'Email sent',
            ...data
        });
    } else {
        console.error(turnstile_response);
        return Response.json({
            message: 'Captcha verification failed',
            ...turnstile_response
        });
    }
}

async function sendEmail(email: string, message: string) {
    const resend_key = process.env.RESEND_API_KEY as string;
    const resend = new Resend(resend_key);
    const result = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'info@alertabarrio.com',
        subject: 'Nuevo mensaje de contacto | Alerta Barrio',
        html: `
        <h1>Nuevo mensaje de contacto</h1>
        <p>De: <a href="mailto:${email}">${email}</a></p>
        <p>Mensaje: ${message}</p>
        `
    });
    return result;
}

async function verifyCaptcha(turnstile_response: string, remoteIP: string) {
    const turnstile_secret = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY as string;
    const formData = new FormData();
    formData.append("secret", turnstile_secret);
    formData.append("remoteip", remoteIP);
    formData.append("response", turnstile_response);
    const response = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        { method: "POST", body: formData }
    );
    return response.json();
}