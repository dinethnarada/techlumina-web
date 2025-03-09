import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    email: string;
    company: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name, email, company, message
}) => (
    <div>
        <h2>Sender Information</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>

        <h2>Message Details</h2>
        <p><strong>Subject:</strong> {company}</p>
        <p><strong>Message:</strong></p>
        <p>{message}</p>
    </div>

);