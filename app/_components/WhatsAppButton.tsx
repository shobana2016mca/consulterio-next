'use client';

import { FloatingWhatsApp } from 'react-floating-whatsapp';

export default function WhatsAppButton() {
  return (
    <div className={''}>
      <FloatingWhatsApp
        phoneNumber='+917397022565'
        accountName='Consultero'
        avatar='/invoice-logo.png'
        chatMessage='Hello, I need help with my job search.'
        darkMode={false}
        statusMessage='We are here to help you.'
        placeholder='Type a message...'
        messageDelay={2}
        className=''
      />
    </div>
  );
}
