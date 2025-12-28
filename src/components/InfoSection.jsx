import React from 'react';

const InfoSection = ({ title, content, bgColor = 'white' }) => {
    return (
        <section style={{ padding: '1rem 0', backgroundColor: bgColor }}>
            <div className="container">
                <h2 style={{
                    fontSize: '2.5rem',
                    marginBottom: '2rem',
                    color: 'var(--color-secondary)',
                    borderLeft: '5px solid var(--color-primary)',
                    paddingLeft: '1rem'
                }}>
                    {title}
                </h2>
                <div style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
                    {content}
                </div>
            </div>
        </section>
    );
};

export default InfoSection;
