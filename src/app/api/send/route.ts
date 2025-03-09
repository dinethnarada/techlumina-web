import { NextRequest } from 'next/server';
import { EmailTemplate } from '../../../components/email/template';
import { Resend } from 'resend';

const resend_api_key = process.env.RESEND_API_KEY
const domain = process.env.DOMAIN
const company_email = process.env.EMAIL

const resend = new Resend(resend_api_key);

export async function POST(request:NextRequest) {
    const {name,email,company,message} = await request.json();
    try {
        const { data, error } = await resend.emails.send({
            from: `TechLumina ${domain}`,
            to: [`${company_email}`],
            subject: 'TechLumina Contact Details',
            react: await EmailTemplate({ name, email, company, message }),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}