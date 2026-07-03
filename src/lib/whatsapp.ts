const PHONE_NUMBER = "919587384264"; // Client phone number: +91 95873 84264

export type WhatsAppTemplate = 
  | 'general'
  | 'consultation'
  | 'sample_request'
  | 'founder_connect';

export function buildWhatsAppLink(
  template: WhatsAppTemplate,
  variables?: { stoneName?: string; name?: string; studioName?: string; date?: string; projectType?: string }
): string {
  let message = "";

  switch (template) {
    case 'general':
      message = "Hi, I'd like to know more about Desert Hillstone's collections.";
      break;
    case 'consultation':
      if (variables?.name) {
        message = `Hi, I'd like to schedule a private consultation. Here are my details:
- Name: ${variables.name}
- Project Type: ${variables.projectType || 'Not specified'}
- Preferred Date: ${variables.date || 'Not specified'}`;
      } else {
        message = "Hi, I'd like to schedule a private consultation for my project.";
      }
      break;
    case 'sample_request':
      const stone = variables?.stoneName || "one of your stones";
      message = `Hi, I'd like to request material samples for ${stone}.`;
      break;
    case 'founder_connect':
      message = "Hi, I'd like to connect directly with Nemi Choudhary regarding a bespoke stone sourcing inquiry.";
      break;
  }

  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}
