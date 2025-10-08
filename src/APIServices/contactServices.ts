// services/contactService.ts
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  captcha?: string; // solo para validación local, no se envía
}

export interface ApiResponse {
  success: boolean;
  message: string;
  ticketId?: string | number;
  error?: string;
}

interface RawApiResult {
      success?: boolean;
  result?: string;
  message?: string;
  ticketId?: string | number;
  id?: string | number;
}

export class ContactService {
  private static readonly API_ENDPOINT = 'https://donhoster.com/api/contactapi.php';

  static async submitContactForm(formData: ContactFormData): Promise<ApiResponse> {
    try {
      // Validación básica antes de enviar
      const validation = this.validateFormData(formData);
      if (!validation.isValid) {
        return { success: false, message: validation.message || 'Datos del formulario inválidos' };
      }

      // 👉 Armamos los datos para x-www-form-urlencoded (sin captcha)
const requestData = JSON.stringify({
  name: formData.name.trim(),
  email: formData.email.trim().toLowerCase(),
  subject: formData.subject.trim(),
  message: formData.message.trim(),
  source: 'web_contact_form',
  recaptchaToken: formData.captcha || '' // token invisible
});

      const response = await fetch(this.API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: requestData,
      });

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
      }

      const result = await response.json();
      return this.processApiResponse(result);

    } catch (error) {
      console.error('Error al enviar formulario de contacto:', error);
      return {
        success: false,
        message: this.getErrorMessage(error),
        error: error instanceof Error ? error.message : 'Error desconocido'
      };
    }
  }

  private static validateFormData(data: ContactFormData) {
    if (!data.name?.trim()) return { isValid: false, message: 'El nombre es obligatorio' };
    if (!data.email?.trim()) return { isValid: false, message: 'El email es obligatorio' };
    if (!data.subject?.trim()) return { isValid: false, message: 'El asunto es obligatorio' };
    if (!data.message?.trim()) return { isValid: false, message: 'El mensaje es obligatorio' };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      return { isValid: false, message: 'El formato del email no es válido' };
    }

    return { isValid: true };
  }

private static processApiResponse(result: RawApiResult): ApiResponse {
  if (result.success === true || result.result === 'success') {
    return {
      success: true,
      message: result.message || '¡Mensaje enviado correctamente! Te contactaremos pronto.',
      ticketId: result.ticketId || result.id
    };
  }

  return {
    success: false,
    message: result.message || 'Ocurrió un error al enviar el mensaje.',
    ticketId: undefined
  };
}

  private static getErrorMessage(error: unknown): string {
    if (error instanceof Error) {
      if (error.message.includes('fetch')) return 'Error de conexión. Por favor, inténtalo de nuevo.';
      if (error.message.includes('HTTP Error')) return 'Error del servidor. Nuestro equipo ha sido notificado.';
      return 'Ocurrió un error inesperado. Por favor, inténtalo más tarde.';
    }
    return 'Error desconocido. Por favor, contacta con soporte.';
  }
}
