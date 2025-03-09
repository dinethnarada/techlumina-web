import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    email: string;
    company: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    email,
    company,
    message,
}) => (
    <div style={{
        backgroundColor: '#f6f9fc',
        padding: '40px 0',
    }}>
        <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
        }}>
            {/* Header */}
            <div style={{
                backgroundColor: '#1a365d',
                padding: '24px',
                textAlign: 'center' as const,
            }}>
                <h1 style={{
                    color: '#ffffff',
                    margin: '0',
                    fontSize: '24px',
                    fontFamily: 'Arial, sans-serif',
                }}>Contact Form Submission</h1>
            </div>

            {/* Content */}
            <div style={{ padding: '32px 24px' }}>
                {/* Sender Information Section */}
                <div style={{
                    marginBottom: '32px',
                    borderBottom: '1px solid #e2e8f0',
                    paddingBottom: '24px',
                }}>
                    <h2 style={{
                        color: '#1a365d',
                        fontSize: '20px',
                        marginTop: '0',
                        marginBottom: '16px',
                        fontFamily: 'Arial, sans-serif',
                    }}>Sender Information</h2>
                    
                    <table style={{
                        width: '100%',
                        borderCollapse: 'collapse' as const,
                    }}>
                        <tbody>
                            <tr>
                                <td style={{
                                    padding: '8px 0',
                                    color: '#4a5568',
                                    width: '120px',
                                    fontFamily: 'Arial, sans-serif',
                                }}><strong>Name:</strong></td>
                                <td style={{
                                    padding: '8px 0',
                                    color: '#1a365d',
                                    fontFamily: 'Arial, sans-serif',
                                }}>{name}</td>
                            </tr>
                            <tr>
                                <td style={{
                                    padding: '8px 0',
                                    color: '#4a5568',
                                    fontFamily: 'Arial, sans-serif',
                                }}><strong>Email:</strong></td>
                                <td style={{
                                    padding: '8px 0',
                                    color: '#1a365d',
                                    fontFamily: 'Arial, sans-serif',
                                }}>{email}</td>
                            </tr>
                            <tr>
                                <td style={{
                                    padding: '8px 0',
                                    color: '#4a5568',
                                    fontFamily: 'Arial, sans-serif',
                                }}><strong>Company:</strong></td>
                                <td style={{
                                    padding: '8px 0',
                                    color: '#1a365d',
                                    fontFamily: 'Arial, sans-serif',
                                }}>{company}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Message Section */}
                <div>
                    <h2 style={{
                        color: '#1a365d',
                        fontSize: '20px',
                        marginTop: '0',
                        marginBottom: '16px',
                        fontFamily: 'Arial, sans-serif',
                    }}>Message</h2>
                    
                    <div style={{
                        backgroundColor: '#f8fafc',
                        padding: '16px',
                        borderRadius: '6px',
                        color: '#1a365d',
                        fontFamily: 'Arial, sans-serif',
                        lineHeight: '1.6',
                        whiteSpace: 'pre-wrap' as const,
                    }}>
                        {message}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div style={{
                backgroundColor: '#f8fafc',
                padding: '24px',
                textAlign: 'center' as const,
                borderTop: '1px solid #e2e8f0',
            }}>
                <p style={{
                    margin: '0',
                    color: '#64748b',
                    fontSize: '14px',
                    fontFamily: 'Arial, sans-serif',
                }}>This is an automated message from your website contact form.</p>
            </div>
        </div>
    </div>
);