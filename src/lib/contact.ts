export const EMAIL = "sauravbhadauriya17@gmail.com";
export const WHATSAPP_NUMBER = "9058949485";
/** Opens a WhatsApp chat with a short greeting already filled in */
export const WHATSAPP_URL = `https://wa.me/91${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Saurav, I'd like to discuss a project.")}`;
/** Gmail compose link. Opens in any browser, unlike mailto:, which needs a mail app. */
export const EMAIL_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;
